let r;
let c;
let string="";

for(r=1;r<=5;r++)
{
    for(c=1;c<=5-r+1;c++)
    {
        string=string+c;
    }
    string=string+"\n";
}

console.log(string);