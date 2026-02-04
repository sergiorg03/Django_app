# Gestor de Proyectos y Tareas (Django)

Este proyecto es una aplicación web construida con **Django 6.x** para la gestión de proyectos y tareas. Permite a los usuarios realizar un seguimiento detallado del estado y la prioridad de las tareas asociadas.

## 🚀 Características Principales

- **Dashboard Personalizado**: Visualización clara de proyectos propios y colaboraciones.
- **Gestión de Proyectos**: Edición y eliminación de proyectos con validación de fechas límite.
- **Colaboración**: Posibilidad de añadir múltiples colaboradores a un mismo proyecto.
- **Seguimiento de Tareas**: 
  - Gestión de estados: `To Do`, `In Progress`, `Done`.
  - Diferentes niveles de prioridad: `Low`, `Medium`, `High`.
- **Autenticación**: Sistema completo de login y logout para asegurar la privacidad de los datos.
- **Estáticos con WhiteNoise**: Optimizado para servir archivos estáticos de forma eficiente.
- **Despliegue Listos para Render**: Configuración preparada para despliegue en la plataforma Render.

## 🛠️ Stack Tecnológico

- **Framework**: [Django 6.0.1](https://www.djangoproject.com/)
- **Base de Datos**: MySQL (Aiven Cloud)
- **Frontend**: HTML Semántico, CSS y JavaScript.
- **Servidor de Producción**: Gunicorn
- **Gestión de Estáticos**: WhiteNoise
- **Entorno**: Python Dotenv para variables de entorno.

## 📋 Requisitos Previos

- Python 3.10+
- MySQL (o acceso a una base de datos compatible)
- Un archivo `.env` configurado adecuadamente.

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/sergiorg03/Django_app.git
   cd Django_app
   ```

2. **Crear y activar un entorno virtual**:
   ```bash
   python -m venv venv
   # En Windows:
   .\venv\Scripts\activate
   # En Linux/macOS:
   source venv/bin/activate
   ```

3. **Instalar dependencias**:
   ```bash
   pip install -r proyecto_django/proyecto_django/requirements.txt
   ```

4. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto (`proyecto_django/proyecto_django/`) con las siguientes variables:
   ```env
   DJANGO_SECRET_KEY=tu_secret_key_aqui
   DEBUG=True
   DB_PASSWORD=tu_password_de_base_de_datos
   ```

5. **Aplicar migraciones**:
   ```bash
   python proyecto_django/proyecto_django/manage.py migrate
   ```

6. **Ejecutar el servidor de desarrollo**:
   ```bash
   python proyecto_django/proyecto_django/manage.py runserver
   ```

## 📂 Estructura del Proyecto

- `marcador/`: Aplicación principal que contiene la lógica de proyectos y tareas.
- `mysite/`: Configuración global del proyecto Django.
- `staticfiles/`: Directorio donde se recopilan los archivos estáticos para producción.
