import React, { useState, useEffect } from 'react'
import { Calendar, Users, Scissors, TrendingUp } from 'lucide-react'
import StatsCard from './StatsCard'
import RecentAppointments from './RecentAppointments'

const Dashboard = () => {
  const [stats, setStats] = useState({
    todayAppointments: 0,
    totalClients: 0,
    totalServices: 0,
    monthRevenue: 0
  })

  useEffect(() => {
    // TODO: Fetch real stats from API
    setStats({
      todayAppointments: 8,
      totalClients: 156,
      totalServices: 12,
      monthRevenue: 2500000
    })
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Resumen de tu negocio</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Citas Hoy"
          value={stats.todayAppointments}
          icon={Calendar}
          color="blue"
        />
        <StatsCard
          title="Total Clientes"
          value={stats.totalClients}
          icon={Users}
          color="green"
        />
        <StatsCard
          title="Servicios"
          value={stats.totalServices}
          icon={Scissors}
          color="purple"
        />
        <StatsCard
          title="Ingresos del Mes"
          value={`${stats.monthRevenue.toLocaleString()}`}
          icon={TrendingUp}
          color="yellow"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAppointments />
        
        <div className="card">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left">
              Nueva Cita
            </button>
            <button className="w-full btn-secondary text-left">
              Nuevo Cliente
            </button>
            <button className="w-full btn-secondary text-left">
              Ver Calendario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard