import { useState, useEffect } from 'react'

function App() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [user, setUser] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingAppointment, setEditingAppointment] = useState(null)
  const [professionals, setProfessionals] = useState([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Usar datos mock
      const { mockServices } = await import('./data/mockData')
      setServices(mockServices)
    } catch (err) {
      setError('Error al cargar servicios')
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const handleLoginSubmit = async (email, password) => {
    if (email === 'admin@clinica.com' && password === 'admin123') {
      setUser({ email, rol: 'admin', nombre: 'Dr. Martinez' })
      setShowLoginModal(false)
      fetchAppointments()
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  const handleLogout = () => {
    setUser(null)
    setShowAdminPanel(false)
    setAppointments([])
  }

  const handleScheduleAppointment = (service = null) => {
    setSelectedService(service)
    setShowAppointmentModal(true)
  }

  const fetchAppointments = async () => {
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 300))
      
      // Usar datos mock
      const { mockAppointments } = await import('./data/mockData')
      setAppointments(mockAppointments)
    } catch (error) {
      console.error('Error al cargar citas:', error)
    }
  }

  const fetchProfessionals = async () => {
    try {
      // Usar datos mock
      const { mockProfessionals } = await import('./data/mockData')
      setProfessionals(mockProfessionals)
    } catch (error) {
      console.error('Error al cargar profesionales:', error)
    }
  }

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment)
    setShowEditModal(true)
    fetchProfessionals()
  }

  const handleUpdateAppointment = async (updatedData) => {
    try {
      // Simular actualización
      await new Promise(resolve => setTimeout(resolve, 500))
      
      alert('Cita actualizada correctamente')
      setShowEditModal(false)
      setEditingAppointment(null)
      fetchAppointments()
    } catch (error) {
      console.error('Error:', error)
      alert('Error de conexión')
    }
  }

  const handleDeleteAppointment = async (appointmentId) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
      try {
        // Simular eliminación
        await new Promise(resolve => setTimeout(resolve, 300))
        
        alert('Cita cancelada correctamente')
        fetchAppointments()
      } catch (error) {
        console.error('Error:', error)
        alert('Error de conexión')
      }
    }
  }

  const closeModals = () => {
    setShowLoginModal(false)
    setShowAppointmentModal(false)
    setShowEditModal(false)
    setSelectedService(null)
    setEditingAppointment(null)
    // NO resetear el usuario para mantener la sesión
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>Cargando...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <p>{error}</p>
          <button onClick={fetchServices} style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f9ff' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(to right, #0369a1, #0284c7, #0ea5e9)', color: 'white', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
              Centro Médico San Rafael
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, margin: 0 }}>Excelencia médica desde 2008 | Especialistas certificados</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {user ? (
              <>
                <span style={{ color: 'white', marginRight: '1rem' }}>Bienvenido, {user.nombre}</span>
                {user.rol === 'admin' && (
                  <button 
                    onClick={() => {
                      console.log('Botón clickeado, showAdminPanel actual:', showAdminPanel)
                      setShowAdminPanel(!showAdminPanel)
                      if (!showAdminPanel) {
                        fetchAppointments()
                      }
                    }}
                    style={{ 
                      padding: '12px 24px', 
                      backgroundColor: showAdminPanel ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.2)', 
                      color: 'white', 
                      border: '2px solid rgba(255,255,255,0.3)', 
                      borderRadius: '12px', 
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    {showAdminPanel ? 'Ocultar' : 'Ver'} Panel
                  </button>
                )}
                <button 
                  onClick={handleLogout}
                  style={{ 
                    padding: '12px 24px', 
                    backgroundColor: 'transparent', 
                    color: 'white', 
                    border: '2px solid rgba(255,255,255,0.3)', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Salir
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={handleLogin}
                  style={{ 
                    padding: '12px 24px', 
                    backgroundColor: 'transparent', 
                    color: 'white', 
                    border: '2px solid rgba(255,255,255,0.3)', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Acceso Personal
                </button>
                <button 
                  onClick={() => handleScheduleAppointment()}
                  style={{ 
                    padding: '12px 24px', 
                    backgroundColor: 'white', 
                    color: '#4f46e5', 
                    border: 'none', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  Reservar Cita
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>


        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Servicios Médicos</h2>
          <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>Contamos con especialistas certificados y equipos de última tecnología para brindarte la mejor atención médica</p>
        </div>

        {/* Servicios */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service) => (
            <div key={service.id} style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              padding: '2rem', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>{service.nombre}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.5' }}>{service.descripcion}</p>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '0.25rem 0.75rem', 
                  backgroundColor: '#e0e7ff', 
                  color: '#3730a3', 
                  fontSize: '0.75rem', 
                  fontWeight: 'bold', 
                  borderRadius: '9999px',
                  marginTop: '0.5rem'
                }}>
                  {service.duracion} minutos
                </span>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{formatPrice(service.precio)}</span>
              </div>
              
              <button 
                onClick={() => handleScheduleAppointment(service)}
                style={{ 
                  width: '100%', 
                  padding: '1rem 1.5rem', 
                  background: 'linear-gradient(to right, #4f46e5, #7c3aed)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                Reservar Cita
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Panel de Administración */}
      {user && user.rol === 'admin' && showAdminPanel && (
        <div style={{ 
          backgroundColor: 'white', 
          margin: '2rem auto', 
          maxWidth: '1200px', 
          borderRadius: '16px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{ 
            background: 'linear-gradient(to right, #4f46e5, #7c3aed)', 
            color: 'white', 
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Panel de Administración</h2>
            <button 
              onClick={() => fetchAppointments()}
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Actualizar
            </button>
          </div>
          
          <div style={{ padding: '2rem' }}>
            {appointments.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#9ca3af' }}>📋</div>
                <p>No hay citas registradas</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8fafc' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>ID</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Cliente</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Servicio</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Profesional</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Fecha/Hora</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Estado</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Precio</th>
                      <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid #e2e8f0', fontWeight: 'bold' }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment, index) => (
                      <tr key={appointment.id || index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '1rem' }}>{appointment.id || 'N/A'}</td>
                        <td style={{ padding: '1rem' }}>
                          <div>
                            <div style={{ fontWeight: 'bold' }}>{appointment.cliente_nombre || 'N/A'}</div>
                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{appointment.cliente_telefono || ''}</div>
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div>
                            <div style={{ fontWeight: 'bold' }}>{appointment.servicio_nombre || 'N/A'}</div>
                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{appointment.servicio_categoria || ''}</div>
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>{appointment.profesional_nombre || 'N/A'}</td>
                        <td style={{ padding: '1rem' }}>
                          <div>
                            <div>{appointment.fecha_hora ? new Date(appointment.fecha_hora).toLocaleDateString() : 'N/A'}</div>
                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                              {appointment.fecha_hora ? new Date(appointment.fecha_hora).toLocaleTimeString() : ''}
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            backgroundColor: appointment.estado === 'confirmada' ? '#dcfce7' : 
                                           appointment.estado === 'pendiente' ? '#fef3c7' : 
                                           appointment.estado === 'completada' ? '#dbeafe' : '#fee2e2',
                            color: appointment.estado === 'confirmada' ? '#166534' : 
                                  appointment.estado === 'pendiente' ? '#92400e' : 
                                  appointment.estado === 'completada' ? '#1e40af' : '#dc2626'
                          }}>
                            {appointment.estado || 'N/A'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', fontWeight: 'bold', color: '#059669' }}>
                          {appointment.precio ? formatPrice(appointment.precio) : 'N/A'}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                            <button
                              onClick={() => handleEditAppointment(appointment)}
                              style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: '#3b82f6',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                              }}
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDeleteAppointment(appointment.id)}
                              style={{
                                padding: '0.5rem 1rem',
                                backgroundColor: '#ef4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                              }}
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Login */}
      {showLoginModal && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 1000 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '2rem', 
            width: '100%', 
            maxWidth: '400px', 
            margin: '1rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4f46e5', margin: 0 }}>Acceso al Sistema</h3>
              <button 
                onClick={closeModals} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '1.5rem', 
                  cursor: 'pointer', 
                  color: '#6b7280',
                  padding: '0.5rem',
                  borderRadius: '50%'
                }}
              >
                ✕
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              const email = e.target.email.value
              const password = e.target.password.value
              handleLoginSubmit(email, password)
            }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Email</label>
                <input
                  name="email"
                  type="email"
                  defaultValue="admin@clinica.com"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Contraseña</label>
                <input
                  name="password"
                  type="password"
                  defaultValue="admin123"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button 
                  type="button" 
                  onClick={closeModals} 
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    border: '2px solid #d1d5db', 
                    backgroundColor: 'white', 
                    color: '#374151', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  ❌ Cancelar
                </button>
                <button 
                  type="submit" 
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    background: 'linear-gradient(to right, #4f46e5, #7c3aed)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  ✅ Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Cita */}
      {showAppointmentModal && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 1000 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '2rem', 
            width: '100%', 
            maxWidth: '500px', 
            margin: '1rem',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4f46e5', margin: 0 }}>Reservar Cita Médica</h3>
              <button 
                onClick={closeModals} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '1.5rem', 
                  cursor: 'pointer', 
                  color: '#6b7280',
                  padding: '0.5rem',
                  borderRadius: '50%'
                }}
              >
                ✕
              </button>
            </div>
            
            {selectedService && (
              <div style={{ 
                background: 'linear-gradient(to right, #eef2ff, #f3e8ff)', 
                padding: '1.5rem', 
                borderRadius: '16px', 
                marginBottom: '1.5rem',
                border: '1px solid #e0e7ff'
              }}>
                <h4 style={{ fontWeight: 'bold', color: '#312e81', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{selectedService.nombre}</h4>
                <p style={{ color: '#4338ca', fontSize: '0.9rem', marginBottom: '1rem' }}>{selectedService.descripcion}</p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '0.9rem', 
                  backgroundColor: 'rgba(255,255,255,0.5)', 
                  padding: '0.75rem', 
                  borderRadius: '12px' 
                }}>
                  <span>Valor: <strong style={{ color: '#059669' }}>{formatPrice(selectedService.precio)}</strong></span>
                  <span>Duración: <strong style={{ color: '#2563eb' }}>{selectedService.duracion} min</strong></span>
                </div>
              </div>
            )}
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Nombre completo *</label>
                <input
                  type="text"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Telefono *</label>
                <input
                  type="tel"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Email *</label>
                <input
                  type="email"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Fecha *</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Hora *</label>
                  <select
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button 
                  type="button" 
                  onClick={closeModals} 
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    border: '2px solid #d1d5db', 
                    backgroundColor: 'white', 
                    color: '#374151', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  ❌ Cancelar
                </button>
                <button 
                  type="submit" 
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    background: 'linear-gradient(to right, #059669, #10b981)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  ✅ Confirmar Cita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Editar Cita */}
      {showEditModal && editingAppointment && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 1000 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '2rem', 
            width: '100%', 
            maxWidth: '500px', 
            margin: '1rem',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4f46e5', margin: 0 }}>Modificar Cita</h3>
              <button 
                onClick={closeModals} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '1.5rem', 
                  cursor: 'pointer', 
                  color: '#6b7280',
                  padding: '0.5rem',
                  borderRadius: '50%'
                }}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const updatedData = {
                fecha_hora: `${formData.get('fecha')} ${formData.get('hora')}:00`,
                estado: formData.get('estado'),
                profesional_id: parseInt(formData.get('profesional_id')),
                servicio_id: parseInt(formData.get('servicio_id'))
              }
              handleUpdateAppointment(updatedData)
            }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Fecha *</label>
                  <input
                    name="fecha"
                    type="date"
                    defaultValue={editingAppointment.fecha_hora ? editingAppointment.fecha_hora.split('T')[0] : ''}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Hora *</label>
                  <select
                    name="hora"
                    defaultValue={editingAppointment.fecha_hora ? editingAppointment.fecha_hora.split('T')[1]?.substring(0,5) : ''}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                    required
                  >
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Estado *</label>
                <select
                  name="estado"
                  defaultValue={editingAppointment.estado}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="confirmada">Confirmada</option>
                  <option value="completada">Completada</option>
                  <option value="cancelada">Cancelada</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Profesional *</label>
                <select
                  name="profesional_id"
                  defaultValue={editingAppointment.profesional_id}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                >
                  {professionals.map(prof => (
                    <option key={prof.id} value={prof.id}>{prof.nombre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Servicio *</label>
                <select
                  name="servicio_id"
                  defaultValue={editingAppointment.servicio_id}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                  required
                >
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.nombre}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button 
                  type="button" 
                  onClick={closeModals} 
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    border: '2px solid #d1d5db', 
                    backgroundColor: 'white', 
                    color: '#374151', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  ❌ Cancelar
                </button>
                <button 
                  type="submit" 
                  style={{ 
                    flex: 1, 
                    padding: '0.75rem', 
                    background: 'linear-gradient(to right, #3b82f6, #1d4ed8)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  ✅ Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App