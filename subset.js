function subSet (arr)
{
    let sub =[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            sub.push([arr[j],arr[i]]);
        }
    }
    return sub;
}

console.log(subSet([1,2,3]));