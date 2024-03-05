const fact = (n: number): number => (n >= 1 ? fact(n - 1) * n : 1);

console.log(fact(5));
