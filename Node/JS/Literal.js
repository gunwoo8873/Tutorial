// EX1
const MainFunction = {
    Name : `Choigunwoo`,
    Skill : `JavaScript`,
    Age : 26,
    UserInfo : function () {
        console.log(this.Name + " " + this.Skill + " " + this.Age)
    }
}
console.log(`EX1`);
console.log(MainFunction.Name)
console.log(MainFunction.Skill)
console.log(MainFunction.Age)
MainFunction.UserInfo()

console.log(`--------------------`);

// EX2
const Sub_1_Function = function () {
    const Name = `Choigunwoo`
    const Skill = `JavaScript`
    const Age = 26

    console.log(Name + " " + Skill + " " + Age);
}
console.log(`EX2`);
Sub_1_Function()

console.log(`--------------------`);

// EX3
const Sub_2_Function = function () {

    const UserInfo = [
        Name = `Choigunwoo`, 
        Skill = `JavaScript`, 
        Age = 26
    ]
    console.log(UserInfo);
}

console.log(`EX3`)
Sub_2_Function()