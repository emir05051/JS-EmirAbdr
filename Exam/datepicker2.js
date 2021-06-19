window.addEventListener("load", () => {
  const arrowLeft = document.getElementsByClassName("arrow-left")[1];
  const arrowRight = document.getElementsByClassName("arrow-right")[1];
  const dateTo = document.getElementById("date_out");
  let date = new Date();
  let currentDate = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  const div = document.getElementsByClassName("errors")[1];
  const config = {
    dateOfBirth2: chain(dateState, required),
  };
  console.log(div);
  DatePickerLogic(
    arrowLeft,
    arrowRight,
    dateTo,
    date,
    currentMonth,
    currentYear,
    currentDate,
    div,
    days,
    dates,
    day,
    month,
    year,
    config
  );
});
