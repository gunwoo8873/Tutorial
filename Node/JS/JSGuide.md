# JavaScript and Node.js Guide

## 1. const and let  

| Option | Description |
| ---- | ---- |
| `const` | 하나의 정의만 사용할 경우 (`Final`과 유사) |
| `let`| 여러개의 정의를 사용할 경우와 값에 대한 업데이트가 필요할 경우 (`var`과 유사) |

```javascript
// const
const a = 1
const a = 2 // Debug Error

console.log(a); // Null

// let
let b = 1
b = 2

console.log(b); // 2
```

## 2. String (문자열)

```javascript
const name = 'Choigunwoo'
const skill = 'JavaScript'
const age = 26

// EX1
console.log('EX1');
console.log(name);
console.log(skill);
console.log(age);

console.log('');

// EX2
console.log(`EX2`);
console.log(`${name} , ${skill} , ${age}`);
```

## 3. Literal

```javascript
// EX1
const MainFunction = {
    Name : `Choigunwoo`,
    Skill : `JavaScript`,
    Age : 26,
    UserInfo : function () {
        console.log(this.Name + " " + this.Skill + " " + this.Age)
    }
}
console.log(`EX1`);
console.log(MainFunction.Name)
console.log(MainFunction.Skill)
console.log(MainFunction.Age)
MainFunction.UserInfo()

console.log(`--------------------`);

// EX2
const Sub_1_Function = function () {
    const Name = `Choigunwoo`
    const Skill = `JavaScript`
    const Age = 26

    console.log(Name + " " + Skill + " " + Age);
}
console.log(`EX2`);
Sub_1_Function()

console.log(`--------------------`);

// EX3
const Sub_2_Function = function () {

    const UserInfo = [
        Name = `Choigunwoo`, 
        Skill = `JavaScript`, 
        Age = 26
    ]
    console.log(UserInfo);
}

console.log(`EX3`)
Sub_2_Function()
```

## Array (Fix ES14)

```javascript
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
const toReversedIndex = MainArray.toReversed()
console.log(toReversedIndex);

// Array Index Change
// Name[index Target] = ChangeValue
MainArray[4] = `ADMIN`
console.log(MainArray);
```

## Operators
