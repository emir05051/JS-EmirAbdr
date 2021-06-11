window.addEventListener("load", async () => {
  const db = await DbContext.open();
  await db.seed(mockCities);


  const input = document.forms["search"].elements["search_from"];
  // const input_to = document.forms["search"].elements["search_to"];

  console.log(input);
  
  const renderCity = city => {
    return $("div", {}, [city.name].join(" "));
  }
  const _renderCities = container => cities => {
    while (container.firstChild) {
      container.firstChild.remove();
    }
  
    container.append(...cities.map(renderCity()));
  };

  // console.log(city.name)

  const getHrefQuery = () => {
    const queryString = window.location.search.slice(1);
  
  
    return Object.fromEntries(
      queryString.split("&")
      .map(pair => pair.trimStart())
      .map(pair => {
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
      }));
    }
  
  const handleLocation = (handleInput, input) => {
    const query = getHrefQuery()["query"];
  
    if (query) {
      input.value = query;
      handleInput(query);
    }
  
  }
  

  const renderCities = _renderCities(document.getElementById("cities"));
  const search = _search(db)
  const handleInput = _handleInput(search, renderCities);

  handleLocation(handleInput, input);
  
  window.addEventListener("popstate", () => {
    console.log(window.location.search);
    handleLocation(handleInput, input);
  });

  input.addEventListener("input", async e => {
    const query =  sanitizeQuery(input.value);
    updateHistory(query);
    await handleInput(query);
  });

  console.log(db);
});

const sanitizeQuery = query => query.trim();

const updateHistory = query => {
  window.document.title = "Поиск: " + query;
  // window.location.href = "http://google.com/search?q=" + window.encodeURIComponent(query);
  window.history.pushState(null, "Поиск: " + query, "?query=" + window.encodeURIComponent(query));
}

const _handleInput = (search, renderCities) => async query  => {
  renderCities(await search(query));
}

const _search = db => async query => {

  if (!query) {
    return [];
  }

  const randMatch = query.match(/^rand (\d+)$/i)
  if (randMatch) {
    return await db.listRandom(parseInt(randMatch[1]));
  }

  // validation
  // разобрать сложный запрос

  let predicate;
  if (query.search(/^\+?\d+$/) >= 0) {
    query = query.toUpperCase();
    predicate = city => {
      return city.name.toUpperCase().includes(query);
  }

  return await db.findCity(predicate);
}





}