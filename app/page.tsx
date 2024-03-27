

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

  <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="hovahyii" data-description="Support me on Buy me a coffee!" data-message="🌟 Do my creations kindle your spirit, stir your mind? 🌟
" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
</div>
    <Footer />
</>
  )
}

