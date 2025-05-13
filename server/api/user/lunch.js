import { useApiFetch } from '~/composables/useApiFetch'

export const lunchApi = {
  getReserve: () => useApiFetch('/v1/lunch'),
  
  getHistory: () => useApiFetch('/v1/lunch/history'),
  
  changeSalon: (data) => useApiFetch('/v1/lunch/reserve/changeSalon', {
    method: 'POST',
    body: data
  }),
  
  submitReservation: ({ quantity, foodId, salonId, bookingId }) => 
    useApiFetch(`/v1/lunch/reserve/${quantity}/${foodId}/${salonId}/${bookingId}`, {
      method: 'POST'
    }),
    
  submitRating: (reservationId, rating) => 
    useApiFetch(`/v1/lunch/reserve/${reservationId}/rate`, {
      method: 'POST',
      body: { rating }
    })
}