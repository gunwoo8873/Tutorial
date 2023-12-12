# !/user/bin/bash

name="inpa" # 변수 선언 및 대입
pass=123123 # 따옴표로 감싸든 말든 문자열로 저장됨

echo $name # {}가 있으나 없으나 $만으로 변수의 값을 넣어줄 수 있으나, 문자열을 붙여서 쓸려면 ${} 를 사용해야 한다.
echo "my name is mr.${name}"
printf "%s" $pass

# 디렉토리 위치 출력
echo $(which bash)