import { Outlet } from "react-router"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import ThemeProvider from "./context/ThemeContext"
import { Toaster } from "react-hot-toast"

function App() {
 
  return (
  
    <ThemeProvider>
      <Toaster />
           <Header />
    <main className="min-h-screen">
       <Outlet />
    </main>
    
     <Footer />
    </ThemeProvider>
 
  
  )
}

export default App
