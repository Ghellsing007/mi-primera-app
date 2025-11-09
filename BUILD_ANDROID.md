# 📱 Guía de Build Android - Mi Primera App

## 🚀 Inicio Rápido

### Opción 1: Script Automático (Recomendado)
```bash
# Ejecutar el script interactivo
build-android.bat
```

### Opción 2: Comandos NPM
```bash
# Build debug (rápido)
npm run build:android:debug

# Build release (optimizado)
npm run build:android:release

# Limpiar cache
npm run build:android:clean
```

### Opción 3: Comandos Gradle Directos
```bash
# Navegar a la carpeta android
cd android

# Build debug
gradlew.bat assembleDebug

# Build release
gradlew.bat assembleRelease

# Limpiar proyecto
gradlew.bat clean
```

## 📋 Requisitos Previos

### ✅ Verificar Instalaciones
Ejecuta estos comandos para verificar que todo esté instalado:

```bash
# Verificar Node.js (debe ser 18+)
node --version

# Verificar Java (debe ser JDK 17+)
java -version

# Verificar Android SDK
echo %ANDROID_HOME%

# Verificar ADB
adb version
```

### 🔧 Configuración de Variables de Entorno
Si alguna verificación falla, configura estas variables:

```cmd
# Variables de sistema (Windows)
ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT=%ANDROID_HOME%

# Agregar al PATH
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

## 📦 Ubicación de las APKs

Después del build, encontrarás las APKs en:

```
android/app/build/outputs/apk/
├── debug/
│   └── app-debug.apk          # Para testing
└── release/
    └── app-release.apk        # Para distribución
```

## 📱 Instalación en Dispositivo

### Método 1: Usando ADB
```bash
# Verificar dispositivos conectados
adb devices

# Instalar APK debug
adb install android/app/build/outputs/apk/debug/app-debug.apk

# Instalar APK release
adb install android/app/build/outputs/apk/release/app-release.apk

# Desinstalar si es necesario
adb uninstall com.miprimeraapp.app
```

### Método 2: Transferir Archivo
1. Copia la APK a tu dispositivo
2. Habilita "Fuentes desconocidas" en Configuración
3. Abre el archivo APK desde el explorador de archivos

## ⚡ Optimizaciones Configuradas

Tu proyecto ya incluye estas optimizaciones:

### 🔧 Gradle Properties
- ✅ Memoria aumentada a 4GB
- ✅ Build paralelo habilitado
- ✅ Cache de Gradle habilitado
- ✅ Minificación en release
- ✅ Shrinking de recursos

### 📱 Configuración Android
- ✅ ProGuard configurado
- ✅ Hermes JS engine habilitado
- ✅ Nueva arquitectura React Native
- ✅ Soporte para múltiples arquitecturas

## 🐛 Solución de Problemas

### Error: ANDROID_HOME no configurado
```bash
# Solución: Configurar variable de entorno
set ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
```

### Error: Gradle daemon
```bash
# Limpiar y reiniciar
cd android
gradlew.bat --stop
gradlew.bat clean
gradlew.bat assembleRelease
```

### Error: Memoria insuficiente
El proyecto ya está configurado con 4GB de memoria. Si persiste:
```bash
# Editar android/gradle.properties
org.gradle.jvmargs=-Xmx6144m -XX:MaxMetaspaceSize=512m
```

### Error: Metro bundler
```bash
# Limpiar cache de Metro
npx expo start --clear
```

### Build muy lento
```bash
# Build solo para ARM64 (dispositivos modernos)
cd android
gradlew.bat assembleRelease -Preact.native.archiveApks=arm64-v8a
```

## 📊 Tiempos de Build Esperados

| Tipo de Build | Primera Vez | Builds Posteriores |
|---------------|-------------|-------------------|
| Debug | 5-15 min | 1-3 min |
| Release | 10-30 min | 3-8 min |
| Clean + Release | 15-45 min | 5-12 min |

## 🔍 Información del Proyecto

- **Nombre**: mi-primera-app
- **Package**: com.miprimeraapp.app
- **Versión**: 1.0.0
- **Min SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)
- **Compile SDK**: 34

## 📝 Comandos Útiles

```bash
# Ver información del proyecto
cd android && gradlew.bat projects

# Ver tareas disponibles
cd android && gradlew.bat tasks

# Build con logs detallados
cd android && gradlew.bat assembleRelease --info --stacktrace

# Ver dependencias
cd android && gradlew.bat dependencies

# Verificar configuración
cd android && gradlew.bat properties
```

## 🎯 Checklist de Build

### Antes del Build
- [ ] ✅ Node.js instalado (18+)
- [ ] ✅ Java JDK instalado (17+)
- [ ] ✅ Android Studio y SDK configurados
- [ ] ✅ Variables de entorno configuradas
- [ ] ✅ Dispositivo conectado (opcional)

### Durante el Build
- [ ] ✅ Monitorear logs por errores
- [ ] ✅ Verificar espacio en disco (mín. 2GB libre)
- [ ] ✅ Mantener conexión estable a internet

### Después del Build
- [ ] ✅ Verificar que la APK se generó
- [ ] ✅ Probar instalación en dispositivo
- [ ] ✅ Verificar funcionalidades básicas

## 🆘 Soporte

Si encuentras problemas:

1. **Revisa los logs**: Los errores suelen ser descriptivos
2. **Limpia el proyecto**: `npm run build:android:clean`
3. **Regenera archivos nativos**: `npm run prebuild:clean`
4. **Verifica variables de entorno**: Especialmente `ANDROID_HOME`
5. **Actualiza dependencias**: `npm update`

---

**¡Listo! 🎉 Tu proyecto está configurado para builds locales optimizados.**