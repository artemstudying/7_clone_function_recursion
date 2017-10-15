function clone(brr){
    let arrClone = [];
    for( let i = 0; i < brr.length; i++){
        if(Array.isArray(brr[i])){
            arrClone[i] = clone(brr[i]);
        }else {
            arrClone[i] = brr[i];
        }
    }
    return(arrClone);
};

//реализовать функцию clone которая бы работала следующим образом:



let arr = [1,2,3,4,5,6];

let brr = clone(arr);

console.log(brr); // [1,2,3,4,5,6]

brr[0] = 42;

console.log(brr); // [42,2,3,4,5,6]

console.log(arr); // [1,2,3,4,5,6]



//* сдалать для любого уровня вложенности, например:


let ar = [[11,22],2,3,4,5,6];

let brr = clone(ar);

console.log(brr); // [[11,22],2,3,4,5,6]

brr[0][0] = 42;

console.log(brr); // [[42, 22],2,3,4,5,6]

console.log(ar); // [[11, 22],2,3,4,5,6]