# Configuración para GitHub Sync

## 1. Crear un Token de Acceso Personal (PAT)

1. Ve a [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Haz clic en "Generate new token"
3. Selecciona estos permisos:
   - `repo` (Full control of private repositories)
   - O `public_repo` (si tu repositorio es público)
4. Guarda el token en un lugar seguro (comienza con `ghp_`)

## 2. Configurar en el Panel de Administración

1. Inicia sesión como administrador (usuario: `admin`, contraseña: `ladoc2023`)
2. Abre el Panel de Administración
3. Ve a la sección "Sincronización con GitHub"
4. Completa:
   - **Token de GitHub**: Tu token personal
   - **Repositorio**: `tuusuario/ladoc` (reemplaza con tu usuario/repo)
   - **Rama**: `main` (o la rama que uses)

## 3. Primer Sincronización

1. Haz clic en "Probar Conexión" para verificar
2. Crea o edita un editorial
3. Se guardará automáticamente en GitHub

## 4. Estructura del Archivo datos.json

El archivo debe estar en la raíz de tu repositorio:
