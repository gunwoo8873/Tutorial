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
Main_Userinfo.UserInfo()

let test_string = "Hi"
alert( test_string.toUpperCase())