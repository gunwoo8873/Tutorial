#!/bin/bash

# Variables can be defined like some other language.
# 일종의 다른 언어 처럼 변수 정의가 가능하다.
A="Used Defining Variables"
B=123456789

echo $A, $B

# echo is used as a basic output statement to define variables or to output strings.
# echo는 변수 정의나 혹은 문자열을 출력하는데 기본적인 출력문으로 사용한다. 
echo "Not Used Defining Variables"

# However, in order to use the variable definition, it must be used with a '$'.
# 변수 정의를 사용하기 위해선 '$'를 붙여서 사용해야 한다.
echo "A : $A, B : $B"

# If you want to output additional strings after the variable output, you must write the code in the form of ${variable}.
# 변수 출력 뒤에 추가적인 문자열을 이어 출력을 하고자 한다면 ${variable}인 형태로 코드를 작성해야 한다.
echo "A : ${A}Testing Variable, B : ${B}Testing Variable"