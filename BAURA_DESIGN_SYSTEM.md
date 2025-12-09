# Baura - Design System para Web

**Versión:** 1.0
**Fecha:** Diciembre 2024
**Aplicación:** Baura - Perfumería Personal

---

## 1. Identidad de Marca

### Nombre
**Baura** - Aplicación de descubrimiento y gestión de perfumes

### Personalidad de Marca
- **Elegante** - Diseño editorial refinado
- **Premium** - Sensación de lujo accesible
- **Cálida** - Tonos champagne y dorados
- **Minimalista** - Espacios limpios, sin ruido visual

---

## 2. Paleta de Colores

### Colores Principales (Brand)

| Nombre | HEX | RGB | Uso |
|--------|-----|-----|-----|
| **Brand Primary** (Light) | `#1A1A1A` | rgb(26, 26, 26) | Textos principales, elementos de marca |
| **Brand Primary** (Dark) | `#F5F5F0` | rgb(245, 245, 240) | Textos en modo oscuro |
| **Brand Accent** | `#C4A962` | rgb(196, 169, 98) | Botones primarios, acentos, CTA |
| **Brand Accent Light** | `#D4B97A` | rgb(212, 185, 122) | Hover states, variante clara |
| **Brand Accent Dark** | `#A68B4E` | rgb(166, 139, 78) | Pressed states, variante oscura |

### Colores de Acento Dorado

| Nombre | HEX | RGB | Uso |
|--------|-----|-----|-----|
| **Accent Gold** | `#C4A962` | rgb(196, 169, 98) | Color principal de acento |
| **Accent Gold Light** | `#D4B97A` | rgb(212, 185, 122) | Variante clara |
| **Accent Gold Dark** | `#A68B4E` | rgb(166, 139, 78) | Variante oscura |

### Colores de Fondo

| Nombre | HEX (Light) | HEX (Dark) | Uso |
|--------|-------------|------------|-----|
| **Background Primary** | `#FFFFFF` | `#1A1A1A` | Fondo principal |
| **Background Secondary** | `#F5F5F0` | `#2A2A2A` | Fondo secundario (cards, secciones) |
| **Background Tertiary** | `#EBE8E0` | `#333333` | Fondo terciario |

### Colores de Texto

| Nombre | HEX (Light) | HEX (Dark) | Uso |
|--------|-------------|------------|-----|
| **Text Primary** | `#1A1A1A` | `#F5F5F0` | Títulos, texto principal |
| **Text Secondary** | `#4A4A4A` | `#B0B0B0` | Subtítulos, texto secundario |
| **Text Tertiary** | `#7A7A7A` | `#808080` | Captions, metadatos |
| **Text Disabled** | `#AAAAAA` | `#555555` | Texto deshabilitado |

### Colores de Feedback

| Nombre | HEX | RGB | Uso |
|--------|-----|-----|-----|
| **Success** | `#6B8E23` | rgb(107, 142, 35) | Confirmaciones, checks |
| **Error** | `#8B0000` | rgb(139, 0, 0) | Errores, alertas críticas |
| **Warning** | `#DAA520` | rgb(218, 165, 32) | Advertencias |
| **Info** | `#708090` | rgb(112, 128, 144) | Información neutral |

---

## 3. Degradados

### Degradado Principal (Champán)
Usado en fondos de pantallas principales y headers.

```css
/* Degradado Champán - De arriba a abajo */
background: linear-gradient(
  180deg,
  rgba(166, 139, 78, 0.5) 0%,      /* Accent Gold Dark 50% */
  rgba(196, 169, 98, 0.5) 25%,     /* Brand Accent 50% */
  rgba(212, 185, 122, 0.5) 55%,    /* Accent Gold Light 50% */
  #FFFFFF 85%                       /* Blanco */
);
```

### Degradado de Marca (Completo)
Para headers especiales o elementos hero.

```css
/* Brand Gradient */
background: linear-gradient(
  180deg,
  #8B7355 0%,    /* Champán oscuro/marrón cálido */
  #C4A962 25%,   /* Champán (brand accent) */
  #E8DCC8 55%,   /* Beige cálido */
  #FFFFFF 85%    /* Blanco */
);
```

---

## 4. Tipografía

### Fuentes

