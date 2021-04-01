/**
 * 
 * @param {*} tag 
 * @param {*} attributes 
 * @param  {...any} children 
 * @returns {HTMLElement}
 */
const e = (tag, attributes = {}, ...children) => {
    const element = document.createElement(tag);

    Object.entries(attributes)
        .forEach(([key, value]) => {
            if (key === "style") {
                Object.entries(value).forEach(([cssKey, cssValue]) => {
                    element.style[cssKey] = cssValue;
                });
            } else {
                element[key] = value;
            }

        });

    element.append(...children);

    return element;
}

window.addEventListener("DOMContentLoaded", (event) => {
    console.log([document.body]);

    const i = e("i", {
        className: "fas fa-play",
        onclick: () => {
            if (i.classList.contains("fa-play")) {
                i.classList.remove("fa-play");
                i.classList.add("fa-pause");
            } else {
                i.classList.remove("fa-pause");
                i.classList.add("fa-play");
            }
        }
    });
    const intervalId = setInterval(() => {
        div_2.classList.add("red");
    }, 100);



    const div = e("div", {
        className: "div",
    }, i);

    const div_2 = e("div", {
        className: "div_2",
    }, );

    document.body.append(div);
    document.body.append(div_2);

    div.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(event);

        div.classList.toggle("on")
        let on = event.currentTarget;
        if (on.classList.contains("on")) {

        } else {
            div_2.classList.remove("red");
            clearInterval(intervalId);
        }
    });


});