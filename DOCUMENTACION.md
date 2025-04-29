# Documentación del Sitio Web - Fundación Alaia

Esta documentación proporciona una guía completa para mantener y actualizar el sitio web de la Fundación Alaia. Aquí encontrarás instrucciones paso a paso para realizar modificaciones comunes, así como recomendaciones importantes sobre la estructura del sitio.

## Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Modificación de Contenido](#modificación-de-contenido)
   - [Proyectos](#modificar-proyectos)
   - [Novedades](#modificar-novedades)
   - [Video](#modificar-video)
   - [Imágenes](#modificar-imágenes)
3. [Sliders y Componentes Interactivos](#sliders-y-componentes-interactivos)
4. [Agregar o Quitar Secciones](#agregar-o-quitar-secciones)
5. [Elementos Estructurales Importantes](#elementos-estructurales-importantes)
6. [Referencia de Estilos](#referencia-de-estilos)

## Estructura del Proyecto

El sitio web está organizado de la siguiente manera:

```
/home/david/alaia/
│
├── css/               # Archivos CSS organizados por categoría
│   ├── animations/    # Animaciones y efectos
│   ├── base/          # Estilos base (variables, reset, tipografía)
│   ├── components/    # Componentes reutilizables (botones, cards, separadores)
│   ├── layout/        # Estructura general (header, navigation, footer)
│   ├── responsive/    # Estilos responsivos para diferentes dispositivos
│   ├── sections/      # Estilos específicos para cada sección
│   └── main.css       # Archivo principal que importa todos los módulos CSS
│
├── js/                # Archivos JavaScript
│   ├── loadSections.js # Script para cargar secciones HTML dinámicamente
│   └── sliders.js      # Script para configurar sliders
│
├── public/            # Recursos públicos (imágenes, videos, documentos)
│   ├── images/        # Imágenes del sitio
│   │   ├── logo/      # Logotipos
│   │   ├── hero/      # Imágenes para la sección hero
│   │   ├── projects/  # Imágenes para proyectos
│   │   ├── news/      # Imágenes para novedades
│   │   └── team/      # Fotos del equipo
│   ├── videos/        # Videos 
│   └── documents/     # Documentos descargables (PDFs, etc.)
│
├── sections/          # Archivos HTML de cada sección
│   ├── header.html    # Cabecera y navegación
│   ├── hero.html      # Sección principal (banner)
│   ├── nosotros.html  # Sección "Nosotros"
│   ├── video.html     # Sección de video
│   ├── proyectos.html # Sección "Proyectos"
│   ├── novedades.html # Sección "Novedades"
│   ├── contacto.html  # Sección "Contacto"
│   └── footer.html    # Pie de página
│
├── home.html          # Página principal que carga todas las secciones
├── separators.js      # Script para crear separadores decorativos
└── DOCUMENTACION.md   # Este archivo de documentación
```

### Importante: Ubicación de Recursos

Todos los recursos como imágenes, videos y documentos deben almacenarse en la carpeta `public/` siguiendo la estructura de subcarpetas apropiada. Esto mantiene el proyecto organizado y facilita las referencias a estos archivos.

## Modificación de Contenido

### Modificar Proyectos

Los proyectos se encuentran en el archivo `/home/david/alaia/sections/proyectos.html`. Los proyectos se muestran como un slider utilizando la biblioteca Slick.

#### Ejemplo: Agregar un Nuevo Proyecto al Slider

Para agregar un nuevo proyecto, copie el siguiente código dentro del elemento `<div class="projects-slider">`:

```html
<div class="project-card">
    <img src="public/images/projects/nombre-del-proyecto.jpg" alt="Descripción del proyecto">
    <div class="project-content">
        <h3>Título del Proyecto</h3>
        <p>Descripción detallada del proyecto. Incluya información relevante sobre sus objetivos, actividades y resultados esperados.</p>
    </div>
</div>
```

#### Ejemplo: Modificar un Proyecto Existente en el Slider

Localice el bloque `<div class="project-card">` correspondiente dentro de `<div class="projects-slider">` y actualice los valores según sea necesario.

### Modificar Novedades

Las novedades se encuentran en el archivo `/home/david/alaia/sections/novedades.html`. Las novedades se muestran como un slider utilizando la biblioteca Slick.

#### Ejemplo: Agregar una Nueva Novedad al Slider

Para agregar una nueva novedad, copie el siguiente código dentro del elemento `<div class="news-slider">`:

```html
<div class="news-card">
    <img src="public/images/news/nombre-de-la-novedad.jpg" alt="Descripción de la imagen">
    <div class="news-content">
        <div class="news-date">DD de Mes, AAAA</div>
        <h3>Título de la Novedad</h3>
        <p>Descripción detallada de la novedad. Incluya información relevante sobre el evento, actividad o anuncio.</p>
    </div>
</div>
```

### Modificar Video

La sección de video se encuentra en el archivo `/home/david/alaia/sections/video.html`. Esta sección presenta el cortometraje "Migrar Confunde" y permite destacar contenido audiovisual importante para la fundación.

#### Ejemplo: Cambiar el Video Actual

Para cambiar el video, localice el elemento `<iframe>` dentro de `<div class="video-wrapper">` y actualice los siguientes atributos:

```html
<iframe 
    src="https://www.youtube.com/embed/NUEVO_ID_DE_YOUTUBE" 
    title="Nuevo Título del Video - Fundación Alaia" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

Reemplace `NUEVO_ID_DE_YOUTUBE` con el ID del nuevo video de YouTube (la parte que aparece después de `watch?v=` en la URL del video) y actualice el título según corresponda.

#### Ejemplo: Actualizar el Título y la Descripción del Video

Para actualizar el título principal y la descripción del video, modifique estos elementos:

```html
<h2>Nuevo Título Principal</h2>
<div class="video-container">
    <div class="video-wrapper">
        <!-- iframe del video aquí -->
    </div>
    <div class="video-description">
        <h3>Nuevo Subtítulo Descriptivo</h3>
        <p>Nueva descripción del video. Explique brevemente el contenido y su relevancia para la misión de la fundación.</p>
        <p>Párrafo adicional si es necesario.</p>
        <p><em>Información adicional o créditos.</em></p>
        <a href="#proyectos" class="btn animated-underline">Ver nuestros proyectos <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

#### Optimización de videos incrustados

Para mejorar el rendimiento del sitio al incrustar videos de YouTube:

1. **Carga diferida**: Agregue el atributo `loading="lazy"` al iframe para retrasar la carga hasta que sea necesario.

2. **Parámetros de privacidad**: Use `youtube-nocookie.com` en lugar de `youtube.com` para una mejor privacidad:
   ```html
   src="https://www.youtube-nocookie.com/embed/ID_DEL_VIDEO"
   ```

3. **Parámetros adicionales**: Puede controlar cómo se reproduce el video agregando parámetros a la URL:
   ```html
   src="https://www.youtube.com/embed/ID_DEL_VIDEO?rel=0&modestbranding=1&controls=1&showinfo=0"
   ```
   - `rel=0`: No muestra videos relacionados de otros canales
   - `modestbranding=1`: Reduce el branding de YouTube
   - `controls=1`: Muestra los controles del reproductor
   - `showinfo=0`: No muestra información del título antes de la reproducción

### Modificar Imágenes

Las imágenes se utilizan en varias secciones del sitio. A continuación, se muestra cómo modificar imágenes en diferentes contextos.

#### Ejemplo: Cambiar Logo

El logo se encuentra en el archivo `/home/david/alaia/sections/header.html`:

```html
<!-- Logo actualizado -->
<div class="logo">
    <img src="public/images/logo/logo.jpg" alt="Logo Fundación Alaia" class="logo-img">
</div>
```

#### Ejemplo: Cambiar Imagen de Fondo en una Sección

Para cambiar la imagen de fondo en una sección (por ejemplo, en el hero), modifique el CSS correspondiente en `/home/david/alaia/css/sections/hero.css`:

```css
.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../public/images/hero/fondo-hero.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
}
```

## Sliders y Componentes Interactivos

### Configuración de los Sliders

Los sliders de proyectos y novedades utilizan la biblioteca Slick Carousel. La configuración se encuentra en el archivo `/home/david/alaia/js/sliders.js`.

#### Opciones de Configuración Comunes

```javascript
$('.projects-slider').slick({
    slidesToShow: 3,           // Número de slides visibles a la vez
    slidesToScroll: 1,         // Número de slides que se desplazan con cada movimiento
    autoplay: true,            // Activar reproducción automática
    autoplaySpeed: 4000,       // Velocidad de reproducción automática (en ms)
    dots: true,                // Mostrar indicadores de posición
    arrows: true,              // Mostrar flechas de navegación
    prevArrow: $('.projects-prev'), // Elemento HTML que servirá como flecha anterior
    nextArrow: $('.projects-next'), // Elemento HTML que servirá como flecha siguiente
    appendDots: $('.projects-dots'), // Elemento HTML donde se colocarán los puntos
    infinite: true,            // Reproducción infinita en bucle
    responsive: [              // Configuración para diferentes tamaños de pantalla
        {
            breakpoint: 1024,  // Ancho de pantalla en px donde se aplica la configuración
            settings: {
                slidesToShow: 2 // Ajuste para tabletas
            }
        },
        {
            breakpoint: 768,   // Ajuste para móviles
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }
    ]
});
```

#### Personalización de la Apariencia de los Sliders

La apariencia de los sliders se controla mediante CSS en `/home/david/alaia/css/components/sliders.css`. Puede modificar aspectos como:

- Tamaño y espaciado de las tarjetas
- Apariencia de las flechas de navegación
- Estilo de los indicadores de posición (dots)
- Animaciones y transiciones

```css
/* Ejemplo: Personalizar flechas de navegación */
.prev-arrow, .next-arrow {
    background-color: var(--color-primary);   /* Color de fondo */
    color: white;                             /* Color del icono */
    width: 50px;                              /* Tamaño */
    height: 50px;
    border-radius: 50%;                       /* Forma circular */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Sombra */
}

/* Ejemplo: Personalizar indicadores de posición */
.slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
}

.slick-dots li.slick-active button {
    background-color: var(--thread-color-1);  /* Color para el indicador activo */
}
```

#### Función para Igualar Alturas

El slider incluye una función para igualar la altura de todas las tarjetas, asegurando una apariencia uniforme:

```javascript
function equalizeCardHeights(sliderClass) {
    setTimeout(function() {
        var maxHeight = 0;
        $(sliderClass + ' .slick-slide').each(function() {
            var slideHeight = $(this).height();
            maxHeight = Math.max(maxHeight, slideHeight);
        });
        $(sliderClass + ' .slick-slide').height(maxHeight);
    }, 100);
}
```

Esta función se aplica automáticamente a los sliders de proyectos y novedades, y se vuelve a aplicar cuando cambia el tamaño de la ventana.

## Agregar o Quitar Secciones

### Agregar una Nueva Sección

Para agregar una nueva sección al sitio, siga estos pasos:

1. **Crear el archivo HTML**: Cree un nuevo archivo HTML en la carpeta `/home/david/alaia/sections/`. Por ejemplo, `nueva-seccion.html`.

```html
<!-- Ejemplo de nueva sección -->
<section id="nueva-seccion" class="nueva-seccion">
    <div class="thread-accent thread-right"></div>
    <div class="container">
        <h2>Título de la Nueva Sección</h2>
        <!-- Contenido de la nueva sección -->
        <div class="nueva-seccion-contenido">
            <!-- Añada aquí el contenido específico -->
        </div>
    </div>
    <div class="section-separator wave-separator"></div>
</section>
```

2. **Crear el archivo CSS**: Cree un nuevo archivo CSS en la carpeta `/home/david/alaia/css/sections/`. Por ejemplo, `nueva-seccion.css`.

```css
/* Estilos para la nueva sección */
.nueva-seccion {
    background-color: var(--color-light);
    position: relative;
    padding-top: 6rem;
}

.nueva-seccion-contenido {
    /* Estilos específicos para el contenido */
}
```

3. **Importar el CSS**: Añada la importación del nuevo archivo CSS en `/home/david/alaia/css/main.css`:

```css
/* Sections */
@import 'sections/hero.css';
@import 'sections/about.css';
@import 'sections/video.css';
@import 'sections/projects.css';
@import 'sections/news.css';
@import 'sections/contact.css';
@import 'sections/nueva-seccion.css'; /* Nueva sección */
```

4. **Actualizar el script de carga**: Añada la nueva sección en el array de secciones en `/home/david/alaia/js/loadSections.js`:

```javascript
const sections = [
    { id: 'header-container', file: 'sections/header.html' },
    { id: 'hero-container', file: 'sections/hero.html' },
    { id: 'nosotros-container', file: 'sections/nosotros.html' },
    { id: 'video-container', file: 'sections/video.html' },
    { id: 'proyectos-container', file: 'sections/proyectos.html' },
    { id: 'novedades-container', file: 'sections/novedades.html' },
    { id: 'nueva-seccion-container', file: 'sections/nueva-seccion.html' }, // Nueva sección
    { id: 'contacto-container', file: 'sections/contacto.html' },
    { id: 'footer-container', file: 'sections/footer.html' }
];
```

5. **Añadir el contenedor**: Añada un nuevo contenedor en `/home/david/alaia/home.html`:

```html
<div id="header-container"></div>
<div id="hero-container"></div>
<div id="nosotros-container"></div>
<div id="video-container"></div>
<div id="proyectos-container"></div>
<div id="novedades-container"></div>
<div id="nueva-seccion-container"></div> <!-- Nuevo contenedor -->
<div id="contacto-container"></div>
<div id="footer-container"></div>
```

6. **Actualizar la navegación**: Añada un enlace a la nueva sección en el header (tanto en navegación móvil como en desktop) en `/home/david/alaia/sections/header.html`.

### Quitar una Sección Existente

Para quitar una sección existente, siga estos pasos (usando la sección "Video" como ejemplo):

1. **Eliminar el archivo HTML**: Elimine el archivo de la sección que desea quitar (pero recomendamos hacer una copia de seguridad primero).

2. **Eliminar la referencia en loadSections.js**: Elimine la línea correspondiente en el array de secciones en `/home/david/alaia/js/loadSections.js`.

3. **Eliminar el contenedor**: Elimine el contenedor correspondiente en `/home/david/alaia/home.html`.

4. **Actualizar la navegación**: Si existe un enlace a la sección en el header, elimínelo de `/home/david/alaia/sections/header.html`.

5. **Opcional - Mantener el CSS**: El CSS puede mantenerse en caso de que se quiera volver a utilizar la sección en el futuro.

## Elementos Estructurales Importantes

⚠️ **IMPORTANTE**: Los siguientes elementos son críticos para el funcionamiento y apariencia correcta del sitio. Modifíquelos con precaución:

1. **Estructura de los separadores de sección**: Cada sección debe mantener su separador (wave, zigzag, etc.) para preservar la estética del sitio.

```html
<div class="section-separator wave-separator"></div>
```

2. **Clases de acentos con hilos**: Los elementos decorativos que utilizan la clase `thread-accent` son importantes para mantener la identidad visual:

```html
<div class="thread-accent thread-right"></div>
```

3. **Esquema de colores**: Los colores definidos en variables CSS son fundamentales para la identidad visual. Modifíquelos con precaución:

```css
:root {
    --color-primary: #f7d6e0;
    --color-secondary: #b2dfdb;
    --color-accent: #ffccbc;
    --color-text: #4a4a4a;
    --color-light: #f9f9f9;
    --thread-color-1: #e57373;
    --thread-color-2: #81c784;
    --thread-color-3: #64b5f6;
    --thread-color-4: #ffb74d;
}
```

4. **Script de carga de secciones**: El archivo `/home/david/alaia/js/loadSections.js` es esencial para el funcionamiento del sitio.

5. **Estructura responsiva**: Las clases relacionadas con la adaptación a dispositivos móviles y tablets son críticas para la experiencia del usuario.

## Referencia de Estilos

### Paleta de Colores
- **Color Primario**: `var(--color-primary)` - #f7d6e0 (Rosa claro)
- **Color Secundario**: `var(--color-secondary)` - #b2dfdb (Verde menta)
- **Color de Acento**: `var(--color-accent)` - #ffccbc (Melocotón claro)
- **Color de Texto**: `var(--color-text)` - #4a4a4a (Gris oscuro)
- **Color Claro**: `var(--color-light)` - #f9f9f9 (Casi blanco)
- **Colores de Hilos**:
  - `var(--thread-color-1)` - #e57373 (Rojo claro)
  - `var(--thread-color-2)` - #81c784 (Verde claro)
  - `var(--thread-color-3)` - #64b5f6 (Azul claro)
  - `var(--thread-color-4)` - #ffb74d (Naranja claro)

### Tipografías
- **Títulos**: 'Playfair Display', serif
- **Texto General**: 'Montserrat', sans-serif

### Clases CSS Comunes

- **Botones**: `.btn`, `.btn.animated-underline`
- **Cards**:
  - Proyectos: `.project-card`
  - Novedades: `.news-card`
  - Contacto: `.contact-card`
- **Sliders**:
  - Proyectos: `.projects-slider`
  - Novedades: `.news-slider`
  - Controles: `.prev-arrow`, `.next-arrow`, `.slider-dots`
- **Separadores**:
  - Ola: `.wave-separator`
  - Zigzag: `.zigzag-separator`
  - Curva: `.curve-separator`
  - Patrón de hilos: `.thread-pattern-separator`
- **Accents**:
  - `.thread-accent.thread-right`
  - `.thread-accent.thread-left`

### Iconos
El sitio utiliza la biblioteca Font Awesome para iconos. Puedes añadir iconos con la siguiente sintaxis:

```html
<i class="fas fa-nombre-del-icono"></i>
```

Ejemplos comunes:
- `fa-envelope` - Correo electrónico
- `fa-phone` - Teléfono
- `fa-map-marker-alt` - Ubicación
- `fa-instagram` - Instagram
- `fa-facebook` - Facebook
- `fa-youtube` - YouTube
- `fa-arrow-right` - Flecha derecha
- `fa-arrow-left` - Flecha izquierda
