// EX1
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