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