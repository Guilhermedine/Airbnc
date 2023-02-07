import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}></Route>
    </Routes>
  )
}