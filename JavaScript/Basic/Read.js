const NAME_CHECK="^[a-zA-Z0-9]$"
const EMAIL_CHECK="^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,}$"
const ERROR_CHECK="^[!#$%&'*+-/=?^_{|}~]$"

const string_read = require(`readline`)
const input_read = string_read.createInterface({
    input: process.stdin,
    output: process.stdout
})

input_read.question(`Enter the name : `, function(data) {
    console.log(`String Text read output : ` + data)
    input_read.close()
})