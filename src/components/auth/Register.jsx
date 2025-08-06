import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const Register = () => {
  const { register: registerUser, isAuthenticated } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  // Redireccionar si ya está autenticado
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await registerUser(data)
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada correctamente',
        timer: 2000,
        showConfirmButton: false
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Error al registrar cuenta'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crear Cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Información del Negocio */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Información del Negocio</h3>
              
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Nombre del Negocio
                </label>
                <input
                  id="businessName"
                  type="text"
                  className="input-field mt-1"
                  placeholder="Mi Salón de Belleza"
                  {...register('businessName', {
                    required: 'Nombre del negocio es requerido'
                  })}
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700">
                  Email del Negocio
                </label>
                <input
                  id="businessEmail"
                  type="email"
                  className="input-field mt-1"
                  placeholder="contacto@minegocio.com"
                  {...register('businessEmail', {
                    required: 'Email del negocio es requerido',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email no válido'
                    }
                  })}
                />
                {errors.businessEmail && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessEmail.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label htmlFor="businessPhone" className="block text-sm font-medium text-gray-700">
                  Teléfono del Negocio (Opcional)
                </label>
                <input
                  id="businessPhone"
                  type="tel"
                  className="input-field mt-1"
                  placeholder="+57 300 123 4567"
                  {...register('businessPhone')}
                />
              </div>
            </div>

            {/* Información del Usuario */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Tu Información</h3>
              
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                  Tu Nombre
                </label>
                <input
                  id="userName"
                  type="text"
                  className="input-field mt-1"
                  placeholder="Juan Pérez"
                  {...register('userName', {
                    required: 'Tu nombre es requerido'
                  })}
                />
                {errors.userName && (
                  <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                  Tu Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  className="input-field mt-1"
                  placeholder="tu@email.com"
                  {...register('userEmail', {
                    required: 'Tu email es requerido',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email no válido'
                    }
                  })}
                />
                {errors.userEmail && (
                  <p className="mt-1 text-sm text-red-600">{errors.userEmail.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="input-field mt-1"
                  placeholder="••••••••"
                  {...register('password', {
                    required: 'Contraseña es requerida',
                    minLength: {
                      value: 6,
                      message: 'Contraseña debe tener al menos 6 caracteres'
                    }
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirmar Contraseña
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="input-field mt-1"
                  placeholder="••••••••"
                  {...register('confirmPassword', {
                    required: 'Confirma tu contraseña',
                    validate: value => value === watch('password') || 'Las contraseñas no coinciden'
                  })}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register