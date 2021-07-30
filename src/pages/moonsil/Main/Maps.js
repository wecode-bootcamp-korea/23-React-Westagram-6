// JS Array map() method

// square root 제곱근
var numbers = [4, 9, 16, 25, 36];
var result = numbers.map(Math.sqrt);
console.log(result);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newNumbers = numbers.map(function (number) {
  return number * 2;
});

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function multiplyTwo(number) {
  return number * 2;
}

var newNumbers = numbers.map(multiplyTwo);
console.log(newNumbers);

//찐 실습
var students = [
  { id: 2, name: 'goeun' },
  { id: 3, name: 'kimmy' },
  { id: 1, name: 'moony' },
  { id: 4, name: 'senny' },
  { id: 5, name: 'monny' },
];

//자주이용하는 것 !!
//아래와 같은 리스트가 있는데 , 만약 이러한 array에서 name만 뽑고싶다면?
//그때 map을 사용하면 된다!

var namelists = students.map(student => student.name);
//변수는 s 복수지만 map 안에는 꼭 맞춰서 똑같이 할 필요 없다
console.log(namelists);

var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var newNumbrs = numbers.map(array => array.map(number => number * 2));
console.log(newNumbers);

// 결과값
//[[2,4,6],[8,10,12],[14,16,18]]
