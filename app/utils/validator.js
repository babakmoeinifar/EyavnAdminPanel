// Email validation
export const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }
  
  // Password validation (min 8 chars, at least one letter and one number)
  export const isValidPassword = (password) => {
    return password.length >= 8 && 
           /[A-Za-z]/.test(password) && 
           /[0-9]/.test(password)
  }
  
  // Required field validation
  export const isRequired = (value) => {
    if (value === null || value === undefined) return false
    return String(value).trim().length > 0
  }
  
  // Min length validation
  export const minLength = (value, min) => {
    if (!value) return false
    return String(value).length >= min
  }
  
  // Max length validation
  export const maxLength = (value, max) => {
    if (!value) return true
    return String(value).length <= max
  }
  
  // Field equality validation (for password confirmation)
  export const isEqual = (value1, value2) => {
    return value1 === value2
  }