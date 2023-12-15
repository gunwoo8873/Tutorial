## JavaScript and Node.js Guide

### 1. const and let  

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

### 2. String (문자열)

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

### 3. Literal

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
console.log(MainFunction.Name)
console.log(MainFunction.Skill)
console.log(MainFunction.Age)
MainFunction.UserInfo()

// EX2
const Sub_1_Function = function () {
    const Name = `Choigunwoo`
    const Skill = `JavaScript`
    const Age = 26

    console.log(Name + " " + Skill + " " + Age);
}
console.log(`EX2`);
Sub_1_Function()
```

### Array (Fix ES14)

```javascript
const Name = `Choigunwoo`
const Skill = `JavaScript`
const Age = 26

const MainArray = [Name, Skill, Age]

/*
Array.at(index => -1(Default))
Default = Array Index Behind Array
*/
console.log(MainArray.at(-1)); // Age = 26

console.log(``);

// ES14 Fix Array
const ES14Array = [10, 20, 15, 60, 45]
const Sub1_Intput = ES14Array.findLast((element) => element < 40)
const Sub2_Intput = ES14Array.findLast((element) => element > 50)
const Sub3_Intput = (element) => element < 40

console.log(Sub1_Intput); // 45
console.log(Sub2_Intput); // 60
console.log(ES14Array.findLastIndex(Sub3_Intput)); // 2
```