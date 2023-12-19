// 1. Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir. 
// Əgər number cütdürsə, həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz. 
// Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)

var numarray = [];
function myFun(number) {
    for (let i = number; i != 1;) {

        if (i % 2 == 0) {
            i = i / 2;
        } else if (i % 2 != 0) {
            i = (3 * i) + 1;
        }
        numarray.push(i);
    }
    return numarray;
}

console.log(myFun(3))



// 2. Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var cvb = Max(num) - Min(num);
console.log(cvb);

function Max(arr) {
    return Math.max.apply(null, arr);
}

function Min(arr) {
    return Math.min.apply(null, arr);
}



// 3. Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək. Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.


let array = [1, 2, 3, 4, 5];
let number = 3;

function myFun(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false
}
console.log(myFun(array, number));



