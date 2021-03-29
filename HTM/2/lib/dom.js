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

const createArray = (mapFunction = index => index) => length =>
    Array.from({ length }, (_, index) => mapFunction(index));