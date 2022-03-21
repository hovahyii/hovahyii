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
				<title>Hovah | Portfolio Version 3</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />

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
