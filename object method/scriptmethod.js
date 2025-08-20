const mahmoudobject={
    firstName:"Abdulmajeed",
    lastName:"Mahmoud",
    job:"Teacher",
    age:1950,
    friends:["Bj","Bimballer","Investor"],
    calcAge:function(){
    this.age=2025-this.age;
    return this.age;
},
getSummary:function(){
    return `${mahmoudobject.lastName} is ${mahmoudobject.calcAge()} years old ${mahmoudobject.job}`
}
}
console.log(mahmoudobject.getSummary())

console.log(mahmoudobject.calcAge())
