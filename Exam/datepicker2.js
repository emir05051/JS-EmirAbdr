window.addEventListener("load", () => {
  const arrowLeft_2 = document.getElementsByClassName("arrow-left")[1];
  const arrowRight_2 = document.getElementsByClassName("arrow-right")[1];
  const days_2 = document.getElementById("days_2");
  const dates_2 = document.getElementById("dates_2");
  const dateTo_2 = document.getElementById("date_out");
  let date_2 = new Date();
  let currentDate_2 = date_2.getDate();
  let currentMonth_2 = date_2.getMonth() + 1;
  let currentYear_2 = date_2.getFullYear();
  const div_2 = document.getElementsByClassName("errors")[1];
  const config_2 = {
    dateOfBirth2: chain(dateState, required),
  };
  days_of_the_week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Cб", "Вс"];

  day_2.innerHTML = currentDate_2;
  month_2.innerHTML = currentMonth_2;
  year_2.innerHTML = currentYear_2;

  for (let index = 0; index < days_of_the_week.length; index++) {
    days_2.append(
      $(
        "div",
        {
          id: index + 1,
        },
        days_of_the_week[index]
      )
    );
  }
  makeCalendar(date_2, dates_2);
  changeDate(dates_2, dateTo_2, year_2, month_2, day_2);

  DatePickerLogic(
    arrowLeft_2,
    arrowRight_2,
    dateTo_2,
    date_2,
    currentMonth_2,
    currentYear_2,
    currentDate_2,
    div_2,
    days_2,
    dates_2,
    day_2,
    month_2,
    year_2,
    config_2
  );
});
