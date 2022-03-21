
function getReverse (num)
{
    let str = parseInt(num.toString().split("").reverse().join(""));
    return str;
}
console.log(getReverse(159));