function EX1_fn() {
    const Test_variable = [
        {name : `User1`, language : `JavaScript`, github : `Pitlane`},
        {name : `User2`, language : `React`, github : `Pitstop`}
    ]
    for(let i = 0; i < Test_variable.length; i++) {
        console.log(
            Test_variable[i].name, 
            Test_variable[i].language, 
            Test_variable[i].github
        )
    }
}
EX1_fn()

function EX2_fn() {
    const Test_variable2 = ["Shell", "Python", "Java", "Kotlin"]
    for(let i = 0; i < Test_variable2.length; i++) {
        console.log(Test_variable2[i])
    }
}
EX2_fn()

// Object
function EX3_fn() {
    const Test_object = new Object()
        Test_object.name = `User3`
        Test_object.language = `Rust`
        Test_object.github = `Null`
    
    console.log(
        Test_object.name, 
        Test_object.language, 
        Test_object.github
    );
}
EX3_fn()

function EX4_fn() {
    const Test_object2 = {
        Name : `Choigunwoo`,
        Skill : `JavaScript`,
        Age : 26,
    }
    EX4_1_fn : function() {
        return console.log(`${Test_object2}`)
    }
}
EX4_fn.EX4_1_fn()