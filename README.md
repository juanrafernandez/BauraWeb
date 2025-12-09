# Baura Web

Landing page para la aplicación de perfumería **Baura** - Tu guía personal en el mundo de las fragancias.

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **EmailJS** - Formulario de contacto

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La web estará disponible en `http://localhost:5173`

## Build de producción

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`

## Estructura del proyecto

```
BauraWeb/
├── components/           # Componentes React
│   ├── Navbar.tsx       # Navegación principal
│   ├── Hero.tsx         # Sección principal con screenshots de la app
│   ├── Story.tsx        # Filosofía y etimología de Baura (Ba + Aura)
│   ├── OlfactoryPyramid.tsx  # Pirámide olfativa interactiva
│   ├── ScentFamilies.tsx     # Las 9 familias olfativas
│   ├── Features.tsx     # Funcionalidades de la app
│   ├── Contact.tsx      # Footer con formulario de contacto
│   └── Logo.tsx         # Componente del logo
├── assets/              # Imágenes y recursos
│   ├── baura_logo_1024_transp.png  # Logo oficial
│   ├── pantalla_profile.png        # Screenshot app - Perfil
│   └── pantalla_mi_coleccion.png   # Screenshot app - Colección
├── public/assets/       # Assets públicos (copias para producción)
├── App.tsx              # Componente principal
├── index.tsx            # Entry point
├── index.html           # HTML con config de Tailwind
├── index.css            # Variables CSS del Design System
├── BAURA_DESIGN_SYSTEM.md  # Guía de diseño oficial
└── vite.config.ts       # Configuración de Vite
```

## Design System

Los colores y tipografías siguen el documento `BAURA_DESIGN_SYSTEM.md`:

### Colores principales
- **Gold (Dorado):** `#C4A962` - Color principal de marca
- **Dark:** `#1A1A1A` - Texto y fondos oscuros
- **Sand:** `#F5F5F0` - Fondos claros

### Tipografías
- **Serif:** Georgia - Títulos y elementos elegantes
- **Sans:** System fonts - Textos y UI

## Formulario de contacto (EmailJS)

El formulario de contacto usa **EmailJS** para enviar emails directamente desde el navegador.

### Configuración actual
- **Service ID:** `service_vsfo6pa`
- **Template ID:** `template_qf0thfm`
- **Public Key:** `Rhjc_c7xjqOKHvNFH`
- **Email destino:** `business@baura.app` (alias de `hello@baura.app`)

### Límites
- **200 emails/mes** en plan gratuito
- Si falla, se abre automáticamente el cliente de correo como fallback

### Modificar configuración
1. Acceder a [emailjs.com](https://www.emailjs.com/)
2. Email Services > Editar servicio SMTP
3. Email Templates > Editar plantilla (campos: name, email, subject, message)

## Secciones de la web

1. **Hero** - Título principal + screenshots de la app (iOS/Android)
2. **Filosofía** - Origen del nombre (Ba = alma egipcia + Aura = brisa latina)
3. **Pirámide Olfativa** - Notas de salida, corazón y fondo (interactiva)
4. **Familias Olfativas** - Las 9 familias: Cítricos, Florales, Frutales, Amaderados, Orientales, Especiados, Acuáticos, Verdes, Gourmand
5. **App** - Funcionalidades: Perfil Olfativo, Buscador de Regalos, Mi Colección, Exploración
6. **Contacto** - Formulario para colaboraciones y negocios

## Navegación

Los enlaces del menú usan smooth scroll a las secciones:
- Filosofía → `#pyramid`
- Familias → `#families`
- App → `#features`
- Contacto → `#contact`

## Despliegue

La carpeta `dist/` contiene los archivos estáticos listos para desplegar en cualquier hosting (Vercel, Netlify, GitHub Pages, etc.)
