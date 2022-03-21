import Image from "next/image"
import Link from "next/link"

const myLoader = () => {
	return `https://umpedumy-my.sharepoint.com/personal/tb20091_student_ump_edu_my/Documents/Photos/Selfie/IMG-20190926-WA0100.jpg`
}

const About = () => {
	return (
		<div className="lg:flex w-full justify-center items-center lg:-mx-6 pt-12 ">
			<div className="lg:text-left lg:w-1/2 text-center w-screen p-4 lg:p-0">
				<h1 className="h1">
					Hello! I&#39;m Hovah, a developer based in Malaysia.
				</h1>

				<p className="paragraph">
					I love building tools that are user-friendly, simple and delightful.
				</p>
				<p className="paragraph">
					I went to Swinburne University where I learnt the fundamentals of
					programming but dropped out. I got an internship offer at one UI/UX
					web design company. Then, I went to Linton University College where I
					had time to focus on learning web development in depth. Later, I got
					an opportunity to work as a freelancer at an Angular based company
					which writes algorithm and solution.
				</p>
				<p className="paragraph">
					Unfortunately, in 2020, COVID-19 outbreak hit the world unprecedented,
					my college was closed down due to financial crisis. That was when I
					got transferred again to Universiti Malaysia Pahang. At Universiti
					Malaysia Pahang, I found a part time job as a web developer at a
					startup called Mahiran Digital and apply what I learnt into the work
					force.
				</p>
				<p className="paragraph">
					Through these experiences, I had the opportunity to work with small,
					specialised and cross-functional teams across different area and
					developed a working and studying life that leans towards flexibility,
					skill-based, clarity and collaboration.
				</p>
				<p className="paragraph">
					I&#39;m currently looking for internship as a developer. Hire me?
				</p>
				<button className="border rounded-lg bg-black text-white p-2 w-2/4 lg:w-1/4">
					<Link href="https://github.com/hovahyii">
						<a target="_blank" rel="noopener noreferrer">
							View Github
						</a>
					</Link>
				</button>
			</div>

			<div className="drop-shadow-xl ml-8 mt-10">
				<Image
					loader={myLoader}
					src="me.png"
					alt="Picture of the author"
					width={350}
					height={480}
					className="rounded-md object-center object-cover"
				/>
			</div>
		</div>
	)
}

export default About
