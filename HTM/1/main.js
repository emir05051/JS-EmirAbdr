// console.log(window)
// console.log([document])
// console.log([document.body])

//
console.log("befre");

window.addEventListener("load", (event) => {
    console.log(event);
    console.log([document.body]);
})

window.addEventListener("DOMContentLoaded", (event) => {
    console.log(event);
    console.log([document.body]);
    console.log([document.body.children[0].children[0].children[0].innerText]);
    [document.body.children[0].children[0].children[0].innerText] = 'New'
    document.body.children[0].children[0].innerText = '1'

    console.log([document.getElementById("myid")]);

    console.log(document.getElementsByTagName("div"));

    console.log(Array.from(document.getElementsByTagName("div")).map(n => n.innerHTML));

    console.log(document.querySelectorAll(".b span"));

    const div = document.getElementById("myid");
    console.log(div.querySelectorAll(".b span"))
})


console.log("after");