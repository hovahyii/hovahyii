import Link from "next/link"

const Navbar = () => {
	return (
		<div className="lg:flex items-center justify-center w-full pt-12  grid">
			<p className="font-viga  text-center lg:mb-0 lg:text-left uppercase text-xl sm:w-1/2 mb-6 ">Hovah</p>
              
			<ul className="flex align-right mx-14">
				<li className="">
					<Link href="/">About</Link>
				</li>
				<li className="pl-8"><Link href="/#project">Projects</Link></li>
				<li className="pl-8"><Link href="/#timeline">Timeline</Link></li>
				<li className="pl-8"><Link href="/#contact">Contact</Link></li>
			</ul>
		</div>
	)
}

export default Navbar
