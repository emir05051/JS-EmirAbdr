window.addEventListener("load", () => {
  let date = new Date();
  const days = document.getElementById("days");
  const dates = document.getElementById("dates");
  let currentDate = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");
  const dateTo = document.getElementById("date_to");
  // const dateTo = document.getElementById("date_to");
  days_of_the_week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Cб", "Вс"];

  day.innerHTML = currentDate;
  month.innerHTML = currentMonth;
  year.innerHTML = currentYear;

  for (let index = 0; index < days_of_the_week.length; index++) {
    days.append(
      $(
        "div",
        {
          id: index + 1,
        },
        days_of_the_week[index]
      )
    );
  }

  makeCalendar(date);
  changeDate(dates, dateTo);

  arrowLeft.addEventListener("click", () => {
    currentMonth--;
    date = new Date(date - oneDay * 30);
    deleteAllElements(dates);
    makeCalendar(date);
    changeDate(dates, dateTo);
    if (currentMonth == 0) {
      currentMonth = 12;
      currentYear--;
    }
    month.innerHTML = currentMonth;
    year.innerHTML = currentYear;
  });

  arrowRight.addEventListener("click", () => {
    currentMonth++;
    date = new Date(Date.parse(date) + oneMonth);
    console.log(date);
    deleteAllElements(dates);
    makeCalendar(date);
    changeDate(dates, dateTo);
    if (currentMonth == 13) {
      currentMonth = 1;
      currentYear++;
    }
    month.innerHTML = currentMonth;
    year.innerHTML = currentYear;
  });
  // Смена месяца
  month.addEventListener("click", (e) => {
    let previous = month.innerHTML;
    if (month.children.length == 0) {
      deleteAllElements(month);
      const select = $("select", {
        style: {
          "max-width": 150 + "px",
        },
      });
      month.append(select);

      console.log(e);
      for (let i = 0; i < 12; ++i) {
        select.append($("option", { value: i + 1 }, months[i]));
        if (i == previous) {
          Array.from(select.children)[i - 1].style.backgroundColor = "cyan";
        }
      }
      select.addEventListener("change", (e) => {
        console.log(e.target.value + " " + "Мы choose");
        console.log(previous + "Прошлое");
        console.log(e.target.value > previous);
        if (e.target.value > previous) {
          date = new Date(
            Date.parse(date) +
              (parseInt(e.target.value) - parseInt(previous)) * oneMonth
          );
          console.log(parseInt(e.target.value) - parseInt(previous));

          console.log(date);
          complete(date, dates, dateTo);
        }
        if (e.target.value < previous) {
          date = new Date(
            date - (parseInt(previous) - parseInt(e.target.value)) * oneMonth
          );

          console.log(e.target.value - previous);
          console.log();
          console.log(date);
          complete(date, dates, dateTo);
        }
        deleteAllElements(month);
        month.innerHTML = e.target.value;
        currentMonth = e.target.value;
      });
    }
  });
  // Смена YEAR
  year.addEventListener("click", (e) => {
    let previous = year.innerHTML;
    if (year.children.length == 0) {
      deleteAllElements(year);
      const select = $("select", {
        style: {
          "max-width": 150 + "px",
        },
      });
      year.append(select);

      console.log(e);
      for (let i = previous - 3; i < parseInt(previous) + 3; i++) {
        select.append($("option", { value: i }, i));
        if (i == previous) {
          Array.from(select.children)[3].style.backgroundColor = "cyan";
          Array.from(select.children)[3].selected = true;
        }
      }

      select.addEventListener("change", (e) => {
        if (e.target.value > previous) {
          let D = date;
          D.setFullYear(
            D.getFullYear() + (parseInt(e.target.value) - parseInt(previous))
          );

          complete(date, dates, dateTo);
        }
        if (e.target.value < previous) {
          let D = date;
          D.setFullYear(
            Math.abs(
              D.getFullYear() - (parseInt(e.target.value) + parseInt(previous))
            )
          );
          complete(date, dates, dateTo);
        }

        deleteAllElements(year);
        year.innerHTML = e.target.value;
        currentYear = e.target.value;
        date = new Date(getFirstDayOfMonth(date));
      });
    }
  });
});

const deleteAllElements = (div) => {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};
const makeCalendar = (date) => {
  firstDay = getFirstDayOfMonth(date).toString();
  firstDayOfWeek = firstDay.split(" ")[0];

  dayOfWeek = firstDayOfWeekNumber(firstDayOfWeek);

  lastDay = getLastDayOfMonth(date).toString();
  lastDayNumber = lastDay.split(" ")[2];

  for (let index = 1; index <= lastDayNumber; index++) {
    dates.append($("div", {}, index));
  }
  dates.firstChild.style.gridColumn = dayOfWeek;
};

const firstDayOfWeekNumber = (firstDayOfWeek) => {
  let dayOfWeek;
  switch (firstDayOfWeek) {
    case "Mon":
      dayOfWeek = 1;
      break;
    case "Tue":
      dayOfWeek = 2;
      break;
    case "Wed":
      dayOfWeek = 3;
      break;
    case "Thu":
      dayOfWeek = 4;
      break;
    case "Fri":
      dayOfWeek = 5;
      break;
    case "Sat":
      dayOfWeek = 6;
      break;
    case "Sun":
      dayOfWeek = 7;
      break;
  }
  return dayOfWeek;
};

const changeDate = (dates, input) => {
  Array.from(dates.children).forEach((element) => {
    let k = 0;
    element.addEventListener("click", (event) => {
      k++;
      console.log([element]);
      day.innerHTML = element.innerHTML;
      if (k != 0) {
        Array.from(dates.children).forEach((element) => {
          element.style.backgroundColor = "white";
        });
        element.style.backgroundColor = "cyan";
      }

      let dateValue =
        year.innerHTML + "-" + month.innerHTML + "-" + day.innerHTML;
      console.log(new Date(dateValue));
      input.value = dateValue;
    });
  });
};

const addDays = (d, n) => {
  const date = dateClone(d);
  date.setDate(date.getDate() + n);
  return date;
};
const complete = (date, dates, input) => {
  deleteAllElements(dates);
  makeCalendar(date);
  changeDate(dates, input);
};
const onlyDate = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

const getFirstDayOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);

const getLastDayOfMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

const getFirstDayOfWeek = (d) => addDays(d, -getWeekDay(d));

const oneDay = 24 * 60 * 60 * 1000;
const oneMonth = oneDay * 30;
const oneYear = oneMonth * 12;
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
