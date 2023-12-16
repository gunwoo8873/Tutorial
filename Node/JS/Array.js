const MainArray = [
    Name = `Choigunwoo`,
    Skill = `JavaScript`,
    Age = 26,
    Drink = `Coffee`,
    Live = `Ansan`,
]

// Array[index] 안에 존재하는 데이터를 마지막 값인 Live를 기준으로 디폴트값이 지정된다.
console.log(MainArray.at(-1)); // Live = Ansan

// ES14 Fix Array
// Reverse
const ReverseArray = MainArray.reverse()
console.log(ReverseArray); // [ 'Ansan', 'Coffee', '26', 'JavaScript', 'Choigunwoo' ]

// findIndex / findLastIndex는 Array의 Index값을 마지막을 기준으로 읽는다.
const LastIndex = MainArray.findIndex(Element => Element === `Choigunwoo`)
console.log(LastIndex); // 0
// Array [index] Boolean
// 요청값과 Array의 Index 안에 존재하는 값이 맞다면 그에 대한 값을 출력한다.
const FindLastIndex = MainArray.findIndex(Element => Element === 26)
console.log(FindLastIndex); // 2
// 요청값과 Array의 Index 안에 존재하지 않는 값이라면 false = -1 라는 값을 출력한다.
const FindLastIndex2 = MainArray.findIndex(Element => Element === String)
console.log(FindLastIndex2); // -1

// Array Index Reverse
const ReversedIndex = MainArray.toReversed()
console.log(ReverseArray);