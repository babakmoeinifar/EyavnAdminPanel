export * from './auth'
export * from './profile'
export * from './lunch'
export * from './stock'

// Example usage in components:
/*
import { authApi, profileApi, lunchApi, stockApi } from '~/services/api'

// In a component:
const handleLogin = async (credentials) => {
  try {
    const { data } = await authApi.login(credentials)
    // Handle successful login
  } catch (error) {
    // Handle error
  }
}

// In a stock trading component:
const getMarketData = async () => {
  try {
    const { data } = await stockApi.getMarket()
    // Handle market data
  } catch (error) {
    // Handle error
  }
}
*/