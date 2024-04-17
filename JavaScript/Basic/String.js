/**EX1 */
const User_EX1 = function Description() {
    const name = 'Choigunwoo'
    const skill = 'JavaScript'
    const age = 27

    // EX1
    console.log(name);
    console.log(skill);
    console.log(age);    
}
User_EX1()
// 각 정의된 값을 하나씩 출력이 가능하지만 코드가 많아질수록 유지보수의 어려움이 있을 수 있다

/**EX2 */
const User_EX2 = function Description(){
    const Name = `Choigunwoo`
    const Skill = `JavaScript`
    const Age = 27

    return console.log(`${Name} , ${Skill} , ${Age}`);
}
User_EX2()
// `${value}` 표현식 삽입 방식을 이용하여 변수나 연산등을 문자열로 자동 변환된다.

/**EX3 */
const User_EX3 = function Description(){
    const User = [
        Name = `Choigunwoo`,
        Skill = `JavaScript`,
        Age = 27
    ]

    return console.log({
        Name : Name,
        Skill : Skill,
        Age : Age
    })
}
User_EX3()