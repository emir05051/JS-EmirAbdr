// load - как только построится DOM + загрузятся все src ресурсы (картинки, скрипты)
// DOMContentLoaded - как только построится DOM


const N = 4;
const width = 150;
const height = 200;


window.addEventListener("load", () => {
    // 1 - создать грид элемент
    // 2 - создать n*n карточек-div

    const grid = $("div", {
            className: "grid",
            style: {
                gridTemplateRows: "repeat(" + N + ", " + height + "px)",
                gridTemplateColumns: "repeat(" + N + ", " + width + "px)",
            }
        },
        ...createArray(createCard)(N * N)
    );

    document.body.append(grid);

});

const createCard = (index) => {
    return $("div", { className: "card" },
        $("div", { className: "card__front" }, String(index)),
        $("div", { className: "card__back" }),
    );
}


// 1 2 3 4
// 2 1 3 4
// 5 6 7 8
// 8 6 7 5