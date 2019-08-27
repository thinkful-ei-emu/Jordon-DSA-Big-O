/*

1. What is the Big O for this?
1) O(1)
2) O(1)

2. Even or odd
O(n)

3. Are you here?
O(N^2) nested array

4. Doubler
O(n) linear single loop

5. Naive search
O(n) for loop has to evaluate each item in the array - linear

6. Creating pairs:
O(n^2) nested loop

7. Compute the sequence
I believe the algorithm is pushing a sequence to an array. Fibonacci?
"else {
            result.push(result[i - 2] + result[i - 3]);
        }"
O(n) linear, each element, one operation

8. An efficient search
Logrithmic O(log(n))  Data is sorted, options are eliminated each operation

9. Random element
O(1) One element, one operation

10. What Am I?
The algorithm cheaks if n is a prime number.
O(n)

11. Tower of Hanoi

console.time('TOH');
const TOH = (n, src, dest, temp) => {
    if (n === 1) {
        return `${src} -> ${dest}`;
    }
    return TOH(n - 1, src, temp, dest) + ', '
        + `${src} -> ${dest}` + ', '
        + TOH(n - 1, temp, dest, src);
}
console.timeEnd('TOH');

console.log(TOH(5, 'A', 'C', 'B'));

If you are given 5 disks, how do the rods look like after 7 recursive calls?
ROD A : 2 disks
ROD B : No disks
ROD C : 3 disks with smallest on top
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
3 - 7 moves
4 - 15 moves
5 - 31 moves
What is the runtime of your algorithm?
O(n^2)

*/

//12. Iterative Versions
/*
const CountingSheep = (num) => {
    for (let i = num; i >= 0; i--) {
        if (i === 0) {
            console.log(`All sheep jumped over the fence.`)
        } else {
            console.log(`${i} sheep jumped over the fence`);
        }
    }
}

console.log(CountingSheep(3));

const PowerCalculator = (base, exp) => {
    let result = base;
    if (exp === 0) {
        console.log(1);
    }
    if (exp < 0) {
        console.log('Exponent should be >= 0');
    }
    if (exp > 1) {
        for (let i = exp; i > 1; i--) {
            result = result * base;
        }
    }
    console.log(result);
}

console.log(PowerCalculator(10, 32));

const ReverseString = (str) => {
    // return str.split("").reverse().join("");

    if (!str.length) {
        return '';
    }
    let newArray = [];
    str.split('').map(letter => {
        newArray.unshift(letter);
    });
    return newArray.join('');

}

console.log(ReverseString("hello"));


const TriangularNumber = (num) => {
    if (num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = num; i > 1; i--) {
        result += i;
    }
    console.log(result);
}

console.log(TriangularNumber(5));

const StringSplitter = (str) => {
    return str.split('').filter(char => char !== '/').join('');
}

console.log(StringSplitter('02/20/2020'));

function Fibonacci(num) {
    var a = 0, b = 1, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

console.log(Fibonacci(7));

const Factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log(Factorial(5));

*/

//13. Recursive Big O

/*

1. Counting sheep
O(n)

2. Power Calculator
O(n)

3. Reverse String
O(n)

4. Triangular Number
O(n)

5. String Splitter
O(n)

6.Factorial
O(n!) COMBINATORIAL COMPLEXITY

7.Fibonacci
O(n)

8. Maze
logarithmic complexity O(LOG N)

9.All maze

10.Anagrams
O(N^2), the method takes N*N

11.Organization Chart



*/