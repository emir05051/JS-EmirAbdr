const sleep = async(time) => new Promise((resolve) => {
  console.log("Ждем " +time );
  setTimeout(() => {
    resolve(time);
  }, time);
  console.log("Дождались" );

});

sleep(500)