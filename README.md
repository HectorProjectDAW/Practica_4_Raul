# Práctica TEMA 4 - JavaScript y jQuery

## CV Interactivo - Héctor Jarque García

---

## 📋 Descripción

Proyecto de CV personal con interactividad completa implementada mediante JavaScript y jQuery. Incluye galería modal, validación de formularios, animaciones y múltiples efectos interactivos.

---

## Funcionalidades Implementadas

### Componente Principal: Galería Modal Interactiva

- Click en cualquier imagen para ver en tamaño completo
- Navegación entre imágenes (Anterior/Siguiente)
- Cierre con X, ESC o click fuera
- Animaciones suaves de entrada/salida
- Diseño responsive

### Sistema de Validación de Formulario

- Validación en tiempo real
- Feedback visual inmediato (bordes verde/rojo)
- Mensajes de error específicos
- Validación de formato de email
- Contador de caracteres (límite 500)
- Mensaje de éxito tras envío

### Eventos Implementados (18 total):

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

### Animaciones (8 tipos):

- fadeIn/fadeOut (modal, botones, tooltips)
- slideToggle (acordeón de secciones)
- animate (barras de progreso, scroll)
- CSS transforms (hover en imágenes y iconos)
- Fade in desde abajo (secciones al hacer scroll)

### Manipulación del DOM:

- Creación dinámica de elementos
- Mostrar/ocultar con efectos
- Modificación de contenido
- Cambio de estilos CSS
- Añadir/eliminar clases
- Inserción/eliminación de mensajes

---

## Características Responsive

Todas las funcionalidades están optimizadas para:

- Desktop (> 768px)
- Tablet (768px - 480px)
- Móvil (< 480px)

---

## Accesibilidad

- Focus visible en elementos interactivos
- Tooltips informativos
- Contraste adecuado
- Tamaños táctiles apropiados (mínimo 45x45px)
- Navegación por teclado (ESC para cerrar)

---

## Pruebas a realizar para que te sea más sencillo corregir

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

| Requisito            | Requerido | Implementado  |
| -------------------- | --------- | ------------- |
| Manipulación DOM     | 3         | 6 tipos       |
| Animaciones          | 2         | 8             |
| Componente principal | 1         | Galería modal |
| jQuery               | Sí        | v3.7.1        |
| JavaScript externo   | Sí        | script.js     |
| Usabilidad           | Sí        | Implementada  |

---

## 📝 Notas Adicionales

- El archivo `javascript-memoria.html` contiene la documentación completa de la práctica
- Todos los eventos y funciones del script.js están comentados

---

## 👨‍💻 Autor

**Héctor Jarque García**  
Práctica TEMA 4
Febrero 2026

---

## 📄 Archivos Entregados

1. index.html (con scripts añadidos)
2. contacto.html (con validación interactiva)
3. formacion.html (actualizado)
4. javascript-memoria.html (documentación completa)
5. js/script.js (todo el código JavaScript/jQuery)
6. css/interactive-styles.css (estilos para elementos interactivos)
7. css/styles.css (los estilos de anteriores entregas)
8. audio/musica.mp3 (el audio de la anterior entrega)
9. README.md (este archivo)

**Total: 9 archivos nuevos/modificados**
