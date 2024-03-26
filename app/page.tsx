

import About from "../components/about"
import ProjectPage from "../components/project"

export default function Home() {
  return (
<div className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row m-4">


  {/* About Page */}
  <About />

  {/* Cards Section */}
  <ProjectPage />


  
</div>


  )
}

