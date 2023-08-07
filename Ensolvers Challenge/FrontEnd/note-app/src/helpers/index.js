export const formatearFecha = () => {
  
  const fechaNueva = new Date()
  const opciones = {
    year:"numeric",
    month:"long",
    day:"2-digit"
  }
  return fechaNueva.toLocaleDateString("es-ES", opciones)
}

export const predefinedCategories = ["Work", "Daily", "Study", "Shopping", "Frequently-used", "Personal-information"]