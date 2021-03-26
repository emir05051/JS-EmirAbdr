window.addEventListener("DOMContentLoaded", (event) => {
    console.log([document.body]);

    // document.body.innerHTML = "<a href = 'sdf'>asdads</a>";

    const a = document.createElement("a");
    a.innerText = "Link";
    a.href = "http://google.com";

    a.id = "mylink";
    a.className = "link link_red";

    console.log(a.classList);

    a.classList.remove("link_red");
    a.classList.add("link_red");

    a.classList.toggle("link_green");
    a.classList.toggle("link_red");
    console.log(a.classList.contains("link_red"));

    document.body.append(a);

    // document.body.appendChild(a);
    const span = document.createElement("span");
    span.innerText = "SPAN";
    a.append(span);


    const span2 = document.createElement("span");
    span2.innerText = "SPAN2"


    document.body.insertBefore(span2, null);

    // document.body.removeChild(span2);

    const img = document.createElement("img");
    img.src = "https://cs11.pikabu.ru/post_img/big/2018/09/08/1/1536364109122262623.jpg";
    img.width = "540";
    img.height = "700";


    document.body.append(img);
})