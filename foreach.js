const arr = [5,58,6];
//  let sum=0;

// for(i=0;i<arr.length;i++)
// {
//     sum=sum+arr[i];
// }

// arr.forEach(element => 
//     {
//         sum=sum+element;
//     });
// console.log(sum);

const sumArr = (arr)=> arr.reduce((acc,element)=>acc+element);
    
console.log(sumArr(arr));