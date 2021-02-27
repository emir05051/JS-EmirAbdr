let apples = 0;

const AppleQuantity = number => {
    if (number > 0) {
        console.log(number)
        console.log("Полная")
    }
    if (number === 0) {
        console.log(number)
        console.log("Пустая")
    }
    if (number < 0) {
        console.log(number)
        console.log("У вас кредит")
    }
}
AppleQuantity(apples);
apples += 50;
AppleQuantity(apples);
apples -= 150;
AppleQuantity(apples);
apples += 350;
AppleQuantity(apples);