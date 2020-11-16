
function isLoginValid (login, min = 4, max = 16) {

  
  if ( login.length >=4 && login.length <=16) {
          return true;
} 
          return false;
}

function isLoginUnique  (allLogins, login) {
    const length = allLogins.length
  for (let pizza=0; pizza < length ; pizza +=1) {
        if (login === allLogins[pizza]) {
             return false;
        }
            
  }
             return true;
  
}

function addLogin (allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
        const array = [];
  

  if (isLoginValid(login) !== true) {
    message = ERROR;
    return message;
  } else if (isLoginUnique(allLogins, login) !== true) {
    message = REFUSAL;
    return message;
  } else {
    allLogins.push(login);
    message = SUCCESS;
    return message;
  }
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