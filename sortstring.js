function getSort (string)
{
    return str = string.toLowerCase().split('').sort().join('');
    // if string contains upper case alphabets with lower case alphabets then it put upper case alphabet at starting position.To solve this problem we use string.toUpperCase() or string.toLowerCase()
}
 console.log(getSort('sumit'));