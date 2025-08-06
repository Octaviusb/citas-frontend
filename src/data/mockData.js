// Datos mock para demo sin backend
export const mockServices = [
  {
    id: 1,
    nombre: 'Consulta Inicial',
    descripcion: 'Primera consulta para evaluacion general del paciente',
    precio: 80000,
    duracion: 60,
    categoria: 'consulta'
  },
  {
    id: 2,
    nombre: 'Consulta de Control',
    descripcion: 'Seguimiento y revision de tratamiento',
    precio: 60000,
    duracion: 45,
    categoria: 'consulta'
  },
  {
    id: 3,
    nombre: 'Terapia Manual',
    descripcion: 'Sesion de terapia manual especializada',
    precio: 65000,
    duracion: 45,
    categoria: 'tratamiento'
  },
  {
    id: 4,
    nombre: 'Evaluacion Postural',
    descripcion: 'Analisis completo de postura y biomecanica',
    precio: 120000,
    duracion: 90,
    categoria: 'evaluacion'
  }
];

export const mockAppointments = [
  {
    id: 1,
    cliente_nombre: 'Carlos Rodriguez',
    cliente_telefono: '3009876543',
    servicio_nombre: 'Consulta Inicial',
    profesional_nombre: 'Dr. Juan Perez',
    fecha_hora: '2024-02-15T10:00:00',
    estado: 'completada',
    precio: 80000
  },
  {
    id: 2,
    cliente_nombre: 'Ana Maria Lopez',
    cliente_telefono: '3012345678',
    servicio_nombre: 'Terapia Manual',
    profesional_nombre: 'Dra. Maria Gonzalez',
    fecha_hora: '2024-02-18T14:30:00',
    estado: 'confirmada',
    precio: 65000
  }
];

export const mockProfessionals = [
  { id: 1, nombre: 'Dr. Juan Perez' },
  { id: 2, nombre: 'Dra. Maria Gonzalez' }
];