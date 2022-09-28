// ()=>{} es una función que como resultado retornara un valor booleano de la condición establecida para validar el input.
// Ej: (value) => value.length >= 1

export const loginValidations = {
  email: [
    [(value)=> value.length > 0, "El email es obligatorio"],   
    [(value)=> value.includes('@'), "El email debe tener un @"],
  ],  
  password: [
    [(value)=> value.length >= 6, "El password debe tener al menos 6 caracteres"],    
  ],
}

export const registerValidations = {
  username: [
    [(value)=> value.length >= 6, "El nombre debe tener al menos 6 caracteres"],
  ],
  email: [
    [(value)=> value.length > 0, "El email es obligatorio"],   
    [(value)=> value.includes('@'), "El email debe tener un @"],
  ],  
  password: [
    [(value)=> value.length >= 6, "El password debe tener al menos 6 caracteres"],    
  ],
  password2: [
    [(value)=> value.length >= 6, "El password debe tener al menos 6 caracteres"],    
  ],
}