const path = require('path');
const String = __filename;

console.log(`1. sep =`, path.sep); // 디렉토리 경로
console.log(`2. delimiter =`, path.delimiter); // 환경 변수

console.log(`3.1 dirname =`, path.dirname(String)); // 현재 파일의 디렉토리 경로
console.log(`3.2 resolve =`, path.resolve(__dirname ,`..` ,`..` ,`/Node` ,`.`)); // 디렉토리 절대경로 = E:\Tutorial\Node
console.log(`3.3 join =`, path.join(__dirname ,`..` ,`..` ,`/Node` ,`.`)); // 디렉토리 상대경로 = E:\Node\Path.js

console.log(`4. extname =`, path.extname(String)); // 현재 작성된 파일 확장자

console.log(`5.1 basename =`, path.basename(String)); // 현재 파일의 이름을 표시
console.log(`5.2 basename - extname =`, path.basename(String, path.extname(String)));

console.log(`6.1 parses =`, path.parse(String)); // 디렉토리 루트 상세 정보
// parses의 상세 정보를 합하여 출력
console.log(`6.2 format =`, path.format({
    root: `root`,
    dir: `E:\\Tutorial\\Node`,
    name: `path`,
    ext: `.js`
}));
// 슬래쉬(/) 혹은 역슬래쉬(\) 를 잘못 하용했을 경우 오류에 대한 문제를 변환
console.log(`6.3 normalize =`, path.normalize(`E:\\Tutorial\\Node\\path.js`)) 

// 디렉토리의 경로가 상대인지 절대인지 Boolean 형탤로 출력
console.log(`7.1 isAbsolute =`, path.isAbsolute(`E:\\`)); // true
console.log(`7.2 isAbsolute =`, path.isAbsolute(`./home`)); // fa
