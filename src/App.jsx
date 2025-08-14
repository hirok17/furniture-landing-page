import { Outlet } from "react-router"
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"

function App() {
 
  return (
    <> 
    <Header />
    <main className="min-h-screen">
       <Outlet />
    </main>
    
     <Footer />
    </>
  )
}

export default App
