# Auditoría del sitio actual

Sitio: https://www.hospitalonativia.gob.ar
Relevado: 19/11/2026, sobre el HTML que entrega el servidor (25 páginas: inicio, institucionales, normativas y las 4 notas visibles).
Plataforma: WordPress 6.6.12, tema ColorMag (ThemeGrill), servidor nginx. Texto completo de cada página en `sitio-actual/`.

## 1. Contenido roto (crítico)

Los plugins MaxButtons, Huge-IT Video Gallery y BestWebSoft Contact Form ya no están activos. Los visitantes ven los shortcodes como texto.

| Página | Qué se ve | Consecuencia |
|---|---|---|
| Servicios Asistenciales y de Soporte (`?page_id=970`) | ~30 `[maxbutton name=»Cirugía»]`, etc. | No se puede entrar a ningún servicio |
| Gerencias (`?page_id=968`) | 6 `[maxbutton id=»1″]` y nada más | Página vacía |
| Comités y Comisiones (`?page_id=972`) | 2 párrafos + 7 botones rotos | No figura ningún comité |
| Contacto (`?page_id=60`) | `[bestwebsoft_contact_form]` | No hay formulario |
| Carta de Servicios (`?page_id=1388`) | `[maxbutton id=»67″]` | El PDF no se puede descargar |
| Videos (`?page_id=384`) | `[huge_it_videogallery id=»1″]` | Sección vacía |
| Notas "Agua segura" y "Prevención Covid-19" | botón de descarga roto | Prometen un archivo que no está |

## 2. Enlaces y navegación

- Menús "Acerca del Hospital" y "Áreas Institucionales" apuntan a `http://http://www.hospitalonativia.gob.ar/#` (protocolo duplicado).
- Desde Historia, el enlace al decreto-ley 191/56 abre `?page_id=1096&preview=true` (vista previa de borrador).
- La portada solo dice "¡Bienvenidos al Sitio Web del Hospital Dr. Arturo Oñativia!" y la barra lateral.
- No hay buscador interno. Todas las URLs son `?page_id=N`.
- Las páginas de normativa (leyes y decretos) no están en el menú; solo se llega desde Historia.
- El único dato de turnos es "Para solicitar turnos: 148" en la barra lateral.

## 3. Información desactualizada

- Última publicación: 15/05/2020. Las 4 notas visibles son de 2017, 2019 y 2020, todas en "Sin categoría". Autora de todas: Soledad Marisol Rojas.
- Capacitación y Docencia anuncia "Ingreso a Residencias 2020".
- Historia: la UCT-H fue acreditada "en enero de este año" (se refiere a 2022).
- Autoridades: sin fecha de actualización. "Sector Anatomía Patológica y Biología Molecular" y "Sector Mantenimiento y Transporte" sin responsable.
- Correos de Gmail en sitio .gob.ar: `comunicacion.honativia@gmail.com`, `rrhh.honativia@gmail.com`.
- La nota de Capacitación dirige las solicitudes al "Dr. Edgardo León de la Fuente": verificar si sigue en el cargo.
- Facebook figura como texto plano, sin enlace.

## 4. Errores de redacción

| Dónde | Dice | Corrección |
|---|---|---|
| Barra lateral (las 25 páginas) | Lo mas seguro… | Lo más seguro… |
| Nota "Agua segura" | para decargar | para descargar |
| Contacto | Visite nuestra pagina de facebook | página de Facebook |
| Contacto | Ud. puede comunicarse | Registro: definir tú/vos/usted y unificar |
| Capacitación | Comisión de Asesora de Docencia | Comisión Asesora de Docencia |
| Capacitación | Lunes a Viernes de 7 a 16 hs. Lunes a Viernes | Lunes a viernes de 7 a 16 h |
| Autoridades | Coordinacion General | Coordinación General |
| Historia | CREACION UCT-H | Creación de la UCT-H |
| Historia | Dr Arturo Oñativia / Min de Salud | Dr. / Ministerio de Salud |
| Historia | párrafo UCT-H sin punto final | agregar punto |
| Menú y notas | POLÍTICA DE CALIDAD, ENFERMEDAD POR DÉFICIT DE IODO | mayúscula inicial |
| Nota iodo | "Iodo" y "yodo" mezclados | unificar en "yodo" (RAE) |
| Archivo de imagen | `oñaticia-209x300.jpg` | nombre mal escrito (no visible, pero indica descuido) |

## 5. Información que falta

Lo que un paciente busca primero y no encuentra:

- Horarios de atención (Admisión, consultorios, extracciones, vacunatorio).
- Guardia: existe "Sector Guardia y Sala" en Autoridades, pero no hay info de atención espontánea.
- Cómo llegar: mapa, colectivos, estacionamiento, ingresos (principal y Centro Ambulatorio).
- Qué llevar a un turno.
- Preparación para estudios (laboratorio, medicina nuclear).
- Retiro de resultados.
- Internación y visitas.
- Cobertura: qué se atiende sin obra social, qué obras sociales se reciben.
- Derechos del paciente (Ley 26.529) y reclamos con seguimiento (hoy: buzón en Hall Central y libro en Gerencia).
- Una página por servicio: qué trata, profesionales, ubicación, cómo pedir turno.
- Cómo donar a la Cooperadora.
- Investigación: publicaciones y proyectos de la UCT-H y el convenio con CONICET.
- Accesibilidad del edificio.

## 6. Técnica, accesibilidad, seguridad

- 13 imágenes sin texto alternativo: foto antigua del hospital y otra en Historia, 2 en Biografía, 3 certificados en Calidad, Cooperadora, imágenes de las 4 notas y una de lavado de manos.
- Contenido mixto: Historia, Biografía, Calidad y Cooperadora cargan imágenes por `http://` dentro de `https://`.
- Sin `meta description` ni Open Graph en ninguna página.
- Versión de WordPress expuesta en el `generator` y `xmlrpc.php` publicado.
- Pie con "Tema: ColorMag por ThemeGrill. Funciona con WordPress."
- La imagen de la nota sobre iodo tiene en el nombre de archivo el nombre de un fotógrafo (`397503-manuel-seijo-martinez-…`): verificar derechos de uso.
- `http://` redirige correctamente a `https://` (301).
