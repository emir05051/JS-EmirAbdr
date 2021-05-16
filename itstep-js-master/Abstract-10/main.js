// Promise - обещание

const sleep = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    console.log("Подождали " + delay);
    resolve(delay);
  }, delay);

});


let flag = false;

const notice = async (delay) => {
  await sleep(delay);
  if (!flag) {
    console.log("Плохой интернет");
  }
}

const cancel = async (delay) => {
  await sleep(delay);
  return Promise.reject("Прошло больше " + delay);
}

const request = async () => {
  await sleep(1000);
  return Promise.resolve("DATA");
}



window.addEventListener("load", async () => {
  let start;
  
  console.log("Начали");

  start = Date.now();

  notice(5000);
  const result = await Promise.race([request(), cancel(2000)]);
  flag = true;

  console.log("Закончили " + (Date.now() - start), result);
});


// window.addEventListener("load", async () => {
//   let start;
  
//   console.log("Начали");

//   start = Date.now();

//   await sleep(500);
//   await sleep(1000);
  
//   console.log("Закончили " + (Date.now() - start));


//   console.log("Начали");

//   start = Date.now();
//   const allRsults = await Promise.all([
//     sleep(500),
//     sleep(1000)
//   ]); // все
//   // Promise.race //гонка
  
//   console.log("Закончили " + (Date.now() - start), allRsults);

  
//   console.log("Начали");

//   start = Date.now();
//   const raceRsult = await Promise.race([
//     sleep(500),
//     sleep(1000)
//   ]); 
  
//   console.log("Закончили " + (Date.now() - start), raceRsult);

// });







// const getA = async () => new Promise((resolve, reject) => {
//   reject("Не нашли двойку");
//   // resolve(2);
//   setTimeout(() => resolve(2), 200);
// });

// window.addEventListener("load", async () => {

//   try {
//     let value = await getA();

//     // разрыв веременного континуума 
//     // callback
  
//     let value2 = await getA();
    
//     // разрыв веременного континуума 
//     // callback
//     console.log(value, value2);
//   } catch (e) {
//     console.log(e);
//     let value3 = await getA(); 
//   } finally {
//     console.log("Ну и ладно");
//     // console.log(value);
//   }
//   // console.log("Ну и ладно");


//   // let a = getA()
//   //   .then((value) => {
//   //     console.log(value);
//   //     return getA();
//   //   })
//   //   .then(value => {
//   //     console.log(value);
//   //   })
//   //   .catch(reason => {
//   //     console.log(reason);
//   //     return 3;
//   //   })
//   //   .then(value => {
//   //     console.log("Но нашли тройку");
//   //   });
  
  
// });





// const add = x => y => callback => {
//   setTimeout(() => callback(x + y), 0);
// }


// {
//   let x = 10;
//   let y = 20;

//   add (x) (y) ((sum) => {
//     add (sum) (2) ((sum2) => {
//       console.log(sum, sum2);
//     });
//   });

// }


// const asyncAction = (callback) => {
//   // действия
//   console.log("actionStared");
  
//   setTimeout(() => {
//     console.log("action");
//     callback();
//   });
// }


// // callback hell
// {
//   let a = 1;

//   asyncAction(() => {
//     console.log("done");

//     asyncAction(() => {
//       console.log("done");
      
//       asyncAction(() => {
//         console.log("done");
//       });

//     });

//   });
  
  

//   console.log("started");
// }


// {
//   let a = 1;
//   console.log("1", a);

//   setTimeout(() => {
//     a += 1;
//     console.log("2", a) // 2

//     setTimeout(() => {
//       a += 1;
//       console.log("3", a) // 4
//     }, 100); 
  
//     console.log("2 end", a) // 2

//   }, 100);

//   setTimeout(() => {
//     a += 1;
//     console.log("4", a); // 3
//   }, 100); 

//   console.log("1 end", a); // 1

//   // Дождаться ответа от сервера

//   let i = 0;
//   while (i++ < 100) {
//     console.log("loop");
//   }
// }