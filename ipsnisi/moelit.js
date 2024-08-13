const domain = [1, 2, 3, 4, 5];

const result = domain.map(v => {
    return { number: v, square: v * v };
});

console.log(result);
/*
Output:
[
  { number: 1, square: 1 },
  { number: 2, square: 4 },
  { number: 3, square: 9 },
  { number: 4, square: 16 },
  { number: 5, square: 25 }
]
*/
