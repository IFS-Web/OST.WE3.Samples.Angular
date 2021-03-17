# -> Enable PS1 Execution (run command as Admin): [ Set-ExecutionPolicy -ExecutionPolicy Unrestricted ]
# -> Usage / Run from CMD: [ powershell -file ng-serve.ps1 app-name ]
param(
  [Parameter(Mandatory=$True)]
  [ValidateNotNull()]
  $appname
)

cd ./samples
npx ng serve --project $appname
