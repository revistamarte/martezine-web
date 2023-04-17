@echo off
@chcp 65001 >nul
for /F %%A in ('ECHO prompt $E^| cmd') do set "ESC=%%A"
echo %ESC%[91moi, %ESC%[0m%ESC%[41mbem vindos à marte.%ESC%[0m
call npm i
cd client
call npm i
cd ..
call npm run build-react
cd server
call npm i
start "" http://localhost:8080
call npm start
