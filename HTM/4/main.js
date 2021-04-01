// TODO:
// - Таймер...
// - IndexedDb для храниния результатов
// - Звук

// load - как только построится DOM + загрузятся все src ресурсы (картинки, скрипты)
// DOMContentLoaded - как только построится DOM


const N = 4;
const width = 150;
const height = 200;

const values = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    8, 7, 6, 5,
    4, 3, 2, 1
];


window.addEventListener("load", () => {
    // 1 - создать грид элемент
    // 2 - создать n*n карточек-div

    const grid = $("div", {
            className: "grid",
            style: {
                gridTemplateRows: "repeat(" + N + ", " + height + "px)", // repeat(4, 200px)
                gridTemplateColumns: "repeat(" + N + ", " + width + "px)",
            }
        },
        ...createArray(createCard)(N * N)
    );

    document.body.append(grid);

});

const createCard = (index) =>
    $("div", {
            className: "card card_closed",
            onclick: handleClick, // addEventListener("click", () => ...)
        },
        $("div", { className: "card__face card__front" }, String(values[index])),
        $("div", { className: "card__face card__back" }),
    );

let openCards = [];

const openCard = (cardDiv) => {
    cardDiv.classList.add("card_open");
    cardDiv.classList.remove("card_closed");
    openCards.push(cardDiv);
}

const closeCard = (cardDiv) => {
    cardDiv.classList.add("card_closed");
    cardDiv.classList.remove("card_open");
    openCards.splice(openCards.indexOf(cardDiv), 1);
}

const handleClick = (event) => {
    // открыто ноль карточек - открываем
    // открыта одна - если щелкаем на уже открытую, то ничего, иначе открываем вторую
    // открыто две - закрываем обе открытые, открываем ту на которую щелкнули

    const cardDiv = event.currentTarget;
    const isOpen = openCards.includes(cardDiv); // cardDiv.classList.contains("card_open"); 

    if (openCards.length === 2) {
        openCards.slice().forEach(closeCard);
    }

    if (!isOpen) {
        openCard(cardDiv)
    }
}