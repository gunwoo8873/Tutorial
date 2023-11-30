const Main = {
    Key : 'Value',
    Name : 'Choigunwoo',
    Skill : 'JavaScript'
}

// Log EX1
console.log(Main);

// Log EX2
console.log(Main.Name);
console.log(Main.Skill);


const Sub = {
    Age : 26,
    Method : function () {
        this.Age++
    }
}

// Log EX1
console.log(Sub);

// Log EX2
console.log(Sub.Age);
console.log(Sub.Method);