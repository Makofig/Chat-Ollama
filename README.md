# 🧠 Chat IA con Ollama + Streamdown

## 📌 Descripción del Proyecto

Este proyecto es una aplicación de chat basada en inteligencia artificial que utiliza **Ollama** como motor de modelos locales y **Streamdown** para renderizar respuestas en tiempo real (streaming).

La arquitectura está separada en dos partes:

* **Frontend**: Aplicación en React encargada de la interfaz de usuario.
* **Backend**: API en Node.js que se comunica con Ollama y gestiona el streaming de respuestas.

### ✨ Características principales

* Chat interactivo en tiempo real
* Respuestas con streaming progresivo
* Renderizado avanzado (código, markdown, mermaid, math)
* UI moderna tipo ChatGPT
* Loader animado mientras se espera la respuesta

---

## 🏗️ Estructura del Proyecto

```
chat-ia-ollama/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Requisitos Previos

Antes de comenzar, asegurate de tener instalado:

* Node.js (v18 o superior)
* npm o yarn
* Ollama instalado y corriendo

### Instalar Ollama

https://ollama.com

Luego descargar un modelo (por ejemplo):

```bash
ollama pull llama3
```

---

## 🚀 Instalación del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Makofig/chat-ia-ollama.git
cd chat-ia-ollama
```

---

## 🔧 Backend (Node.js)

### 2. Ir a la carpeta backend

```bash
cd backend
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Variables de entorno

Crear un archivo `.env`:

```env
PORT=3000
OLLAMA_URL=http://localhost:11434
MODEL=llama3
```

### 5. Ejecutar servidor

```bash
npm run dev
```

El backend quedará corriendo en:

```
http://localhost:3000
```

---

## 🎨 Frontend (React)

### 6. Ir a la carpeta frontend

```bash
cd ../frontend
```

### 7. Instalar dependencias

```bash
npm install
```

### 8. Variables de entorno

Crear archivo `.env`:

```env
VITE_API_URL=http://localhost:3000
```

### 9. Ejecutar frontend

```bash
npm run dev
```

La app estará en:

```
http://localhost:5173
```

---

## 🔄 Flujo de la Aplicación

1. El usuario escribe un mensaje
2. El frontend lo envía al backend
3. El backend consulta a Ollama
4. La respuesta se envía en streaming
5. El frontend renderiza progresivamente con Streamdown

---

## 📦 Scripts útiles

### Backend

```bash
npm run dev     # modo desarrollo
npm start       # producción
```

### Frontend

```bash
npm run dev     # desarrollo
npm run build   # build producción
npm run preview # preview build
```

---

## 🌐 Despliegue

### Backend

Podés usar:

* VPS (recomendado para Ollama)
* Docker
* Railway / Render (limitado si usás modelos locales)

⚠️ Importante: Ollama requiere máquina con recursos (RAM/CPU o GPU).

---

### Frontend

Podés deployar en:

* Vercel
* Netlify

Solo necesitás configurar:

```env
VITE_API_URL=http://localhost:3000
```

---

## 🧪 Mejoras futuras

* Manejo de múltiples conversaciones
* Persistencia de chats (DB)
* Autenticación de usuarios
* Soporte multi-modelo
* Optimización de streaming

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Podés:

1. Hacer fork del repo
2. Crear una rama
3. Enviar un pull request

---

## 📄 Licencia

Este proyecto está bajo la licencia Apache License 2.0.

Podés usar, modificar y distribuir este software libremente, incluso para uso comercial, siempre que incluyas una copia de la licencia y mantengas los avisos de copyright.

Para más detalles:
http://www.apache.org/licenses/LICENSE-2.0

---

## 👨‍💻 Autor

Proyecto desarrollado como base para sistemas de chat IA locales usando Ollama.

---
