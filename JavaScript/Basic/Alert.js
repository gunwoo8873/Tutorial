const userinfo = [
    { name: `최건우`, skill: `Shell`, age: 26 },
    { name: `정소은`, skill: `Java`, age: 28 },
    { name: `채홍무`, skill: `kotlin`, age: 24 }
]

// EX1
function EX1_userinfo() {
    for (let i = 0; i < userinfo.length; i++) {
        console.log(`Literal EX2`);
        /** alert : HTML의 상단 팝업 형태로 알림 */
        console.log(userinfo[i].name + " " + userinfo[i].skill + " " + userinfo[i].age)
    }
}
EX1_userinfo()

// EX2
function EX2_userinfo() {
    delete userinfo[0]
    /** delete Array의 [Index]의 [Number]부분에 대한 요소를 삭제한다 */
    console.log( userinfo[0] )
    console.log( userinfo.length )
}
EX2_userinfo()


// EX3
function EX3_userinfo() {
    /** splice : Array의 [Index]의 [Number, Number]부분에 대한 요소범위를 설정한만큼 삭제한다 */
    userinfo.splice(0, 1)
    console.log( userinfo[0] )
    console.log( userinfo.length )
}

function non_EX3_userinfo() {
    /** splice : Array의 [Index]의 [Number, Number]부분에 대한 요소를 설정한만큼 삭제하고 대체한다. */
    userinfo.splice(0, 2, "User", {name: `User`, skill: `powershell`, age: 26})
    console.log( userinfo[0] )
    console.log( userinfo.length )
}
non_EX3_userinfo()