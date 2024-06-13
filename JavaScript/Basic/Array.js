const Main_Arr = [
    Name = `User`,
    Skill = `JavaScript`,
    Age = 27,
    Drink = `Coffee`,
    Live = `Korea`,
]

function return_arr(){
    console.log(Main_Arr);

    /** 
     * reverse : Array[Index]의 배열을 반대로 변경하여 반환한다.  
     * 주의 : reverse()를 사용하는 경우 새정의를 하더라도 같은 결과를 불러오기 때문에
     * .from을 사용하여 원래 배열의 정의를 복사해야 한다.
     */
    const reverse_Arr = Main_Arr.reverse()
    console.log(`reverse :`, reverse_Arr)

    /** 
     * toSorted : Array[Index] 배열을 새로운 정렬을 한다. (Number -> String)  
     * 주의 : toSorted는 sort와 같은 원리로 동작을 하기 때문에 문자열 및 숫자를 정렬할 때 주의 해야한다.
    */
    const tosorted_Arr = Main_Arr.toSorted()
    console.log(`toSorted :`, tosorted_Arr)

    const sort_Arr = Main_Arr.sort()
    console.log(`sort :`, sort_Arr)
}
return_arr()

function search_arr(){
    const non_at = Main_Arr[1]
    console.log(`${1} of returns : ${non_at}`);

    /** at : (Value)의 정숫값에 따라 Array[Index]에 있는 항목을 반환을 한다 */
    const at_Arr_M = Main_Arr.at(-2), at_Arr_P = Main_Arr.at(2)
    console.log(`at : ${-2} of returns : ${at_Arr_M}\nat : ${2} of returns : ${at_Arr_P}`);
    
    /** findIndex : Array[Index] 배열의 기준이 반대로 변경된다 */
    const findIndex_Arr = Main_Arr.findIndex(Element => Element === `JavaScript`)   
    console.log(`LastIndex :`, findIndex_Arr)
}
search_arr()

function Delete_arr(){
    /** pop : Array[Index]의 배열에서 마지막 요소를 제거하고 반환 */
    const pop_Array = Main_Arr.pop()
    console.log(`${pop_Array}`)

    /** shift : Array[Index]의 맨 앞[0] 요소를 제거 */
    const shift_Array = Main_Arr.shift()
    console.log(`${shift_Array}`)
}
Delete_arr()

function add_arr(){
    /** push : Array[Index]의 배열에 추가하고자 하는 Index 값을 추가한다. */
    const push_Arr = Main_Arr.push(`ADMIN`, `DEVOPS`)
    console.log(push_Arr)

    /** unshift : Array[Index]의 맨 앞[0] 요소를 추가한다. */
    const unshift_Arr = Main_Arr.unshift(`ADMIN`)
    console.log(unshift_Arr)

    /** ? */
}
add_arr()