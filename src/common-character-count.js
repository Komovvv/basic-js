const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  /*
  1. Превратить строки в массивы
  2. Сравнить эллементы массивов (includes)
  3. Отправить значение в новый массив
  если кол-во элемнтов a в arr1 !== кол-ву элемнтов a в arr2, добавить еще один a, 
  если кол-во элемнтов a в arr1 == кол-ву элемнтов a в arr2 - перейти к след. элементу и повторить процесс
  4. Посчитать кол-во эллементов 3 массива и вернуть это число
  */
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let arrCount = 0;

  s1 = Array.from(s1);
  s2 = Array.from(s2);
    
  s1.forEach(e => {
    if (s2.includes(e)) {
      arrCount++;
      s2.splice(s2.indexOf(e), 1);
    }
  });
        
  return arrCount;

}

module.exports = {
  getCommonCharacterCount
};
