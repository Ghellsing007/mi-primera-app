@echo off
echo ========================================
echo    BUILD APK - MI PRIMERA APP
echo ========================================
echo.

REM Verificar que estamos en el directorio correcto
if not exist "package.json" (
    echo ERROR: No se encontro package.json. Ejecuta este script desde la raiz del proyecto.
    pause
    exit /b 1
)

REM Verificar que existe la carpeta android
if not exist "android" (
    echo ERROR: No se encontro la carpeta android. Ejecutando prebuild...
    call npm run prebuild
    if errorlevel 1 (
        echo ERROR: Fallo el prebuild
        pause
        exit /b 1
    )
)

echo Selecciona el tipo de build:
echo 1. Debug (rapido, para testing)
echo 2. Release (optimizado, para distribucion)
echo 3. Clean + Release (limpia cache y construye)
echo 4. Solo limpiar cache
echo.
set /p choice="Ingresa tu opcion (1-4): "

if "%choice%"=="1" goto debug
if "%choice%"=="2" goto release
if "%choice%"=="3" goto clean_release
if "%choice%"=="4" goto clean_only
echo Opcion invalida
pause
exit /b 1

:debug
echo.
echo Construyendo APK Debug...
cd android
call gradlew.bat assembleDebug
if errorlevel 1 (
    echo ERROR: Fallo el build debug
    cd ..
    pause
    exit /b 1
)
cd ..
echo.
echo ✅ APK Debug creada exitosamente!
echo Ubicacion: android\app\build\outputs\apk\debug\app-debug.apk
goto end

:release
echo.
echo Construyendo APK Release...
cd android
call gradlew.bat assembleRelease
if errorlevel 1 (
    echo ERROR: Fallo el build release
    cd ..
    pause
    exit /b 1
)
cd ..
echo.
echo ✅ APK Release creada exitosamente!
echo Ubicacion: android\app\build\outputs\apk\release\app-release.apk
goto end

:clean_release
echo.
echo Limpiando cache...
cd android
call gradlew.bat clean
echo Construyendo APK Release...
call gradlew.bat assembleRelease
if errorlevel 1 (
    echo ERROR: Fallo el build release
    cd ..
    pause
    exit /b 1
)
cd ..
echo.
echo ✅ APK Release creada exitosamente!
echo Ubicacion: android\app\build\outputs\apk\release\app-release.apk
goto end

:clean_only
echo.
echo Limpiando cache...
cd android
call gradlew.bat clean
cd ..
echo ✅ Cache limpiada exitosamente!
goto end

:end
echo.
echo ========================================
echo ¿Que quieres hacer ahora?
echo 1. Instalar APK en dispositivo conectado
echo 2. Abrir carpeta de APKs
echo 3. Salir
echo.
set /p next="Ingresa tu opcion (1-3): "

if "%next%"=="1" goto install
if "%next%"=="2" goto open_folder
if "%next%"=="3" goto exit
echo Opcion invalida
pause
exit /b 0

:install
echo.
echo Verificando dispositivos conectados...
adb devices
echo.
if "%choice%"=="1" (
    set apk_path=android\app\build\outputs\apk\debug\app-debug.apk
) else (
    set apk_path=android\app\build\outputs\apk\release\app-release.apk
)

if exist "%apk_path%" (
    echo Instalando APK...
    adb install "%apk_path%"
    if errorlevel 1 (
        echo ERROR: Fallo la instalacion. Verifica que el dispositivo este conectado y el USB debugging habilitado.
    ) else (
        echo ✅ APK instalada exitosamente!
    )
) else (
    echo ERROR: No se encontro la APK en %apk_path%
)
goto exit

:open_folder
echo Abriendo carpeta de APKs...
if exist "android\app\build\outputs\apk" (
    start "" "android\app\build\outputs\apk"
) else (
    echo ERROR: No se encontro la carpeta de APKs
)
goto exit

:exit
echo.
echo ¡Gracias por usar el build script!
pause