const MainArray = [
    Name = `Choigunwoo`,
    Skill = `JavaScript`,
    Age = 27,
    Drink = `Coffee`,
    Live = `Korea_Ansan`,
]

/**The at() and [] returns the Array Indexed Element */
function at_Array(){
    const at = MainArray.at(0)
    const non_at = MainArray[2]

    return console.log(at , non_at);
}
at_Array()

/**pop deletes the last index value of an array element*/
function pop_Array(){
    // 주의 : pop()안에 요소값을 지정하여 제외할 수 없다.
    MainArray.pop()
    return console.log(MainArray)
}
pop_Array()

/**push changes the last index value of an array element. */
function push_Array(){
    MainArray.push(`ADMIN`)
    return console.log(MainArray)
}
push_Array()


// Array[index] 안에 존재하는 데이터를 마지막 값인 Live를 기준으로 디폴트값이 지정된다.
console.log(MainArray.at(-1)); // Live = Ansan

// Reverse
const ReverseArray = MainArray.reverse()
console.log(ReverseArray); // [ 'Ansan', 'Coffee', '27', 'JavaScript', 'Choigunwoo' ]

// findIndex / findLastIndex는 Array의 Index값을 마지막을 기준으로 읽는다.
const LastIndex = MainArray.findIndex(Element => Element === `Choigunwoo`)   
console.log(LastIndex); // 4

// Array [index] Boolean
// 요청값과 Array의 Index 안에 존재하는 값이 맞다면 그에 대한 값을 출력한다.
const FindLastIndex = MainArray.findIndex(Element => Element === 27)
console.log(FindLastIndex); // 2

// 요청값과 Array의 Index 안에 존재하지 않는 값이라면 false = -1 라는 값을 출력한다.
const FindLastIndex2 = MainArray.findIndex(Element => Element === String)
console.log(FindLastIndex2); // -1

// Array Index Reverse
const toReversedIndex = MainArray.toReversed()
console.log(toReversedIndex);

// Array Index Change
// Name[index Target] = ChangeValue
MainArray[4] = `ADMIN`
console.log(MainArray);

// Array Index Change
const CreateArray = MainArray.with(0, `ADMIN`)
console.log(CreateArray); // ['ADMIN', 'JavaScript', 27, 'Coffee', 'Ansan']

MainArray[4] = `ADMIN`
console.log(MainArray);