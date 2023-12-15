const Name = `Choigunwoo`
const Skill = `JavaScript`
const Age = 26

const MainArray = [Name, Skill, Age]

/*
Array.at(index => -1(Default))
Default = Array Index Behind Array
*/
console.log(MainArray.at(-1)); // Age = 26

console.log(``);

// ES14 Fix Array
const ES14Array = [10, 20, 15, 60, 45]
const Sub1_Intput = ES14Array.findLast((element) => element < 40)
const Sub2_Intput = ES14Array.findLast((element) => element > 50)
const Sub3_Intput = (element) => element < 40

console.log(Sub1_Intput); // 45
console.log(Sub2_Intput); // 60
console.log(ES14Array.findLastIndex(Sub3_Intput)); // 2