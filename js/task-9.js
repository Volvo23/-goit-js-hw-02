






// Объекты
// ==============================================================================
const products = [
  {
    id: "1",
    name: "milk",
    value: "Молоко",
    price: 20,
    sale: true,
    quantity: 10,
  },
  {
    id: "2",
    name: "water",
    value: "Вода",
    price: 10,
    sale: false,
    quantity: 50,
  },
  {
    id: "3",
    name: "juice",
    value: "Сок",
    price: 34,
    sale: true,
    quantity: 24,
  },
  {
    id: "4",
    name: "fruitDrink",
    value: "Морс",
    price: 32,
    sale: true,
    quantity: 25,
  },
  {
    id: "5",
    name: "milkShake",
    value: "Молочный коктейль",
    price: 37,
    sale: false,
    quantity: 37,
  },
];
// 1. Создайте функцию getSaleProducts(), которая вернет новый массив со свойством sale равным true.
// function  getSaleProducts (array, prop) {
//     const arr = [];
//     for (const items of array) {
//         if (item[prop]) {
//             arr.push(item);
//         }
//     }
//     return arr;

// }
// console.log(getSaleProducts(products, ));

// 2. Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.
// function getProductsName(array) {
//     const arr = [];
//     for (const item of array) {
//         console.log(item);
//         arr.push(item.value)
//     }
//     return arr;
// }
// console.log(getProductsName(products));
// // 3. Создайте функцию getTotalQuantity(), которая вернет общую сумму всех товаров на складе (свойство quantity).
// function getTotalQuantity(array) {
//     const sum = 0;
//     for (const item of array) {
//         sum += item.quantity;
//         // console.log('item :>>', item);
//     }
//     return sum;
// }
// const result = getTotalQuantity(products);
// console.log(result);
// 4. Создайте функцию getProductById(), которая будет возвращать продукт по id.

// 5. Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.
// 6. Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products. Товар передается в функцию в виде объекта
// function createProduct(array, newObject) {
//     array.push(newObject);
     
// }
// const coffe =  {id: "6",
//     name: "coffe",
//     value: "Кофе",
//     price: 35,
//     sale: false,
//      quantity: 27,
//  }
// createProduct(products, coffe)
 


// const cake = {
//     id: "7",
//     name: "coffe",
//     value: "Кофе",
//     price: 35,
//     sale: false,
//      quantity: 27,
//  }
//  createProduct(products,cake)


// console.log(products);
// 7. Создайте функцию findProductByName(), которая будет возвращать объект из массива products в зависимости от передаваемого значения name или value.
// 7. Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.
// 8. Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами у которых будут только свойства id, name, value и price
// 9. Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.






function isLoginValid(login) {
  // Write code under this line
  const loginLength = login.length;
  if (loginLength >= 4 && loginLength <=16) {
    return true;
  }
  return false;
}

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
     if (allLogins.includes('login')) {
  return true;
  }
  return false;
}
function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
  
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

 console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

 console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

 console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

 console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 





























// TASK 1.
// -=Сделать первый символ заглавным=-
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";


// const ucFirst = function (str) {
//     return newName = str[0].toUpperCase()+ str.slice(1).toLowerCase();
   

// }
// console.log(ucFirst('maRusya'));



// console.log('===================================')



// TASK 2.
// -= Операции с массивами =-
// Давайте произведём 5 операций с массивом.
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4. Удалите первый элемент массива и покажите его.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// const remove = ['Рэп','Регги']
// const add = ['Рок-н-ролл'];

// const style = ['Джаз','Блюз'];
// //  style.push(add[0]);
// const array = style.concat(add);

// const index = Math.floor(array.length/2); 
// array.splice(index,1,"Классика")

// const removedElement = array.shift()

// // array.unshift(...remove);
// const newArray =remove.concat(array);

// console.log('newArray :>> ', newArray);

// //   console.log(array);

// ==================================================================================================================================
// Task 3.
// -=Сумма введённых чисел=-
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».




