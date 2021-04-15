// const debounce = func => delay => {
//     let timerId = null;


//     // return (...args) => {
//     //     if (timerId !== null) {
//     //         clearTimeout(timerId);
//     //         timerId = null;
//     //     }

//     //     timerId = setTimeout(() => {
//     //         func(...args)
//     //         timerId = null;
//     //     }, delay);
//     // }
//     return (...args) => {
//         if (timerId === null) {
//             func(...args);
//         }

//         clearTimeout(timerId);
//         timerId = setTimeout(() => {
//             func(...args)
//             timerId = null;
//         }, delay);
//     }
// }

const debounce = func => delay => {
    let timerId = null;

    return (...args) => {
        if (timerId === null) {
            func(...args);
        }

        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func(...args)
            timerId = null;
        }, delay);
    }
}

window.addEventListener("load", () => {
    const debounceHandler = debounce((event) => {
        document.body.style.backgroundColor = "hsl(" + randomInt(0, 359) + ", 80%, 80%)";

        console.log(event, window.scrollX, window.scrollY);
    })(500);

    window.addEventListener("scroll", debounceHandler)
    window.addEventListener("resize", debounceHandler)
        // window.addEventListener("mousewheel", (event) => {
        //   console.log(event);
        // });`

});