| Tipo | Fuente | Fallback Web |
|------|--------|--------------|
| **Títulos** | Georgia | `'Georgia', 'Times New Roman', serif` |
| **Cuerpo** | SF Pro / System | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` |

### Escala Tipográfica

#### Display (Splash, Hero sections)
| Estilo | Tamaño | Peso | Line Height | Fuente |
|--------|--------|------|-------------|--------|
| Display Large | 57px | Regular | 1.2 | Georgia |
| Display Medium | 45px | Regular | 1.2 | Georgia |
| Display Small | 36px | Regular | 1.2 | Georgia |

#### Headlines (Títulos de secciones)
| Estilo | Tamaño | Peso | Line Height | Fuente |
|--------|--------|------|-------------|--------|
| Headline Large | 32px | Regular | 1.3 | Georgia |
| Headline Medium | 28px | Regular | 1.3 | Georgia |
| Headline Small | 24px | Regular | 1.3 | Georgia |

#### Titles (Cards, items)
| Estilo | Tamaño | Peso | Line Height | Fuente |
|--------|--------|------|-------------|--------|
| Title Large | 22px | Regular | 1.4 | Georgia |
| Title Medium | 18px | Regular | 1.4 | Georgia |
| Title Small | 16px | Regular | 1.4 | Georgia |

#### Body (Contenido)
| Estilo | Tamaño | Peso | Line Height | Fuente |
|--------|--------|------|-------------|--------|
| Body Large | 16px | Regular | 1.5 | System/SF Pro |
| Body Medium | 14px | Regular | 1.5 | System/SF Pro |
| Body Small | 12px | Regular | 1.4 | System/SF Pro |

#### Labels & Captions
| Estilo | Tamaño | Peso | Line Height | Fuente |
|--------|--------|------|-------------|--------|
| Label Large | 16px | Medium (500) | 1.4 | System/SF Pro |
| Label Medium | 14px | Medium (500) | 1.4 | System/SF Pro |
| Label Small | 12px | Medium (500) | 1.4 | System/SF Pro |
| Caption | 12px | Regular | 1.3 | System/SF Pro |
| Overline | 10px | Semibold (600) | 1.2 | System/SF Pro |

### Estilo Editorial
Para textos con espaciado de letras (tracking):

```css
/* Page Title Editorial */
.editorial-page-title {
  font-family: Georgia, serif;
  font-size: 22px;
  letter-spacing: 1.5px;
  color: #1A1A1A;
}

/* Section Header Editorial */
.editorial-section-header {
  font-family: -apple-system, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #4A4A4A;
}

/* Body Light Editorial */
.editorial-body-light {
  font-family: -apple-system, sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: #4A4A4A;
}
```

---

## 5. Espaciado

### Sistema de Grid (8pt base)

| Token | Valor | Uso |
|-------|-------|-----|
| `spacing-2` | 2px | Micro (line spacing) |
| `spacing-4` | 4px | Badges, tags |
| `spacing-8` | 8px | Padding denso |
| `spacing-12` | 12px | Padding normal |
| `spacing-16` | 16px | Padding cómodo |
| `spacing-20` | 20px | Secciones |
| `spacing-24` | 24px | Padding horizontal pantallas |
| `spacing-32` | 32px | Separación entre secciones |
| `spacing-40` | 40px | Mucho aire |
| `spacing-48` | 48px | Headers |
| `spacing-64` | 64px | Top padding screens |

### Espaciado Semántico

```css
/* Padding horizontal de pantallas */
--screen-horizontal: 24px;

/* Padding vertical de pantallas */
--screen-vertical: 20px;

/* Padding interno de cards */
--card-padding: 16px;

/* Espacio entre secciones */
--section-spacing: 32px;

/* Espacio entre items en listas */
--list-item-spacing: 12px;
```

---

## 6. Bordes y Esquinas

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-none` | 0px | Sin redondeo |
| `radius-small` | 8px | Botones pequeños, badges |
| `radius-medium` | 12px | Cards, inputs |
| `radius-large` | 16px | Modals, bottom sheets |
| `radius-xl` | 24px | Pantallas completas |
| `radius-full` | 9999px | Círculos, pills |

### Bordes

```css
/* Borde primario */
border: 1px solid rgba(0, 0, 0, 0.08);

/* Borde secundario */
border: 1px solid rgba(196, 169, 98, 0.3);

/* Borde con focus */
border: 2px solid #C4A962;
```

---

## 7. Sombras

| Nivel | Valores | Uso |
|-------|---------|-----|
| **Small** | `0 2px 4px rgba(0,0,0,0.08)` | Cards sutiles, hover |
| **Medium** | `0 4px 8px rgba(0,0,0,0.12)` | Cards elevadas |
| **Large** | `0 8px 16px rgba(0,0,0,0.16)` | Modals, dropdowns |
| **Elevated** | `0 12px 24px rgba(0,0,0,0.20)` | Popovers flotantes |

---

## 8. Componentes

### Botones

#### Primary Button
```css
.btn-primary {
  background: #C4A962;
  color: #FFFFFF;
  font-family: -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: #D4B97A;
}

.btn-primary:active {
  background: #A68B4E;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: #1A1A1A;
  font-family: -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(0, 0, 0, 0.04);
}
```

#### Tertiary Button (Text only)
```css
.btn-tertiary {
  background: transparent;
  color: #C4A962;
  font-family: -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
}

.btn-tertiary:hover {
  text-decoration: underline;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.card-elevated {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}
```

### Inputs

```css
.input {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 12px 16px;
  font-family: -apple-system, sans-serif;
  font-size: 16px;
  color: #1A1A1A;
  transition: border-color 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #C4A962;
  box-shadow: 0 0 0 3px rgba(196, 169, 98, 0.15);
}

.input::placeholder {
  color: #AAAAAA;
}
```

