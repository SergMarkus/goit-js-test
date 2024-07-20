// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// function checkNumber(a) {
//     if (a === 10) {
//         return "Вірно";
//     } else {
//         return "Невірно"
//     }
// }
// console.log(checkNumber(10));

// function checkNumber(a) {
//     return a === 10 ? "Вірно" : "Невірно"; //тернарний
// }

// console.log(checkNumber(10));



// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// function checkSeason(num) {
//     // let season = "";
//     switch (num) {
//         case 1:
//             return "зима";
//         case 2:
//             return "весна";
//         case 3:
//             return "літо";
//         case 4:
//             return "осінь";
//         default:
//             // season = "No season! Chose numbers 1-4";
//             return "No season! Chose numbers 1-4"
//     }
// }
// console.log(checkSeason(5));


// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

function formatTime(totalMinutes) {
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes}`;
}   
console.log(formatTime(70));

