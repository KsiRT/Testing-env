const names = ['sobaka', 'Hannah', 'pirat', 'patsyuk', 'otto', 'vasya'];

const codingLanguages = ['C++', 'C#', 'Java', 'JS', 'Swift'];

const appleTypes = [
  'Golden',
  'Gala',
  'Black Prince',
  'Caramelka',
  'Spartan',
  'Fuji',
  'Honey Crisp',
];

const logins = ['Ksirt', 'Mr.Chips', '4bore'];

const numbers = [3, 4, 25, 33, 45, 61, 1, 35, 22, 12, 9];

const arrays = [names, codingLanguages, appleTypes, logins];

const test = names.splice(0, 1);
// console.log(test);

const subNames = names.slice();

function isPalindrome(arr) {
  let count = 0;
  const palindromesArr = [];
  if (!arr.length) {
    return palindromesArr;
  }
  for (const element of arr) {
    const reversedElement = element.split('').reverse().join('');
    console.log(`${element} === ${reversedElement}?`);
    if (element.toLowerCase() === reversedElement.toLowerCase()) {
      console.log(`${element} is a palindrome!`);
      count += 1;
      palindromesArr.push(element);
    }
  }
  return palindromesArr;
}

console.log(isPalindrome(names));
console.log(isPalindrome(names.slice(0, 3)));
console.log(isPalindrome(names.slice(-2)));
console.log(isPalindrome([]));
// ! @param -{*} arr - массив
