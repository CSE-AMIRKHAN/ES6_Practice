
let getTime = (time)=>
{

if(time>6 &&  time<12)
console.log("Good Morning");
else if(time>11 && time<16)
console.log("AfterNoon");
else if(time>15 && time<19)
console.log("Evening");
else if(time>18 && time<24)
console.log("Night");
else if(time>00 && time<6)
console.log("Good Night");
else
console.log("Error::Enter Correct Input");
}

console.log(getTime(19));