import {useDispatch} from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { useState } from 'react'
import {Header,Footer} from './components'


function App() {
  const [loading, setLoading] = useState(true)  
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data) => {
      if (data) {
        dispatch(login({data}))
      }else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false))
  },[])


  return !loading ? (
  <div className='min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
    <div className='flex-1 flex flex-col'>
      <Header/>
      <main className='flex-1 container mx-auto px-4 py-8'>
        {/* <Outlet/> */}
        <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl'>
          <h1 className='text-white text-2xl font-bold'>Welcome to Your App</h1>
          <p className='text-gray-300 mt-2'>Content will appear here</p>
        </div>
      </main>
      <Footer/>
    </div>
  </div>
) : (
  <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4'></div>
      <p className='text-white text-lg'>Loading...</p>
    </div>
  </div>
)
}

export default App
