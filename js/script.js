// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// const minNumber = +prompt("Enter min number from the range");
// const maxNumber = +prompt("Enter max number from the range");
// let sum = 0;
// for (let i = minNumber; i <= maxNumber; i++) {
//   sum += i;
// }
// console.log("Sum equals to " + sum);

// 2.Запросить 2 числа и найти только наибольший общий делитель.
// const number1 = +prompt("Enter a number");
// const number2 = +prompt("Enter another number");
// const min = number1 < number2 ? number1 : number2;
// let max;
// let i = 2;
// while (i <= min) {
//   if (!(number1 % i) && !(number2 % i)) {
//     max = i;
//   }
//   i++;
// }
// console.log(max);

// 3. Запросить у пользователя число и вывести все делители этого числа.
// const number = +prompt("Enter a number");
// let i = 2;
// while (i < number) {
//   if (!(number % i)) {
//     console.log("The divider of the number is " + i);
//   }
//   i++;
// }

// 4.Определить количество цифр в введенном числе.
// let number = +prompt("Enter a number");
// let i = 0;
// while (number >= 1) {
//   number /= 10;
//   i++;
// }
// console.log(i);

// 5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let i = 0;
// let numberOfPositive = 0;
// let numberOfNegative = 0;
// let numberOfZero = 0;
// let numberOfEven = 0;
// let numberOfOdd = 0;
// while (i < 10) {
//   let number = +prompt("Enter a number");
//   if (number > 0) {
//     numberOfPositive++;
//   } else if (number < 0) {
//     numberOfNegative++;
//   } else {
//     numberOfZero++;
//   }

//   if (number % 2 === 0) {
//     numberOfEven++;
//   } else {
//     numberOfOdd++;
//   }
//   i++;
// }
// console.log(`You entered ${numberOfPositive} positive numbers.`);
// console.log(`You entered ${numberOfNegative} negative numbers.`);
// console.log(`You entered ${numberOfZero} zeros.`);
// console.log(`You entered ${numberOfEven} even numbers.`);
// console.log(`You entered ${numberOfOdd} odd numbers.`);

// 6.Зациклить калькулятор.
// Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.
// let desireToUseCalc;
// do {
//   const number1 = +prompt("Enter a number");
//   const number2 = +prompt("Enter another number");
//   const symbol = prompt("Enter a math symbol from the following: +, -, *, /");
//   console.log(eval(number1 + symbol + number2));
//   desireToUseCalc = confirm("Do you want to do more sums?");
// } while (desireToUseCalc);

// 7.Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
// let number = prompt("Enter a number");
// let move = +prompt("Enter a move");
// let i = 0;
// while (i < move) {
//   number = number.slice(1) + number[0];
//   i++;
// }
// console.log(number);

// 8.Зациклить вывод дней недели таким образом:
// «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
// let keep;
// let weekDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// let i = 0;
// do {
//   keep = confirm(`${weekDays[i]}. Do you want to see what the next day is?`);
//   i++;
//   if (i === weekDays.length) {
//     i = 0;
//   }
// } while (keep);

// 9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// let i = 2;
// let a;
// while (i <= 9) {
//   a = 1;
//   while (a <= 10) {
//     console.log(`${i}*${a}=${i * a}.`);
//     a++;
//   }
//   console.log(" ");
//   i++;
// }

// 10.Игра «Угадай число».
// Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?».
// В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
// let number = +prompt(
//   "Let's play a game. Think of a number from 0 to 100 and enter it."
// );
// let confirmation,
//   min = -1,
//   max = 101,
//   n;
// if (number >= 0 && number <= 100) {
//   while (n !== number) {
//     n = Math.floor((min + max) / 2);
//     confirmation = prompt(
//       `Is your number greater, smaller or equal to ${n}? Please reply with a symbol(>,< or =).`
//     );
//     if (confirmation === ">") {
//       min = n;
//     }

//     if (confirmation === "<") {
//       max = n;
//     }
//   }
//   console.log("Your number is " + n);
// } else {
//   alert(
//     "Hey! You broke the rules! The entering does not belong to the suggested range. Shame on you:)"
//   );
// }
