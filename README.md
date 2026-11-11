# Luque Digital 2.0

Prototipo frontend de un portal ciudadano moderno inspirado en la estructura pública del sitio de la Municipalidad de Luque. No es un producto oficial ni está afiliado a la Municipalidad.

## Requisitos
- Node.js 20 o superior
- npm

## Instalación
```bash
npm install
npm run dev
```
Abrí la URL local que informa Vite (normalmente http://localhost:5173).

## Compilar para producción
```bash
npm run build
npm run preview
```

## Estructura
```text
src/
  components/   # Header y componentes reutilizables
  data/         # Contenido de ejemplo editable
  App.jsx       # Secciones de la página principal
  main.jsx      # Punto de entrada
  styles.css    # Diseño responsive
```

## Incluido en esta primera versión
- Cabecera responsive con menú móvil.
- Hero institucional.
- Accesos rápidos.
- Buscador local de servicios.
- Tarjetas de trámites.
- Sección de ciudad, noticias, transparencia y contacto.
- Enlaces externos al portal municipal original cuando corresponde.

## Próximas etapas recomendadas
1. Confirmar identidad visual oficial: escudo, logotipo, paleta y fotografías autorizadas.
2. Sustituir textos e imágenes de demostración por contenido institucional validado.
3. Implementar rutas internas y páginas de detalle para cada trámite.
4. Incorporar backend y panel administrativo con autenticación y roles.
5. Crear gestión documental con carga, clasificación y descarga de PDF.
6. Añadir auditoría, copias de seguridad, seguridad y despliegue.

## Nota sobre los datos
Los textos e imágenes de noticias y algunas fotografías son demostrativos. Los accesos externos apuntan al sitio público para evitar simular integraciones que todavía no existen. No se incluye backend, base de datos ni autenticación en esta entrega.
