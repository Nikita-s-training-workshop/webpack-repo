import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageAsync} from '../pages/AboutPage/AboutPage.async'
import {MainPageAsync} from '../pages/MainPage/MainPage.async'
import '../styles/index.scss'

export const App = () => {
   return (
      <div className="app">
         <Link to={'/'}>Главная страница</Link>
         <Link to={'/about'}>О сайте</Link>

         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/'} element={<AboutPageAsync />} />
               <Route path={'/about'} element={<MainPageAsync />} />
            </Routes>
         </Suspense>
      </div>
   )
}
