

import About from "@/components/aboutPage"
import ProjectPage from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
  <div className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row m-4">


  {/* About Page */}
  <About />


  {/* Cards Section */}
  <ProjectPage />


  </div>


    <Footer />
</>
  )
}

