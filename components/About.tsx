import Image from "next/image"
import Link from "next/link"

const myLoader = () => {
	return `https://lh3.googleusercontent.com/pw/ADCreHe6CN7O2e8kmB0oO5h1Sd_ptKQXHyvCXFrSdXmINQMM_Y6_F0PUkfzYI8LWtftgsWne2hCqMWzPM00ohQzRcYfQ-BjRPV0amONDLY5jDEqYvdbr4ym8darB-hBaPkHrE0rNFXiVZBrQJ5WwZEExgNJnxykePI7ZfYFo4EMwUzMlOyOAmB5Iqf9Gev2dsyZO6MM0tyU8BVwS5bg91tCwDoX3Wkn1dgu9vzojFQlkfLUuYSsv12ZlRB4O2c2SWU3JypcWRklaEAHt95G4Bc4Tdtb1Jz_YCkmPfLrHfjfg3LDPv_LpGxKG9Jgkn-S-ppypM_O0xFgdb1NR1_Inate_HMWOCl77YBS_pMwhrjJLN8PLIhxK7cnOOmY1DA7EVJQmLH28mz8muh9OEVI0DiVpJHb6IFVvBCBZDCcIXRiZ7eskKL0OBQyS2AmSiH8pOqLs-c7CkdB_56e66WnupckdDib2Bunpx41U0e7M0GbYuHklpLq5disyrG9NCfaAdQZB2IB06eafG40FzTdLz51I0loc7tXltc4YLj0fO3k92DmMUK5ymsKZyiKvkGfTxkpVZla2vR63ZYQECm8l-4h2mgXh635k2PYbc24Is9VZriK7KPbW-b9guXNPJcjJ27ZDaCrDOKnx4o5YwT7PxTqogcZsWNFuPEG6GRaTkfuF6QCsdTnQNFbmNnjX554oZ5ihCLEwOFlHJPXcYt4wuUy3wSpN0IMakHqxteWeEj-Bb4KFg3eq-oPeJ-djJz4n9MG5tZdaasgtKFOyalYKHgDrdEdY_h5Eaq9UDbB4UD9_z82RTmDwbrC5Kp47ss0NkasUkylCZanyg_2c6FTt3dK24CQBfJaKvA4cHykWXCfZ5h1Q6kKyPAsjVLtdMMYnSL9ZS1axr_a7tIKjcaNkTfins6ycH2ZvuCKtLS8mxUZ9QNbTP5NlMnf8CddFSzCmEA=w525-h700-s-no-gm?authuser=1`
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
