# 🕯️ Creaciones de Lujo - Velas y Jabones Artesanales

Landing page moderna y profesional construida con **Astro** y **Tailwind CSS**.

## 🚀 Instalación Rápida

```bash
# 1. Crear el proyecto Astro
npm create astro@latest creaciones-de-lujo

# Durante la instalación, selecciona:
# - Template: Empty
# - TypeScript: No (o Sí, como prefieras)
# - Install dependencies: Yes

# 2. Entrar al directorio
cd creaciones-de-lujo

# 3. Instalar Tailwind CSS
npx astro add tailwind
# Presiona 'y' para confirmar todas las opciones

# 4. Instalar dependencias adicionales (si es necesario)
npm install

# 5. Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`

## 📁 Estructura de Archivos

Crea esta estructura en tu proyecto:

```
creaciones-de-lujo/
├── src/
│   ├── components/
│   │   ├── Header.astro          ✅ Navegación con menú responsive
│   │   ├── Footer.astro          ✅ Footer con redes sociales
│   │   ├── Hero.astro            ✅ Hero section animado
│   │   └── ProductCard.astro     ✅ Tarjeta de producto con WhatsApp
│   ├── layouts/
│   │   └── Layout.astro          ✅ Layout base con SEO
│   ├── pages/
│   │   ├── index.astro           ✅ Página de inicio
│   │   ├── productos.astro       ✅ Catálogo con filtros
│   │   ├── nosotros.astro        ✅ Sobre la empresa
│   │   └── contacto.astro        ✅ Formulario de contacto
│   └── data/
│       └── products.js           ✅ 25 productos de ejemplo
├── public/
│   └── images/
│       └── productos/
│           ├── vela-1.jpg        ⚠️ REEMPLAZA con tus imágenes
│           ├── vela-2.jpg
│           └── ... (25 imágenes total)
├── astro.config.mjs              ✅ Ya creado
├── tailwind.config.mjs           ✅ Ya creado
└── package.json
```

## 🎨 Personalización Necesaria

### 1. Reemplazar Imágenes
Coloca tus 25 fotos en `public/images/productos/` con estos nombres:
- `vela-1.jpg` a `vela-10.jpg` (velas)
- `jabon-1.jpg` a `jabon-10.jpg` (jabones)
- `set-1.jpg` a `set-3.jpg` (sets)
- `vela-premium.jpg`
- `set-completo.jpg`

### 2. Actualizar Enlaces de Redes Sociales

Busca y reemplaza en TODOS los archivos:
- `593XXXXXXXXX` → Tu número de WhatsApp (con código de país, sin +)
- `https://instagram.com/creacionesdelujo` → Tu Instagram real
- `https://facebook.com/creacionesdelujo` → Tu Facebook real

**Archivos a actualizar:**
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ProductCard.astro`
- `src/pages/index.astro`
- `src/pages/contacto.astro`

### 3. Actualizar Datos de Productos

Edita `src/data/products.js` con:
- Nombres reales de tus productos
- Precios correctos
- Descripciones personalizadas
- Nombres de archivos de imágenes correctos

### 4. Personalizar Textos

Revisa y personaliza los textos en:
- `src/pages/index.astro` - Testimonios, estadísticas
- `src/pages/nosotros.astro` - Historia de tu marca
- `src/pages/contacto.astro` - Información de contacto
- `src/components/Footer.astro` - Email, teléfono, dirección

## 🎯 Características Implementadas

✅ **Diseño Moderno**
- Paleta de colores dorado/beige (lujo)
- Animaciones suaves con Tailwind
- Responsive 100% (móvil, tablet, desktop)

✅ **Funcionalidades**
- Navegación con menú hamburguesa en móvil
- Hero section impactante con imágenes
- Galería de 25 productos con filtros por categoría
- Tarjetas de producto con botón de WhatsApp
- Formulario de contacto que redirige a WhatsApp
- Sección de testimonios
- FAQ (preguntas frecuentes)
- Enlaces a redes sociales en header y footer

✅ **SEO Optimizado**
- Meta tags configurados
- Open Graph para redes sociales
- URLs limpias y semánticas
- Estructura HTML correcta

## 🛠️ Comandos Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview

# Verificar el proyecto
npm run astro check
```

## 📦 Despliegue

### Netlify (Recomendado - Gratis)

1. Sube tu código a GitHub
2. Entra a [Netlify](https://www.netlify.com/)
3. Click en "Add new site" → "Import an existing project"
4. Conecta tu repositorio de GitHub
5. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Vercel (Alternativa - Gratis)

1. Sube tu código a GitHub
2. Entra a [Vercel](https://vercel.com/)
3. Import Project → Selecciona tu repositorio
4. Vercel detecta Astro automáticamente
5. Deploy!

## 🎨 Colores de la Marca

```css
Primario (Dorado):    #D4AF37
Secundario (Beige):   #F5F5DC
Acento (Marrón):      #8B7355
Texto Oscuro:         #333333
```

Estos colores están configurados en `tailwind.config.mjs` y puedes usarlos así:
```html
<div class="bg-primary text-white">Dorado</div>
<div class="bg-secondary">Beige</div>
<div class="bg-accent">Marrón</div>
<div class="text-dark">Texto oscuro</div>
```

## 📱 WhatsApp Integration

El botón de WhatsApp en cada producto envía un mensaje pre-formateado:
```
Hola! Estoy interesado en: [Nombre del Producto] - $[Precio]
```

Puedes personalizar este mensaje en `src/components/ProductCard.astro`

## 🔧 Solución de Problemas

**Error: "Cannot find module '@astrojs/tailwind'"**
```bash
npx astro add tailwind
```

**Las imágenes no se muestran**
- Verifica que estén en `public/images/productos/`
- Los nombres deben coincidir EXACTAMENTE con los del archivo `products.js`
- No uses espacios ni caracteres especiales en nombres de archivo

**El menú móvil no funciona**
- Asegúrate de que el JavaScript en `Header.astro` esté presente
- Verifica la consola del navegador por errores

## 📧 Soporte

Si necesitas ayuda:
1. Revisa la [documentación de Astro](https://docs.astro.build/)
2. Verifica la [documentación de Tailwind](https://tailwindcss.com/docs)
3. Busca en [Stack Overflow](https://stackoverflow.com/)

## 📄 Licencia

Este proyecto es para uso de **Creaciones de Lujo**. Todos los derechos reservados.

---

**Creado con ❤️ usando Astro + Tailwind CSS**

🚀 ¡Listo para lanzar tu sitio web!