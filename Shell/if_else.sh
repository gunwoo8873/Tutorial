#!/bin/bash

# read : 입력값을 읽는 역할은 한다.
# -p : 하나의 라인으로 출력 문자열과 입력값을 입력할 수 있도록 한다. 
function Email_check() {
    read -p "Enter the Email string : " READ_TEST_INPUT
    local valid_email_pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    local special_pattern="[!@#$%^]"

    if [[ ${READ_TEST_INPUT} =~ ${valid_email_pattern} ]]; then
        echo "Valid email: $READ_TEST_INPUT"
    elif [[ ${READ_TEST_INPUT} =~ ${special_pattern} ]]; then
        echo "The string contains invalid special characters."
    else
        echo "Invalid email format."
    fi
}
Email_check