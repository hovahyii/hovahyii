import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Header'
import About from '../components/About'
import Project from '../components/Project'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
		<div className="w-full overflow-hidden ">
			<Head>
				<title>Hovah Yii | Portfolio Version 3</title>
				<meta
					name="description"
					content="Hello! I'm Hovah, a developer based in Malaysia. I love building tools that are user-friendly, simple and delightful."
				/>
				<meta
					name="keyword"
					content="hovahyii, portfolio, timeline, projects, hovah yii"
				/>
				<meta name="author" content="Hovah Yii" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="Hovah Yii | Portfolio Version 3" />
				<meta property="og:type" content="portfolio" />
				<meta property="og:site_name" content="Hovah Yii | Portfolio" />

				<meta property="og:url" content="https://hovahyii.vercel.app/" />
				<meta
					property="og:description"
					content="Hello! I'm Hovah, a developer based in Malaysia. I love building tools that are user-friendly, simple and delightful."
				/>
				<meta
					property="og:image"
					content="https://umpedumy-my.sharepoint.com/personal/tb20091_student_ump_edu_my/Documents/Photos/Selfie/IMG-20190926-WA0100.jpg"
				/>
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="300" />
				<meta property="og:image:alt" content="Hovah Yii" />
			</Head>

			<main className="">
				<Navbar />
				<About />
				<Project />
				<Timeline />
				<Footer />
			</main>

			<footer></footer>
		</div>
	)
}

export default Home
