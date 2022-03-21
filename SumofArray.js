function getPerimeter (arr1)
{
let sum = 0;
let i;
for(i=0;i<arr1.length;i++)
{
    sum=sum+arr1[i];
}
return sum;    //sum me sabko add krne ke bad getperimeter function ko return kardega
}
//console.log(getPerimeter([1,2,3,4]));
//console.log(arr1.length);


function totalCost (arr1,layers,rate)
{
    const totalCost = getPerimeter(arr1) * layers * rate;
    return totalCost;
}

console.log(totalCost([1,2,3,4],4,10));