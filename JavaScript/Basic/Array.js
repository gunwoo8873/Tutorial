const MainArray = [
    Name = `Test_UserName`,
    Skill = `JavaScript`,
    Age = 27,
    Drink = `Coffee`,
    Live = `Korea`,
]

function return_arr(){
    console.log(MainArray);

    /** 
     * reverse : Array[Index]의 배열을 반대로 변경하여 반환한다.  
     * 주의 : reverse()를 사용하는 경우 새정의를 하더라도 같은 결과를 불러오기 때문에
     * .from을 사용하여 원래 배열의 정의를 복사해야 한다.
     */
    const reverse_arr = MainArray.reverse()
    console.log(`reverse :`, reverse_arr)

    /** 
     * toSorted : Array[Index] 배열을 새로운 정렬을 한다. (Number -> String)  
     * 주의 : toSorted는 sort와 같은 원리로 동작을 하기 때문에 문자열 및 숫자를 정렬할 때 주의 해야한다.
    */
    const tosorted_arr = MainArray.toSorted()
    console.log(`toSorted :`, tosorted_arr)

    const sort_arr = MainArray.sort()
    console.log(`sort :`, sort_arr)
}
return_arr()

function search_arr(){
    const non_at = MainArray[1]
    console.log(`${1} of returns : ${non_at}`);

    /** at : (Value)의 정숫값에 따라 Array[Index]에 있는 항목을 반환을 한다 */
    const at_Array_M = MainArray.at(-2)
    const at_Array_P = MainArray.at(2)
    console.log(`at : ${-2} of returns : ${at_Array_M}\nat : ${2} of returns : ${at_Array_P}`);

    /** findIndex : Array[Index] 배열의 기준이 반대로 변경된다 */
    const findIndex_Array = MainArray.findIndex(Element => Element === `JavaScript`)   
    console.log(`LastIndex :`, findIndex_Array)
}
search_arr()

function Delete_arr(){
    /** pop : Array[Index]의 배열에서 마지막 요소를 제거하고 반환 */
    const pop_Array = MainArray.pop()
    return console.log(`${pop_Array}`)
}
Delete_arr()

function add_arr(){
    const push_array = MainArray.push(`ADMIN`, `DEVOPS`)
    return console.log(push_array)
}
add_arr()

/*
// Array Index Change
const CreateArray = MainArray.with(0, `ADMIN`)
console.log(CreateArray); // ['ADMIN', 'JavaScript', 26, 'Coffee', 'Ansan']
*/

/*
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
*/