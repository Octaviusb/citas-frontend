// Datos reales del centro médico
export const mockServices = [
  {
    id: 1,
    nombre: 'Consulta Medicina General',
    descripcion: 'Evaluación médica integral con médico general certificado',
    precio: 85000,
    duracion: 45,
    categoria: 'consulta'
  },
  {
    id: 2,
    nombre: 'Control Médico',
    descripcion: 'Seguimiento y control de tratamientos en curso',
    precio: 65000,
    duracion: 30,
    categoria: 'consulta'
  },
  {
    id: 3,
    nombre: 'Fisioterapia',
    descripcion: 'Sesión de rehabilitación con fisioterapeuta especializado',
    precio: 70000,
    duracion: 60,
    categoria: 'tratamiento'
  },
  {
    id: 4,
    nombre: 'Valoración Especializada',
    descripcion: 'Evaluación médica especializada según patología',
    precio: 120000,
    duracion: 60,
    categoria: 'evaluacion'
  },
  {
    id: 5,
    nombre: 'Terapia Respiratoria',
    descripcion: 'Tratamiento especializado para afecciones respiratorias',
    precio: 80000,
    duracion: 45,
    categoria: 'tratamiento'
  },
  {
    id: 6,
    nombre: 'Consulta Cardiología',
    descripcion: 'Evaluación cardiovascular con cardiólogo certificado',
    precio: 150000,
    duracion: 45,
    categoria: 'consulta'
  }
];

export const mockAppointments = [
  {
    id: 1,
    cliente_nombre: 'María González',
    cliente_telefono: '3201234567',
    servicio_nombre: 'Consulta Medicina General',
    profesional_nombre: 'Dr. Carlos Mendoza',
    fecha_hora: '2024-02-20T09:00:00',
    estado: 'confirmada',
    precio: 85000
  },
  {
    id: 2,
    cliente_nombre: 'Juan Pérez',
    cliente_telefono: '3109876543',
    servicio_nombre: 'Fisioterapia',
    profesional_nombre: 'Ft. Ana Rodríguez',
    fecha_hora: '2024-02-21T14:30:00',
    estado: 'pendiente',
    precio: 70000
  },
  {
    id: 3,
    cliente_nombre: 'Carmen López',
    cliente_telefono: '3156789012',
    servicio_nombre: 'Consulta Cardiología',
    profesional_nombre: 'Dr. Roberto Silva',
    fecha_hora: '2024-02-19T10:15:00',
    estado: 'completada',
    precio: 150000
  }
];

export const mockProfessionals = [
  { id: 1, nombre: 'Dr. Carlos Mendoza' },
  { id: 2, nombre: 'Ft. Ana Rodríguez' },
  { id: 3, nombre: 'Dr. Roberto Silva' }
];

// Historia clínica y registros médicos
export const mockMedicalRecords = [
  {
    id: 1,
    cita_id: 1,
    cliente_id: 1,
    cliente_nombre: 'María González',
    profesional_nombre: 'Dr. Carlos Mendoza',
    fecha: '2024-02-20T09:00:00',
    motivo_consulta: 'Dolor abdominal y malestar general',
    sintomas: 'Dolor en epigastrio, náuseas ocasionales, fatiga',
    signos_vitales: {
      presion: '120/80',
      temperatura: '36.5°C',
      pulso: '72 lpm',
      peso: '65 kg'
    },
    examen_fisico: 'Abdomen blando, no doloroso a la palpación. Ruidos intestinales normales.',
    diagnostico: 'Gastritis leve. Síndrome dispéptico funcional.',
    tratamiento: 'Omeprazol 20mg cada 12h por 14 días. Dieta blanda.',
    observaciones: 'Control en 15 días. Evitar irritantes gástricos.',
    proxima_cita: '2024-03-05',
    estado: 'activo'
  },
  {
    id: 2,
    cita_id: 3,
    cliente_id: 3,
    cliente_nombre: 'Carmen López',
    profesional_nombre: 'Dr. Roberto Silva',
    fecha: '2024-02-19T10:15:00',
    motivo_consulta: 'Control cardiológico rutinario',
    sintomas: 'Asintomática. Control preventivo.',
    signos_vitales: {
      presion: '130/85',
      temperatura: '36.2°C',
      pulso: '68 lpm',
      peso: '58 kg'
    },
    examen_fisico: 'Ruidos cardíacos rítmicos, no soplos. Extremidades sin edema.',
    diagnostico: 'Hipertensión arterial leve controlada.',
    tratamiento: 'Continuar con Losartán 50mg/día. Ejercicio regular.',
    observaciones: 'Excelente adherencia al tratamiento. Mantener estilo de vida saludable.',
    proxima_cita: '2024-05-19',
    estado: 'activo'
  }
];

// Clientes con información completa
export const mockClients = [
  {
    id: 1,
    nombre: 'María González',
    telefono: '3201234567',
    email: 'maria.gonzalez@email.com',
    fecha_nacimiento: '1985-03-15',
    documento: '1234567890',
    direccion: 'Calle 123 #45-67',
    contacto_emergencia: 'Pedro González - 3209876543',
    alergias: 'Penicilina',
    antecedentes: 'Hipertensión materna',
    fecha_registro: '2024-01-15'
  },
  {
    id: 2,
    nombre: 'Juan Pérez',
    telefono: '3109876543',
    email: 'juan.perez@email.com',
    fecha_nacimiento: '1978-07-22',
    documento: '0987654321',
    direccion: 'Carrera 89 #12-34',
    contacto_emergencia: 'Ana Pérez - 3156789012',
    alergias: 'Ninguna conocida',
    antecedentes: 'Diabetes tipo 2 paterna',
    fecha_registro: '2024-01-20'
  },
  {
    id: 3,
    nombre: 'Carmen López',
    telefono: '3156789012',
    email: 'carmen.lopez@email.com',
    fecha_nacimiento: '1965-11-08',
    documento: '5678901234',
    direccion: 'Avenida 56 #78-90',
    contacto_emergencia: 'Luis López - 3187654321',
    alergias: 'Aspirina',
    antecedentes: 'Hipertensión, colesterol alto',
    fecha_registro: '2024-01-10'
  }
];