### Badges

```css
/* Badge Neutral */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
}

.badge-neutral {
  background: rgba(0, 0, 0, 0.06);
  color: #4A4A4A;
}

.badge-accent {
  background: rgba(196, 169, 98, 0.15);
  color: #A68B4E;
}

.badge-success {
  background: rgba(107, 142, 35, 0.15);
  color: #6B8E23;
}
```

---

## 9. Animaciones

### Transiciones Estándar

```css
/* Rápida */
transition: all 0.2s ease-in-out;

/* Normal */
transition: all 0.3s ease-in-out;

/* Lenta */
transition: all 0.5s ease-in-out;

/* Spring (para elementos interactivos) */
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 10. Iconografía

### Sistema de Iconos
Usar iconos de estilo **outlined** o **filled** según contexto:
- **Navegación activa**: Filled
- **Navegación inactiva**: Outlined
- **Acciones**: Outlined

### Tamaños de Iconos

| Token | Tamaño | Uso |
|-------|--------|-----|
| `icon-xs` | 10px | Badges, indicadores |
| `icon-sm` | 14px | Acciones secundarias |
| `icon-md` | 18px | Tamaño por defecto |
| `icon-lg` | 24px | Acciones primarias, navegación |
| `icon-xl` | 32px | Headers, empty states |
| `icon-display` | 48px | Hero sections |

### Iconos Sugeridos (Equivalentes web)
- **Heroicons** (https://heroicons.com)
- **Phosphor Icons** (https://phosphoricons.com)
- **Lucide** (https://lucide.dev)

---

## 11. Responsive Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Móviles grandes */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Desktop grande */
```

---

## 12. CSS Variables (Resumen)

```css
:root {
  /* Brand Colors */
  --color-brand-primary: #1A1A1A;
  --color-brand-accent: #C4A962;
  --color-brand-accent-light: #D4B97A;
  --color-brand-accent-dark: #A68B4E;

  /* Background */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F0;
  --color-bg-tertiary: #EBE8E0;

  /* Text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A4A4A;
  --color-text-tertiary: #7A7A7A;
  --color-text-disabled: #AAAAAA;

  /* Feedback */
  --color-success: #6B8E23;
  --color-error: #8B0000;
  --color-warning: #DAA520;
  --color-info: #708090;

  /* Spacing */
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.16);

  /* Fonts */
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Transitions */
  --transition-fast: 0.2s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-brand-primary: #F5F5F0;
    --color-bg-primary: #1A1A1A;
    --color-bg-secondary: #2A2A2A;
    --color-bg-tertiary: #333333;
    --color-text-primary: #F5F5F0;
    --color-text-secondary: #B0B0B0;
    --color-text-tertiary: #808080;
    --color-text-disabled: #555555;
  }
}
```

---

## 13. Ejemplo de Implementación

### Card de Perfume

```html
<article class="perfume-card">
  <img src="perfume.jpg" alt="Acqua Di Gioia" class="perfume-image">
  <div class="perfume-info">
    <h3 class="perfume-name">Acqua Di Gioia Eau Fraiche</h3>
    <p class="perfume-brand">GIORGIO ARMANI</p>
    <div class="perfume-family">
      <span class="family-primary">Acuáticos</span>
      <span class="family-secondary">Florales · Cítricos</span>
    </div>
  </div>
</article>
```

```css
.perfume-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-16);
  box-shadow: var(--shadow-sm);
}

.perfume-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  background: white;
  border-radius: var(--radius-sm);
}

.perfume-name {
  font-family: var(--font-serif);
  font-size: 18px;
  color: var(--color-text-primary);
  margin: var(--spacing-12) 0 var(--spacing-4);
}

.perfume-brand {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
}

.perfume-family {
  margin-top: var(--spacing-8);
  text-align: center;
}

.family-primary {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--color-text-primary);
}

.family-secondary {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--color-text-secondary);
  display: block;
  margin-top: var(--spacing-2);
}
```

---

## 14. Assets Necesarios

### Logo
- Formato: SVG + PNG (@1x, @2x, @3x)
- Variantes: Color, Blanco, Negro
- Tamaño mínimo: 50x50px

### Imágenes de Fondo
- Gradient Champán (puede ser CSS)
- Texturas sutiles (opcional)

### Iconos de Familias Olfativas
- Amaderado
- Floral
- Acuático
- Oriental/Especiado
- Gourmand
- Cítrico

---

## 15. Notas Finales

### Principios de Diseño
1. **Claridad** - Jerarquía visual clara
2. **Elegancia** - Uso moderado de colores, mucho blanco
3. **Consistencia** - Mismos patrones en toda la web
4. **Accesibilidad** - Contraste suficiente, textos legibles

### Contacto
Para dudas sobre el design system, consultar con el equipo de desarrollo iOS donde está implementado originalmente.

---

*Documento generado a partir del código fuente de la app iOS Baura*
