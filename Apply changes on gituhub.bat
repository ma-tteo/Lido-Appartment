@echo off
rem Questo script aggiunge, committa e pusha le modifiche a GitHub.

echo.
echo ======================================================
echo      Applicando le modifiche su GitHub
echo ======================================================
echo.

echo ---> Aggiungo tutti i file modificati (git add .)...
git add .
echo.

rem Chiede all'utente di inserire un messaggio di commit
set /p commitMessage="---> Scrivi un messaggio per il commit e premi Invio: "

echo.
echo ---> Eseguo il commit con il messaggio: "%commitMessage%"
git commit -m "%commitMessage%"
echo.

echo ---> Carico le modifiche su GitHub (git push)...
git push
echo.

echo ======================================================
echo      Fatto! Le modifiche sono su GitHub.
echo ======================================================
echo.

echo ---> Avvio del server di sviluppo (npm run dev)...
npm run dev

rem Mette in pausa lo script per mostrare l'output finale
pause
