const Main_arr = [
    Name = `User`,
    Skill = `JavaScript`,
    Age = 27,
    Drink = `Coffee`,
    Live = `Korea`,
]

function return_arr(){
    console.log(Main_arr);

    /** 
     * reverse : Array[Index]의 배열을 반대로 변경하여 반환한다.  
     * 주의 : reverse()를 사용하는 경우 새정의를 하더라도 같은 결과를 불러오기 때문에
     * .from을 사용하여 원래 배열의 정의를 복사해야 한다.
     */
    const reverse_arr = Main_arr.reverse()
    console.log(`reverse :`, reverse_arr)

    /** 
     * toSorted : Array[Index] 배열을 새로운 정렬을 한다. (Number -> String)  
     * 주의 : toSorted는 sort와 같은 원리로 동작을 하기 때문에 문자열 및 숫자를 정렬할 때 주의 해야한다.
    */
    const tosorted_arr = Main_arr.toSorted()
    console.log(`toSorted :`, tosorted_arr)

    const sort_arr = Main_arr.sort()
    console.log(`sort :`, sort_arr)
}
return_arr()

function search_arr(){
    const non_at = Main_arr[1]
    console.log(`${1} of returns : ${non_at}`);

    /** at : (Value)의 정숫값에 따라 Array[Index]에 있는 항목을 반환을 한다 */
    const at_Array_M = Main_arr.at(-2), at_Array_P = Main_arr.at(2)
    console.log(`at : ${-2} of returns : ${at_Array_M}\nat : ${2} of returns : ${at_Array_P}`);
    
    /** findIndex : Array[Index] 배열의 기준이 반대로 변경된다 */
    const findIndex_Array = Main_arr.findIndex(Element => Element === `JavaScript`)   
    console.log(`LastIndex :`, findIndex_Array)
}
search_arr()

function Delete_arr(){
    /** pop : Array[Index]의 배열에서 마지막 요소를 제거하고 반환 */
    const pop_Array = Main_arr.pop()
    console.log(`${pop_Array}`)

    /** shift : Array[Index]의 맨 앞[0] 요소를 제거 */
    const shift_Array = Main_arr.shift()
    console.log(`${shift_Array}`)
}
Delete_arr()

function add_arr(){
    /** push : Array[Index]의 배열에 추가하고자 하는 Index 값을 추가한다. */
    const push_array = Main_arr.push(`ADMIN`, `DEVOPS`)
    console.log(push_array)

    /** unshift : Array[Index]의 맨 앞[0] 요소를 추가한다. */
    const unshift_array = Main_arr.unshift(`ADMIN`)
    console.log(unshift_array)

    /** ? */
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