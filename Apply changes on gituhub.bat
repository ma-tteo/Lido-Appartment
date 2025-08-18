@echo off
setlocal enabledelayedexpansion

echo.
echo ======================================================
echo      Applicando le modifiche su GitHub
echo ======================================================
echo.

rem Determina il branch corrente (fallback su main)
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD 2^>nul') do set "BRANCH=%%b"
if "%BRANCH%"=="" set "BRANCH=main"

echo Branch corrente: %BRANCH%
echo.

echo ---> Aggiungo tutti i file modificati (git add .)...
git add .
echo.

rem Chiede all'utente di inserire un messaggio di commit
set /p commitMessage="---> Scrivi un messaggio per il commit e premi Invio: "
if "%commitMessage%"=="" set "commitMessage=Update"

echo.
echo ---> Eseguo il commit con il messaggio: "%commitMessage%"
git commit -m "%commitMessage%" 2>nul
if errorlevel 1 (
    echo ---> Nessun cambiamento da committare o commit fallito.
) else (
    echo ---> Commit eseguito.
)
echo.

echo ---> Integro le modifiche remote con pull --rebase...
git pull --rebase origin %BRANCH%
if errorlevel 1 (
    echo.
    echo ERRORE: il pull/rebase ha fallito.
    echo Risolvi i conflitti manualmente, poi esegui:
    echo   git add [file_risolti]
    echo   git rebase --continue
    echo Se vuoi annullare il rebase: git rebase --abort
    pause
    exit /b 1
)
echo.

echo ---> Carico le modifiche su GitHub (git push origin %BRANCH%)...
git push origin %BRANCH%
if errorlevel 1 (
    echo ERRORE: push fallito.
    echo Se sei sicuro di sovrascrivere il remoto, usa:
    echo   git push --force-with-lease origin %BRANCH%
) else (
    echo ---> Push completato.
)
echo.

rem Esegue npm run deploy solo se esiste package.json
if exist package.json (
    echo ---> Eseguo npm run deploy...
    npm run deploy
) else (
    echo ---> package.json non trovato. Skip deploy.
)
echo.

echo ======================================================
echo      Fatto! Le modifiche sono su GitHub.
echo ======================================================
echo.

pause
endlocal
