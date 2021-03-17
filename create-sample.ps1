# -> Enable PS1 Execution (run command as Admin): [ Set-ExecutionPolicy -ExecutionPolicy Unrestricted ]
# -> Usage / Run from CMD: [ powershell -file create-sample.ps1 new-app-name ]
param(
  [Parameter(Mandatory=$True)]
  [ValidateNotNull()]
  $appname
)

cd ./samples
npx ng generate application $appname --style scss --routing false
