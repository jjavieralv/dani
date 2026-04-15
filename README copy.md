# 💒 Checklist Web de Boda — Dani & Ángel

Checklist interactiva para decidir qué elementos incluir en la web de boda de Dani y Ángel.

Cada elemento se puede marcar como **Sí**, **Quizás** o **No**, y al final se puede exportar el resultado como CSV.

## 🚀 Cómo publicarlo en GitHub Pages

### Paso 1: Crear el repo en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repo: `wedding-checklist` (o el que quieras)
3. Déjalo **público**
4. **No** marques "Add a README" (ya tienes este)
5. Click en **Create repository**

### Paso 2: Subir el código

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
# Instalar dependencias
npm install

# Inicializar git y subir
git init
git add .
git commit -m "Checklist boda Dani & Ángel"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/wedding-checklist.git
git push -u origin main
```

> ⚠️ Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub.

### Paso 3: Publicar con GitHub Pages

**Opción A — Automática con gh-pages (recomendada):**

```bash
npm run deploy
```

Esto compila el proyecto y lo publica en la rama `gh-pages`. Luego en GitHub:

1. Ve a **Settings → Pages**
2. En "Source", selecciona la rama `gh-pages` y carpeta `/ (root)`
3. Click **Save**
4. En 1-2 minutos estará en: `https://TU-USUARIO.github.io/wedding-checklist/`

**Opción B — Manual con GitHub Actions:**

1. Sube el código a `main` (paso 2)
2. Ve a **Settings → Pages**
3. En "Source", selecciona **GitHub Actions**
4. Escoge el workflow de **Vite** que GitHub te sugiere
5. Haz commit del workflow y se desplegará solo

### Paso 4 (opcional): Cambiar el nombre del repo

Si cambias el nombre del repo, actualiza también la línea `base` en `vite.config.js`:

```js
base: '/NOMBRE-DE-TU-REPO/',
```

## 🛠️ Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/wedding-checklist/` en el navegador.

## 📁 Estructura del proyecto

```
wedding-checklist/
├── index.html              ← HTML principal
├── package.json            ← Dependencias
├── vite.config.js          ← Config de Vite (¡aquí se cambia el base path!)
├── src/
│   ├── main.jsx            ← Entry point de React
│   └── WeddingChecklist.jsx ← El componente de la checklist
└── README.md               ← Este archivo
```

## ✨ Funcionalidades

- ~100 elementos organizados en 15 categorías
- Toggle **Sí / Quizás / No** por cada elemento
- Filtros rápidos por estado
- Barra de progreso
- Exportar a CSV (copiar al portapapeles)
- Diseño responsive (móvil y desktop)
- Estética lavanda acorde a la boda
