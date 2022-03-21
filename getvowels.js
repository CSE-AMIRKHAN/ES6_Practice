function getVowels (string)
{
    let vowel_list="aeiouAEIOU";
    let count =0;
    for(char of string)
    {
        for(vowel of vowel_list)
        {
            if(char==vowel)
            {
                count++;
            }
        }
    }
    return count;
}

console.log(getVowels("Hamza"));