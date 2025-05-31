📀 Vote Playlist - Proyecto con Vite + React + Tailwind
Este proyecto fue creado utilizando Vite como bundler, React como librería de interfaz y Tailwind CSS para estilos.

🎵 Vote Playlist
Vote Playlist es una plataforma web diseñada para gimnasios que permite a sus usuarios votar por playlists musicales para diferentes días de la semana. De esta forma, los asistentes al gimnasio pueden participar activamente en la selección musical, creando una experiencia más personalizada y motivadora.


🚀 Crear el proyecto (opcional si ya está clonado):
 npm create vite@latest vote-playlist --template react


🎨 Instalar Tailwind CSS con Vite
Sigue la guía oficial para integrar Tailwind en un proyecto Vite:
🔗https://tailwindcss.com/docs/installation/using-vite


🛠️ Instalación y ejecución del proyecto:

 npm install     # Instala todas las dependencias
 
 npm run dev     # Inicia el servidor de desarrollo




🧱 Estructura del MCP (Model Context Protocol)

La configuración mcp define los distintos servidores y herramientas que se integran dentro del entorno del proyecto mediante el Model Context Protocol (MCP). Este protocolo permite ejecutar accciones en fuentes de datos. A continuación, se describe cada uno de los servidores que utilizaremos:


"mcp": {
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\lucas\\OneDrive\\Escritorio"
      ]
    },
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
},
"chat.mcp.discovery.enabled": true