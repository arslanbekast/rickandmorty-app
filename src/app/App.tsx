import { useSelector } from 'react-redux'
import { selectAppError, selectAppInitialized } from '@/app/appSelectors'
import s from './App.module.scss'
import { Outlet } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CircularProgress } from '@/common/components/CircularProgress/CircularProgress'
import { useEffect } from 'react'
import { fetchCharacters } from '@/features/characters/model/charctersSlice'
import { setAppInitialized } from '@/app/appSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'

function App() {
  const error = useSelector(selectAppError)
  const isInitialized = useSelector(selectAppInitialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
      .unwrap()
      .finally(() => dispatch(setAppInitialized(true)))
  }, [dispatch])

  if (error) {
    toast.error(error)
  }

  if (!isInitialized) return <CircularProgress />

  return (
    <div className={s.app}>
      <ToastContainer
        autoClose={1000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
      />
      <Outlet />
    </div>
  )
}

export default App
