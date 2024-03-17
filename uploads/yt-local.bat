@echo off

start /min firefox http://localhost:9010/

timeout /t 1.5 >nul

start /min powershell.exe -Command "Set-Location \"$env:userprofile\Downloads\yt-local\venv\Scripts\"; Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; .\activate; pip install gevent; cd \"$env:userprofile\Downloads\yt-local\"; python server.py"

exit
