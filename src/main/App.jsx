import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../features/Home/home"
import FourOFourNotFound from "../ui/404-not-found"
import About from "../features/About/about"
import Services from "../features/Services/services"
import Team from "../features/Team/Team"
import BlogSwiper from "../features/Blog/blog"
import Contact from "../features/Contacts/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/blog`} element={<BlogSwiper />} />
          <Route path={`/services`} element={<Services />} />
          <Route path={`/team`} element={<Team />} />
          <Route path={`/contact`} element={<Contact />} />
          <Route path={`*`} element={<FourOFourNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
