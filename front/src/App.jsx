import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const MainPage = React.lazy(() => import('./views/main/MainPage'))
const LoginPage = React.lazy(() => import('./views/login/LoginPage'))
const ChatApp = React.lazy(() => import('./views/chat/ChatApp'))
const App = () => {

  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" name="Main Page" element={<MainPage/>} />
          <Route path="/chat" name="Chat Page" element={<ChatApp/>} />
          <Route path="/login" name="Login Page" element={<LoginPage/>} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
