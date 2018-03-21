// 1. "FooBar" multiples of 3 and 5
function fooBar(){

    for (let i = 1; i <= 100; i++){

        let printNum = "";
        // if i is a multiple of 3 then add "Foo" to printNum
        if(i % 3 === 0) {
            printNum += "Foo";
        }
        // if i is a multiple of 5 then add "Bar" to printNum
        if(i % 5 === 0) {
            printNum += "Bar"
        }
        // if i is not a multiple of 3 or 5 then printNum is equal to i
        if(printNum === "") {
            printNum = i;
        }
        console.log(printNum);
    }
}
fooBar();



// 2. Fibonacci sequence
function fibonacci(n){
    let arr = [0, 1];
    let nextNumber = 0;
    let len = arr.length;
    for (let i = 2; i < len, i < n; i++) {
        nextNumber = arr[i - 1] + arr[i - 2];
        arr.push(nextNumber);
    }
    console.log(arr);
}
fibonacci(100);



