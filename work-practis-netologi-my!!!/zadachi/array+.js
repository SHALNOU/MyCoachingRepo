let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

// Создаем копию arr1, чтобы избежать изменения исходного массива
let mergedArray = [...arr1];
// Вставляем элементы из arr2 в mergedArray после второго элемента
mergedArray.splice(2, 0, ...arr2);

console.log(mergedArray);
