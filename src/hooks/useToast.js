import { useDispatch } from 'react-redux'
import { addToast, deleteToast } from '../state/toastSlice'

export function useToast () {
  const dispatch = useDispatch()

  const newToast = ({ message, color, defaultDelete = true, time = 3000 }) => {
    const toast = {
      message,
      color
    }
    dispatch(addToast({ toast }))
    if (defaultDelete) {
      setTimeout(() => {
        deleteCurrentToast()
      }, time)
    }
  }

  const deleteCurrentToast = () => {
    dispatch(deleteToast())
  }

  return { newToast, deleteCurrentToast }
}
