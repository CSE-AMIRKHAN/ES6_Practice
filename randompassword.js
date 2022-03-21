function getId (length)
{
    let text = "";
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i=0;i<length;i++)
    {
        text=text+list.charAt(Math.floor(Math.random()*list.length));
    }
    return text;
}

console.log(getId(8));