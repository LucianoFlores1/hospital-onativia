// Fuente: investigacion/inventario-contenido.md y notas de Prensa del Gobierno de Salta.
// Los responsables salen del listado de Autoridades del sitio actual (sin fecha): a confirmar.

export type Categoria = 'Consultas' | 'Cirugía' | 'Estudios' | 'Tratamientos' | 'Apoyo';

export interface Servicio {
  slug: string;
  nombre: string;
  categoria: Categoria;
  resumen: string;
  claves: string;
  referencia?: string;
  foto?: string;
  responsables?: { nombre: string; cargo: string }[];
}

export const servicios: Servicio[] = [
  { slug: 'anatomia-patologica', nombre: 'Anatomía Patológica y Biología Molecular', categoria: 'Estudios', resumen: 'Biopsias, citologías y marcadores moleculares en tumores endocrinos.', claves: 'biopsia puncion', responsables: [{ nombre: 'Dr. Marcelo Monteros Alvi', cargo: 'Programa de Anatomía Patológica y Genética' }] },
  { slug: 'cardiologia', nombre: 'Cardiología', categoria: 'Consultas', resumen: 'Consultorios y Unidad de Monitoreo Intensivo.', claves: 'corazon presion electrocardiograma', responsables: [{ nombre: 'Dr. Fernando Gómez', cargo: 'Sector Cardiología y U.M.I.' }] },
  { slug: 'cirugia-bariatrica', nombre: 'Cirugía bariátrica', categoria: 'Cirugía', resumen: 'Gastrectomía vertical y bypass gástrico, con equipo interdisciplinario.', claves: 'obesidad manga bypass peso' },
  { slug: 'cirugia-tiroides', nombre: 'Cirugía de tiroides', categoria: 'Cirugía', resumen: 'Cirugía de tiroides, paratiroides y suprarrenales. Referencia nacional en cáncer de tiroides.', claves: 'tiroides bocio nodulo cancer endocrina', referencia: 'Único hospital público del país con atención integral del cáncer de tiroides', foto: 'cirugia-tiroides', responsables: [{ nombre: 'Dr. Leopoldo Van Cauwlaert', cargo: 'Sector Cirugía Endocrina' }] },
  { slug: 'cirugia-general', nombre: 'Cirugía general y anestesia', categoria: 'Cirugía', resumen: 'Cirugías programadas.', claves: 'operacion quirofano', foto: 'quirofano', responsables: [{ nombre: 'Dr. Nicolás Salmoral', cargo: 'Sector Cirugía General y Anestesia' }] },
  { slug: 'cirugia-percutanea', nombre: 'Cirugía Percutánea e Imágenes', categoria: 'Estudios', resumen: 'Ecografías y procedimientos guiados por imágenes.', claves: 'ecografia imagenes puncion', responsables: [{ nombre: 'Dra. Gilda M. Richter', cargo: 'Sector Cirugía Percutánea e Imágenes' }] },
  { slug: 'cirugia-vascular', nombre: 'Cirugía vascular y traumatológica', categoria: 'Cirugía', resumen: 'Patología vascular y traumatológica.', claves: 'venas huesos', responsables: [{ nombre: 'Dr. Matías Nallar', cargo: 'Sector Vascular y Traumatológica' }] },
  { slug: 'clinica-medica', nombre: 'Clínica Médica', categoria: 'Consultas', resumen: 'Atención clínica de adultos, guardia y sala de internación.', claves: 'medico clinico guardia internacion', responsables: [{ nombre: 'Dr. Fernando Núñez', cargo: 'Programa de Clínica Médica' }] },
  { slug: 'cooperadora', nombre: 'Cooperadora Asistencial', categoria: 'Apoyo', resumen: 'Medicamentos, estudios y traslados para pacientes sin recursos.', claves: 'ayuda donar' },
  { slug: 'diabetes', nombre: 'Diabetes', categoria: 'Consultas', resumen: 'Diagnóstico, control, educación y prevención del pie diabético.', claves: 'azucar insulina glucemia pie', referencia: 'Centro de referencia para adultos', foto: 'diabetes', responsables: [{ nombre: 'Dra. Florencia Soto', cargo: 'Programa de Diabetes y Nutrición Clínica' }, { nombre: 'Dra. Miriam Díaz Heredia', cargo: 'Sector Diabetes' }] },
  { slug: 'endocrinologia', nombre: 'Endocrinología', categoria: 'Consultas', resumen: 'Tiroides, hipófisis y suprarrenales. Más de 13.000 consultas en 2025.', claves: 'hormonas tiroides hipotiroidismo', referencia: 'Centro de referencia para adultos', foto: 'consulta', responsables: [{ nombre: 'Dra. Valeria Cerioni', cargo: 'Programa de Endocrinología' }, { nombre: 'Dra. Irene Torrez', cargo: 'Sector Tiroides' }] },
  { slug: 'enfermeria', nombre: 'Enfermería', categoria: 'Apoyo', resumen: 'Cuidados en todos los turnos y sectores.', claves: 'enfermera', responsables: [{ nombre: 'Lic. Olber Yapura', cargo: 'Programa de Enfermería' }] },
  { slug: 'farmacia', nombre: 'Farmacia y Esterilización', categoria: 'Apoyo', resumen: 'Medicamentos para pacientes del hospital.', claves: 'remedios medicamentos', responsables: [{ nombre: 'Farm. Irupé Kolling', cargo: 'Programa Farmacia y Esterilización' }] },
  { slug: 'fonoaudiologia', nombre: 'Fonoaudiología', categoria: 'Tratamientos', resumen: 'Voz, deglución y audición.', claves: 'voz habla audicion' },
  { slug: 'genetica', nombre: 'Genética Clínica y Citogenética', categoria: 'Estudios', resumen: 'Asesoramiento a familias con riesgo genético.', claves: 'cariotipo', responsables: [{ nombre: 'Lic. Carolina Martínez Taibo', cargo: 'Sector Genética Clínica y Citogenética' }] },
  { slug: 'hemodialisis', nombre: 'Nefrología y Hemodiálisis', categoria: 'Tratamientos', resumen: '184 pacientes en hemodiálisis con 32 equipos, en tres turnos diarios. Diálisis peritoneal.', claves: 'dialisis riñon renal peritoneal', referencia: 'Único centro de hemodiálisis en un hospital público de Salta', foto: 'hemodialisis', responsables: [{ nombre: 'Dr. Raúl Pidoux', cargo: 'Programa de Nefrología y Hemodiálisis' }, { nombre: 'Dr. Jorge Zapata', cargo: 'Sector Hemodiálisis' }, { nombre: 'Dr. Antonio Moya', cargo: 'Sector Nefrología' }, { nombre: 'Lic. Susana Ríos', cargo: 'Jefa de Enfermería de Nefrología' }] },
  { slug: 'hemoterapia', nombre: 'Hemoterapia', categoria: 'Tratamientos', resumen: 'Transfusiones y donación de sangre.', claves: 'sangre donar' },
  { slug: 'hepatitis', nombre: 'Hepatitis Virales (UNHEVI)', categoria: 'Consultas', resumen: 'Diagnóstico y tratamiento de hepatitis virales.', claves: 'higado hepatologia' },
  { slug: 'kinesiologia', nombre: 'Kinesiología', categoria: 'Tratamientos', resumen: 'Rehabilitación y fisioterapia, con gimnasio en el Centro Ambulatorio.', claves: 'rehabilitacion gimnasio', responsables: [{ nombre: 'Lic. Maida Nallim', cargo: 'Sector Kinesioterapia' }] },
  { slug: 'laboratorio', nombre: 'Laboratorio Bioquímico', categoria: 'Estudios', resumen: 'Análisis clínicos y hormonales. Extracciones en el Centro Ambulatorio.', claves: 'analisis sangre extraccion hormonas', responsables: [{ nombre: 'Dra. Mariela I. Nordera', cargo: 'Programa Laboratorio Bioquímico' }] },
  { slug: 'medicina-nuclear', nombre: 'Medicina Nuclear', categoria: 'Estudios', resumen: 'Gammacámara de dos cabezales, captación de yodo y tratamiento con yodo radiactivo.', claves: 'centellograma yodo radiactivo gammagrafia', referencia: 'Único servicio del NOA en un hospital público', responsables: [{ nombre: 'Dra. Natalia Gonza', cargo: 'Programa de Medicina Nuclear' }] },
  { slug: 'nutricion', nombre: 'Nutrición', categoria: 'Consultas', resumen: 'Obesidad, alimentación y nutrición clínica.', claves: 'dieta peso obesidad', responsables: [{ nombre: 'Dra. Alina Nazha', cargo: 'Sector Nutrición' }, { nombre: 'Lic. Virginia Pamparana', cargo: 'Programa de Nutrición' }] },
  { slug: 'odontologia', nombre: 'Odontología', categoria: 'Consultas', resumen: 'Atención odontológica.', claves: 'dientes dentista' },
  { slug: 'patologia-mamaria', nombre: 'Patología mamaria y ginecológica', categoria: 'Cirugía', resumen: 'Diagnóstico y cirugía de mama y ginecológica.', claves: 'mama', responsables: [{ nombre: 'Dra. Julia Salinas', cargo: 'Sector Patología Mamaria y Ginecológica' }] },
  { slug: 'salud-mental', nombre: 'Salud Mental', categoria: 'Consultas', resumen: 'Psicología y acompañamiento de pacientes.', claves: 'psicologia', responsables: [{ nombre: 'Lic. Gabriela Makluff', cargo: 'Sector Salud Mental' }] },
  { slug: 'servicio-social', nombre: 'Servicio Social', categoria: 'Apoyo', resumen: 'Orientación y ayuda para pacientes y familias.', claves: 'tramites ayuda', responsables: [{ nombre: 'Lic. Alicia B. Cuevas', cargo: 'Sector Servicio Social' }] },
  { slug: 'trasplante-renal', nombre: 'Trasplante renal', categoria: 'Cirugía', resumen: '38 trasplantes en 2023, para pacientes con o sin obra social.', claves: 'riñon trasplante', referencia: 'Unidad de Trasplante Renal desde 2010', foto: 'trasplante', responsables: [{ nombre: 'Dr. Ramiro Ocaña', cargo: 'Sector Urología y Trasplante' }] },
  { slug: 'uci', nombre: 'Unidad de Cuidados Intensivos', categoria: 'Tratamientos', resumen: 'Atención de pacientes críticos.', claves: 'terapia intensiva', responsables: [{ nombre: 'Dr. Oscar Toma', cargo: 'Sector Unidad de Cuidados Intensivos' }] },
  { slug: 'urologia', nombre: 'Urología', categoria: 'Cirugía', resumen: 'Patología urológica y trasplante.', claves: 'prostata riñon', responsables: [{ nombre: 'Dr. Ramiro Ocaña', cargo: 'Sector Urología y Trasplante' }] },
  { slug: 'vacunatorio', nombre: 'Vacunatorio', categoria: 'Apoyo', resumen: 'Vacunación en el Centro Ambulatorio.', claves: 'vacuna' },
];

export const destacados = ['hemodialisis', 'cirugia-tiroides', 'trasplante-renal', 'diabetes', 'endocrinologia', 'medicina-nuclear'];

export const contacto = {
  direccion: 'Paz Chaín 30, Salta Capital',
  turnos: '148',
  whatsapp: '387 414-5225',
  whatsappUrl: 'https://wa.me/5493874145225',
  conmutador: '0387 431-5042',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Hospital+Arturo+O%C3%B1ativia+Salta',
};
