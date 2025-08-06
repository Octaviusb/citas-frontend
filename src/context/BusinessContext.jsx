import React, { createContext, useContext, useState } from 'react'

const BusinessContext = createContext()

export const useBusiness = () => {
  const context = useContext(BusinessContext)
  if (!context) {
    throw new Error('useBusiness debe ser usado dentro de BusinessProvider')
  }
  return context
}

export const BusinessProvider = ({ children }) => {
  const [services, setServices] = useState([])
  const [employees, setEmployees] = useState([])
  const [clients, setClients] = useState([])
  const [appointments, setAppointments] = useState([])

  const value = {
    services,
    setServices,
    employees,
    setEmployees,
    clients,
    setClients,
    appointments,
    setAppointments
  }

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  )
}