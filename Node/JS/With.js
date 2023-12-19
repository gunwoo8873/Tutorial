const MainArray = [
    Name = `Choigunwoo`,
    Skill = `JavaScript`,
    Age = 26,
    Drink = `Coffee`,
    Live = `Ansan`,
]

// Array Index Change
const CreateArray = MainArray.with(0, `ADMIN`)
console.log(CreateArray); // ['ADMIN', 'JavaScript', 26, 'Coffee', 'Ansan']
/*
MainArray[4] = `ADMIN`
console.log(MainArray);
*/