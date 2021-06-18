window.addEventListener("load", async () => {
  const db = await DbContext.open();
  await db.seed(mockCity);
  // Формы и селекты
  const form = document.forms["search"];
  const input = document.forms["search"].elements["query"];
  const input2 = document.forms["search"].elements["query2"];
  const selectCity = document.getElementById("cities");
  const selectCity2 = document.getElementById("cities2");
  // Render
  const renderCities = _renderCities(document.getElementById("cities"));
  const renderCities2 = _renderCities(document.getElementById("cities2"));
  // Поиск
  const search = _search(db);
  const handleInput = _handleInput(search, renderCities);
  const handleInput2 = _handleInput(search, renderCities2);
  // Datepicker
  const datePicker = document.getElementById("date-picker");
  const dropout = document.getElementById("drop_out_1");
  const dateTo = document.getElementById("date_to");
  const dateFrom = document.getElementById("date_out");

  // Основной code
  datePicker.style.display = "none";

  if (selectCity.children[0] === undefined) {
    selectCity.style.opacity = 0;
    selectCity2.style.opacity = 0;
  }

  input2.addEventListener("focus", () => {
    selectCity.style.opacity = 0;
    selectCity2.style.opacity = 255;

    input2.value = document.cookie;

    window.addEventListener("popstate", () => {
      console.log(window.location.search);
      handleLocation(handleInput2, input2);
    });

    input2.addEventListener("input", async (e) => {
      const query2 = sanitizeQuery(input2.value);
      console.log(query2);
      updateCookie(query2);
      console.log(document.cookie);
      await handleInput2(query2);
    });
  });

  input.addEventListener("focus", () => {
    handleLocation(handleInput, input);
    selectCity.style.opacity = 255;
    selectCity2.style.opacity = 0;
    // console.log(window.encodeURIComponent(input.value));

    window.addEventListener("popstate", () => {
      console.log(window.location.search);
      handleLocation(handleInput, input);
      handleLocation(handleInput2, input2);
    });

    input.addEventListener("input", async (e) => {
      const query = sanitizeQuery(input.value);
      updateHistory(query);
      await handleInput(query);
    });

    console.log(db);
  });
  input.addEventListener("keydown", (e) => {
    if (
      e.keyCode == 38 ||
      e.keyCode == 40 ||
      e.keyCode == 17 ||
      e.keyCode == 18 ||
      e.keyCode == 9
    ) {
      selectCity.focus();
    }
  });
  selectCity.addEventListener("change", (e) => {
    console.log(e);
    if (e.keyCode == 27) {
      input.focus();
    }

    input.value = e.target.value;
    updateHistory(input.value);
  });

  input2.addEventListener("keydown", (e) => {
    let i = 0;
    if (
      e.keyCode == 38 ||
      e.keyCode == 40 ||
      e.keyCode == 17 ||
      e.keyCode == 18 ||
      e.keyCode == 9
    ) {
      selectCity2.focus();

      // selectCity2.addEventListener("keydown", (e) => {
      //   console.log(e);
      //   if (e.keyCode == 40) {
      //     i <= selectCity2.length - 1 ? i++ : (i = i);
      //     console.log(i);
      //   }
      //   if (e.keyCode == 38) {
      //     i > 1 ? i-- : (i = i);
      //     console.log(i);
      //   }
      //   if (e.keyCode == 27) {
      //     input2.focus();
      //   }
      //   if (e.keyCode == 13) {
      //     console.log([selectCity2]);
      //     input2.value = selectCity2.children[i - 1].innerHTML;
      //     document.cookie = input2.value;
      //   }
      // });
    }
  });
  selectCity2.addEventListener("change", (e) => {
    console.log(e);
    if (e.keyCode == 27) {
      input2.focus();
    }
    input2.value = e.target.value;
    document.cookie = input2.value;
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (areEqual(input.value, input2.value)) {
      return false;
    }

    form.submit();
  });

  //
  // DATEPCIKER
  //

  dateTo.addEventListener("focus", () => {
    selectCity.style.opacity = 0;
    selectCity2.style.opacity = 0;
    datePicker.style.display = "flex";
  });
});
const sanitizeQuery = (query) => query.trim();

const updateHistory = (query) => {
  window.history.pushState(
    null,
    "Поиск: " + query,
    "?query=" + window.encodeURIComponent(query)
  );
};

const updateCookie = (query) => {
  document.cookie = query;
};

const _handleInput = (search, renderCities) => async (query) => {
  renderCities(await search(query));
};

const _search = (db) => async (query) => {
  if (!query) {
    return [];
  }

  const randMatch = query.match(/^rand (\d+)$/i);
  if (randMatch) {
    return await db.listRandom(parseInt(randMatch[1]));
  }

  let predicate;
  query = query.toUpperCase();
  predicate = (city) => {
    return city.name.toUpperCase().includes(query);
  };

  return await db.findCities(predicate);
};

const _renderCities = (container) => (cities) => {
  while (container.firstChild) {
    container.firstChild.remove();
  }

  container.append(...cities.map(renderCity));
};

const renderCity = (city, i) => {
  return $(
    "option",
    {
      id: i,
    },
    [city.name]
  );
};

const handleLocation = (handleInput, input) => {
  const query = getHrefQuery()["query"];

  if (query) {
    input.value = query;
    handleInput(query);
  }
};

const getHrefQuery = () => {
  const queryString = window.location.search.slice(1);

  // console.log(queryString);

  return Object.fromEntries(
    queryString
      .split("&")
      .map((pair) => pair.trimStart())
      .map((pair) => {
        const i = pair.indexOf("=");

        let key = pair.slice(0, i);

        try {
          key = window.decodeURIComponent(key);
        } catch (e) {}

        let value = pair.slice(i + 1);

        try {
          value = window.decodeURIComponent(value);
        } catch (e) {}
        return [key, value];
      })
  );
};
