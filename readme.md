# Lado C - Medio de Opinión Política

Sitio web de opinión política con enfoque en Catamarca, Argentina.

## 🚀 Despliegue Rápido

### Opción 1: GitHub Pages (Gratis)
1. Sube todos los archivos a tu repositorio
2. Ve a Settings > Pages
3. Selecciona "main" branch y guarda
4. Tu sitio estará en: `https://tunombre.github.io/turepositorio`

### Opción 2: Firebase Hosting (Recomendado)
1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Inicia sesión: `firebase login`
3. Inicializa proyecto: `firebase init`
   - Selecciona: Hosting, Firestore, Storage
4. Despliega: `firebase deploy`

### Opción 3: Netlify/Vercel
- Solo arrastra la carpeta a netlify.com o vercel.com

## 🔧 Configuración Requerida

### 1. Firebase
1. Crea proyecto en [Firebase Console](https://console.firebase.google.com)
2. Activa: Authentication, Firestore, Storage
3. Copia configuración a `firebase-config.js`

### 2. EmailJS (Formulario de contacto)
1. Regístrate en [EmailJS](https://www.emailjs.com)
2. Crea servicio de email (Gmail recomendado)
3. Crea template de contacto
4. Actualiza IDs en `email-service.js`

### 3. Dominio Personalizado (Opcional)
1. Compra dominio (ej: ladoc.com.ar)
2. Configura DNS en tu hosting
3. Añade dominio en Firebase Hosting

## 📁 Estructura de Archivos
