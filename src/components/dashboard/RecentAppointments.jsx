import React from 'react'
import { Clock, User } from 'lucide-react'

const RecentAppointments = () => {
  // TODO: Fetch from API
  const recentAppointments = [
    {
      id: 1,
      clientName: 'María García',
      service: 'Corte y Peinado',
      time: '10:00 AM',
      status: 'confirmed'
    },
    {
      id: 2,
      clientName: 'Carlos López',
      service: 'Barba y Bigote',
      time: '11:30 AM',
      status: 'pending'
    },
    {
      id: 3,
      clientName: 'Ana Martínez',
      service: 'Tinte',
      time: '2:00 PM',
      status: 'confirmed'
    }
  ]

  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800'
  }

  const statusLabels = {
    confirmed: 'Confirmada',
    pending: 'Pendiente',
    cancelled: 'Cancelada'
  }

  return (
    <div className="card">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Próximas Citas</h3>
      
      <div className="space-y-4">
        {recentAppointments.map((appointment) => (
          <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg">
                <User className="h-4 w-4 text-primary-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{appointment.clientName}</p>
                <p className="text-sm text-gray-500">{appointment.service}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{appointment.time}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[appointment.status]}`}>
                {statusLabels[appointment.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <button className="w-full text-center text-sm text-primary-600 hover:text-primary-500 font-medium">
          Ver todas las citas
        </button>
      </div>
    </div>
  )
}

export default RecentAppointments