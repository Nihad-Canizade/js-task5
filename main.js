// Condition 1

function myFunc(number) {
    if (number % 2 == 0) {
        return number / 2;
    } else if (number % 2 != 0) {
        return (number * 3) + 1;
    }
}

console.log(myFunc(3));


// Condition 2 

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cvb = Max(num) - Min(num);
console.log(cvb);

function Max(arr) {
    return Math.max.apply(null, arr);
}

function Min(arr) {
    return Math.min.apply(null, arr);
}


// Condition 3

function Example(array, number2) {
    var nmb2 = Array.isArray(number2);
    console.log(nmb2);
}

Example("Nihad", 19);
