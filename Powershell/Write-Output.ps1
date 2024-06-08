# Case.1
# Write-Output : Default String and Number Output Message
# Write-Output [-InputObject] <psobject> [-NoEnumerate] [<CommonParameters>]
Write-Output "Case.1"
Write-Output "1. Not variable Output"

$Variable_Output = "2. variable Output"
Write-Output "${Variable_Output}"

# Case.2
# Read-Host [[-Prompt] <Object>] [-MaskInput] [<CommonParameters>]
# Read-Host [[-Prompt] <Object>] [-AsSecureString] [<CommonParameters>]
Write-Output "Case.2"
Read-Host "Enter the String or Number"
Write-Host "Not variable Read to string or number input : "

$Variable_Read = Read-Host "Enter the String or Number"
Write-Host "variable Read to string or number input : $Variable_Read"