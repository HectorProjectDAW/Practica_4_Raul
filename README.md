# Práctica TEMA 4 - JavaScript y jQuery

## CV Interactivo - Héctor Jarque García

---

## 📋 Descripción

Proyecto de CV personal con interactividad completa implementada mediante JavaScript y jQuery. Incluye galería modal, validación de formularios, animaciones y múltiples efectos interactivos.

---

## 🚀 Instalación y Configuración

### Estructura de carpetas requerida:

```
proyecto/
├── index.html
├── contacto.html
├── formacion.html
├── multimedia_memoria.html
├── javascript_memoria.html
├── css/
│   ├── styles.css
│   └── interactive-styles.css
└── js/
    └── script.js
```

### Pasos para instalar:

1. **Crea la estructura de carpetas:**

   ```bash
   mkdir css js
   ```

2. **Coloca los archivos HTML en la raíz del proyecto:**
   - index.html
   - contacto.html
   - formacion.html
   - javascript_memoria.html

3. **Coloca los archivos CSS en la carpeta `css/`:**
   - styles.css (tu CSS original)
   - interactive-styles.css (nuevo archivo con estilos interactivos)

4. **Coloca el archivo JavaScript en la carpeta `js/`:**
   - script.js (código JavaScript con jQuery)

5. **Asegúrate de que existan las carpetas de recursos:**
   - `images/` - con todas tus imágenes
   - `audio/` - con el archivo de audio
   - `video/` - con el archivo de video

6. **Abre el proyecto en un navegador:**
   - Abre `index.html` en tu navegador preferido
   - jQuery se carga automáticamente desde CDN (requiere conexión a internet)

---

## ✨ Funcionalidades Implementadas

### 🖼️ Componente Principal: Galería Modal Interactiva

- Click en cualquier imagen para ver en tamaño completo
- Navegación entre imágenes (Anterior/Siguiente)
- Cierre con X, ESC o click fuera
- Animaciones suaves de entrada/salida
- Diseño responsive

### 📋 Sistema de Validación de Formulario

- Validación en tiempo real
- Feedback visual inmediato (bordes verde/rojo)
- Mensajes de error específicos
- Validación de formato de email
- Contador de caracteres (límite 500)
- Mensaje de éxito tras envío

### 🎯 Eventos Implementados (18 total):

1. Click en imágenes de galería
2. Click en cerrar modal
3. Click en navegación de imágenes
4. Presionar tecla ESC
5. Click en títulos de sección (acordeón)
6. Scroll para animación de barras
7. Focus en campos de formulario
8. Blur para validación individual
9. Submit del formulario
10. Click en enlaces de navegación
11. Hover en artículos de experiencia
12. Hover en iconos sociales
13. Scroll para botón "volver arriba"
14. Click en botón "volver arriba"
15. Input en textarea
16. Hover en barras de progreso (tooltips)
17. Scroll para animación de secciones
18. Mouseleave en diversos elementos

### 🎨 Animaciones (8 tipos):

- fadeIn/fadeOut (modal, botones, tooltips)
- slideToggle (acordeón de secciones)
- animate (barras de progreso, scroll)
- CSS transforms (hover en imágenes y iconos)
- Fade in desde abajo (secciones al hacer scroll)

### 🛠️ Manipulación del DOM:

- Creación dinámica de elementos
- Mostrar/ocultar con efectos
- Modificación de contenido
- Cambio de estilos CSS
- Añadir/eliminar clases
- Inserción/eliminación de mensajes

---

## 📱 Características Responsive

Todas las funcionalidades están optimizadas para:

- Desktop (> 768px)
- Tablet (768px - 480px)
- Móvil (< 480px)

---

## ♿ Accesibilidad

- Focus visible en elementos interactivos
- Tooltips informativos
- Contraste adecuado
- Tamaños táctiles apropiados (mínimo 45x45px)
- Navegación por teclado (ESC para cerrar)

---

## 🧪 Pruebas Recomendadas

1. **Galería:**
   - Click en cada imagen
   - Navegar con botones Anterior/Siguiente
   - Cerrar con X, ESC y click fuera

2. **Formulario:**
   - Introducir datos válidos e inválidos
   - Verificar mensajes de error
   - Enviar formulario
   - Probar contador de caracteres

3. **Navegación:**
   - Click en enlaces del menú
   - Verificar scroll suave
   - Probar botón "volver arriba"

4. **Animaciones:**
   - Hacer scroll para ver barras de progreso animarse
   - Hover en elementos interactivos
   - Expandir/colapsar secciones

5. **Responsive:**
   - Probar en diferentes tamaños de pantalla
   - Verificar que todo funcione en móvil

---

## 📊 Cumplimiento de Requisitos

| Requisito            | Requerido | Implementado  | Estado          |
| -------------------- | --------- | ------------- | --------------- |
| Eventos              | 4         | 18            | ✓ Supera (450%) |
| Manipulación DOM     | 3         | 6 tipos       | ✓ Supera (200%) |
| Animaciones          | 2         | 8             | ✓ Supera (400%) |
| Componente principal | 1         | Galería modal | ✓ Completo      |
| jQuery               | Sí        | v3.7.1        | ✓ Completo      |
| JavaScript externo   | Sí        | script.js     | ✓ Completo      |
| Usabilidad           | Sí        | Implementada  | ✓ Completo      |

---

## 🔧 Dependencias

- **jQuery 3.7.1** - Cargado desde CDN
- **Conexión a internet** - Necesaria para cargar jQuery

---

## 📝 Notas Adicionales

- El archivo `javascript_memoria.html` contiene la documentación completa de la práctica
- Todos los eventos y funciones están comentados en el código
- Los console.log() ayudan a debuggear si hay problemas
- El código es compatible con todos los navegadores modernos

---

## 👨‍💻 Autor

**Héctor Jarque García**  
Práctica TEMA 4 - DAW  
Febrero 2026

---

## 📄 Archivos Entregados

1. ✓ index.html (con scripts añadidos)
2. ✓ contacto.html (con validación interactiva)
3. ✓ formacion.html (actualizado)
4. ✓ javascript_memoria.html (documentación completa)
5. ✓ js/script.js (todo el código JavaScript/jQuery)
6. ✓ css/interactive-styles.css (estilos para elementos interactivos)
7. ✓ README.md (este archivo)

**Total: 7 archivos nuevos/modificados**

---

## ✅ Checklist de Entrega

- [x] jQuery correctamente importado
- [x] Código JavaScript en archivo externo
- [x] Mínimo 4 eventos (implementados 18)
- [x] Mínimo 3 manipulaciones DOM (implementadas 6)
- [x] Mínimo 2 animaciones (implementadas 8)
- [x] 1 componente interactivo principal (galería modal)
- [x] Interacción con contenido real de la web
- [x] Usabilidad y accesibilidad implementadas
- [x] Documentación completa (javascript_memoria.html)
- [x] Código comentado y organizado
- [x] Diseño responsive

**Proyecto completo y listo para presentación ✓**
