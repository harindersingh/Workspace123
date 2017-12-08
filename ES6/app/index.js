console.log("Hello World! (from webpack)");

let b = 2;
console.log(b);

{
    let b = "inside scope";
    console.log(b);
}

const arr = [1, 2, 3];

arr.push(4);

// arr = [1, 2];   error

