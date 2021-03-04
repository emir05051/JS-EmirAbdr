// const join = (glue, ...params) => {
//     let string = "";
//     console.log(params.length);
//     params = params.flat(Infinity);
//     for(let i = 0; i < params.length; i++){
//         if(i >= 0 && i < params.length-1){
//             string += params[i] + glue;
//         } else{
//             string += params[i];
//         }
//     }
//     return string;
// }

// console.log("Передаю массив: " + join("-", [1, 2], [3, 4], [5, 6]));
// console.log("Передаю список аругментов: " + join("-", 1, 2, 3, 4, 5, 6));