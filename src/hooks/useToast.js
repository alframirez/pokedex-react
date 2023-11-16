import { useDispatch } from 'react-redux'
import { addToast, deleteToast } from '../state/toastSlice'

export function useToast () {
  const dispatch = useDispatch()

  const newToast = ({ message, color }) => {
    const toast = {
      message,
      color
    }
    dispatch(addToast({ toast }))
    setTimeout(() => {
      deleteOldToast()
    }, 3000)
  }

  const deleteOldToast = () => {
    dispatch(deleteToast())
  }

  return { newToast, deleteOldToast }
}
