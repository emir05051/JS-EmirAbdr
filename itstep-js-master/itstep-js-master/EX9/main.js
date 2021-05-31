let a, b;

// #1
a = 0;
b = a++ + a++;
// 1  = 0   + 1 

console.log(a, b);
// 2, 1
// 0, 2

// #2
a = 0;
a += a++ + ++a; 

console.log(a);





