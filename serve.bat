@echo off
@chcp 65001 >nul
for /F %%A in ('ECHO prompt $E^| cmd') do set "ESC=%%A"
echo %ESC%[91moi, %ESC%[0m%ESC%[41mbem vindos à marte.%ESC%[0m
call npm i
call npm run build:client
cd server
call npm run start:open
pause