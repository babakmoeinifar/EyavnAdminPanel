import { useApiFetch } from '~/composables/useApiFetch'

export const stockApi = {
  // Market operations
  getMarket: (slug) => useApiFetch(`/v1/stock/market/${slug || ''}`),
  
  getSymbols: () => useApiFetch('/v1/stock/symbols'),
  
  getSymbolDetail: (slug) => useApiFetch(`/v1/stock/symbol-detail/${slug}`),
  
  getSymbolHistory: (slug) => useApiFetch(`/v1/stock/symbol-history/${slug}`),
  
  // Trading operations
  submitOrder: (orderType, data) => useApiFetch(`/v1/stock/submit-order/${orderType}`, {
    method: 'POST',
    body: data
  }),
  
  deleteOrder: (orderId) => useApiFetch(`/v1/stock/delete-order/${orderId}`, {
    method: 'POST'
  }),
  
  getOrdersQueue: (symbolId) => useApiFetch(`/v1/stock/get-stock-orders/${symbolId}`),
  
  // User portfolio
  getMyStocks: () => useApiFetch('/v1/stock/myStocks'),
  
  getMyStockDetails: (slug) => useApiFetch(`/v1/stock/mySpecificStockDetails/${slug}`),
  
  // Bank operations
  submitBankNumber: (data) => useApiFetch('/v1/stock/submit-user-bank-number', {
    method: 'POST',
    body: data
  }),
  
  // Terms and guides
  acceptTerms: () => useApiFetch('/v1/stock/accept-terms', {
    method: 'POST'
  }),
  
  getCoreExplained: () => useApiFetch('/v1/stock/core-explained'),
  
  getTradeGuide: () => useApiFetch('/v1/stock/trade-guide')
}