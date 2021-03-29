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
                gridTemplateRows: "repeat(" + N + ", " + height + "px)", // repeat(4, 200px)
                gridTemplateColumns: "repeat(" + N + ", " + width + "px)",
            }
        },
        ...createArray(createCard)(N * N)
    );

    document.body.append(grid);

});

let openCards = [];

const openCard = (card) => {
    card.classList.add("card_open");
    card.classList.remove("card_closed");
    // openCards.push(card);
}

const closeCard = (card) => {
    card.classList.add("card_closed");
    card.classList.remove("card_open");
    // openCards.push(card);
}

const handleClick = (event) => {
    // открыто ноль карточек - открываем
    // открыта одна - если щелкаем на уже открытую, то ничего, иначе открываем вторую
    // открыто две - закрываем обе открытые, открываем ту на которую щелкнули

    const card = event.currentTarget;
    const isOpen = card.classList.contains("card_open");

    if (openCards.length === 0) {
        openCard(card)
        openCards.push(card);
    } else if (openCards.length === 1) {
        if (!isOpen) {
            openCard(card)
            openCards.push(card);
        }
    } else { // if (openCards === 2)
        openCards.forEach(closeCard);
        openCards = [];

        if (!isOpen) {
            openCard(card);
            openCards.push(card);
        }
    }
}

const createCard = (index) => {
    const c = $("div", {
            className: "card card_closed",
            onclick: handleClick,

            // onclick: handleClick, // addEventListener("click", () => ...)
        },
        $("div", { className: "card__face card__front" }, String(index)),
        $("div", { className: "card__face card__back" }),
    );

    c.addEventListener("click", handleClick);
    return c;
}


// 1 2 3 4
// 2 1 3 4
// 5 6 7 8
// 8 6 7 5