## Autoría propia/originalidad
- Tu trabajo debe ser **personal y original**.
- Evita cualquier forma de **copia o plagio**, ya sea total o parcial de otros trabajos de Coderhouse o de la web.
- En caso de **plagio total**, el trabajo no será corregido ni aprobado.
- Si hay una **copia parcial**, se te pedirá rehacer la parte afectada.

## Entrega con permisos de acceso
- Entrega tu trabajo con **permisos de comentador** para que el docente pueda acceder y revisar.
- Si se entrega un enlace privado o vacío, se solicitará al estudiante que entregue el trabajo con los permisos adecuados.

## Formato solicitado
- El trabajo debe presentarse en el **formato solicitado** (Google Slides, Docs, Figma, Adobe XD, etc.).
- Si el formato no es el adecuado, se pedirá al estudiante que lo entregue en el formato establecido para su corrección.

## Convenciones
- Respeta todas las **convenciones propuestas** consistentemente en todas las instancias.
- Mantiene coherencia con las declaraciones del archivo README.
- Alinea con las convenciones del ecosistema de React.
- Asegura un **linting consistente** que favorezca la legibilidad en todo el proyecto.
- Evita dejar comentarios, debuggers, o TODO’s sin atender.
- No deja código inutilizado, no referenciado o sin sentido.

## Container patterns
- Agrupa múltiples props de manera entendible y consistente.
- Mantiene un **naming coherente** a lo largo de la aplicación.
- Evita agregar fetches innecesarios en componentes presentacionales.

## Navegabilidad
- Sigue las convenciones y los enrutamientos establecidos.
- Implementa patrones adicionales de navegación cuando es necesario.
- Utiliza navegaciones programáticas y NavLinks para mejorar la UX, marcando claramente la ruta activa.
- Evita re-ejecutar llamados si el usuario navega a la misma ruta que ya está activa.
- Mantiene convenciones de naming y separa correctamente el key/id de categoría de su descripción internacionalizada.

## Catálogo y detalle
- Implementa el filtrado por categorías usando `useParams(:catId)` y `useEffect` para detectar cambios de ruta y re-ejecutar tareas asincrónicas.
- Separa correctamente las responsabilidades.
- Muestra toda la información solicitada de manera efectiva.
- Utiliza loaders y mantiene la simplicidad, evitando sobre-optimizaciones.

## CartProvider / CartContext
- Mantiene claras las responsabilidades del contexto.
- Evita llevar lógicas de UI al context.
- No crea subestados innecesarios para totalizaciones o resúmenes.
- Permite la creación de variaciones de sub-funcionalidades, añadiendo funciones simples que mantienen la coherencia general.

## CartWidget/Cart
- Evita lógicas de cálculo de cantidades dentro del widget.
- Separa el widget del rendering del icono de manera efectiva.
- Desarrolla un flujo claro y reactivo para la deshabilitación de campos.
- Valida correctamente los inputs y sus tipos de datos.
- No utiliza alertas o recursos nativos del navegador, manteniendo el feedback dentro del componente.
- Deja el carrito y otros componentes en un estado consistente después de realizar la compra.
