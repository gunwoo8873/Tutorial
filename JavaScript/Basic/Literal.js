// EX1
const EX1_Userinfo = {
    Name : `Choigunwoo`,
    Skill : `JavaScript`,
    Age : 26,
    UserInfo : function () {
        return console.log(this.Name + " " + this.Skill + " " + this.Age)
    }
}
console.log(`Literal EX1`);
console.log(EX1_Userinfo .Name)
console.log(EX1_Userinfo .Skill)
console.log(EX1_Userinfo .Age)
EX1_Userinfo.UserInfo()
console.log(`\n`);

// EX2
const EX2_Userinfo = function () {
    const Name = `Choigunwoo`
    const Skill = `JavaScript`
    const Age = 26

    return console.log(Name + " " + Skill + " " + Age);
}
console.log(`Literal EX2`);
EX2_Userinfo()
console.log(`\n`);

// EX3
const EX_3_Userinfo = function () {
    const UserInfo = [
        Name = `Choigunwoo`, 
        Skill = `JavaScript`, 
        Age = 26
    ]
    return console.log(UserInfo);
}
console.log(`Literal EX3`)
EX_3_Userinfo()