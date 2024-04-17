// EX1
const Main_Userinfo = {
    Name : `Choigunwoo`,
    Skill : `JavaScript`,
    Age : 26,
    UserInfo : function () {
        return console.log(this.Name + " " + this.Skill + " " + this.Age)
    }
}
console.log(`Literal EX1`);
console.log(Main_Userinfo.Name)
console.log(Main_Userinfo.Skill)
console.log(Main_Userinfo.Age)
Main_Userinfo.UserInfo()
console.log(`\n`);

// EX2
const Sub_1_Function = function () {
    const Name = `Choigunwoo`
    const Skill = `JavaScript`
    const Age = 26

    return console.log(Name + " " + Skill + " " + Age);
}
console.log(`Literal EX2`);
Sub_1_Function()
console.log(`\n`);

// EX3
const Sub_2_Function = function () {

    const UserInfo = [
        Name = `Choigunwoo`, 
        Skill = `JavaScript`, 
        Age = 26
    ]
    return console.log(UserInfo);
}

console.log(`Literal EX3`)
Sub_2_Function()