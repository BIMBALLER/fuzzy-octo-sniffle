const calcTip=bill=>bill>=50 && bill<=300?bill*0.15:bill*0.2;
const bill=[125,555,44];
const tip=[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
const total=[bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];
console.log(bill,tip,total)

const mahmoud=[
    "Abdulmajeed",
    "Mahmoud",
    "Teacher",
    "2025-1950",
    ["BJ","Bimballer","Investor"]
]
const mahmoudobject={
    firstName:"Abdulmajeed",
    lastName:"Mahmoud",
    job:"Teacher",
    age:2025-1950,
    friends:["Bj","Bimballer","Investor"]
}
mahmoudobject.nationality='Nigerian';
mahmoudobject["twitter"]='@AladaGbangba';
console.log(mahmoudobject)
console.log(mahmoud);
console.log(mahmoudobject)

const getLastName=mahmoudobject.friends;
console.log(getLastName);
const nameKey="Name";
const check=mahmoudobject["last"+nameKey];
console.log(check)

const getAge=mahmoudobject["age"];
console.log(getAge);

const interestedIn=prompt("what do you want to know about mahmoud?")

if(mahmoudobject[interestedIn]){
    console.log(mahmoudobject[interestedIn])
} else{
    console.log("wrong input,why not try firstName, lastName, job, age, friends")
}
console.log(`${mahmoudobject.lastName} has ${mahmoudobject.friends.length} friends and his best friend is ${mahmoudobject.friends[2]}`);