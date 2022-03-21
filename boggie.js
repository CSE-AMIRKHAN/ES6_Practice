const boggie = ["Aadil","Imran","Hamze","Altaf","Zeemat","Firoz","Zubair"];
console.log(boggie);

const addPassenger = (person) => boggie.push(person);


const remPassenger = (remove) => boggie.pop(remove);


console.log(addPassenger("Arbaz"));

console.log(remPassenger());   //we can also use index // by giving no parameters it automatically remove last one it is by default property.

console.log(boggie);