import Image from "next/image"
import Link from "next/link"


const Project = () => {
	return (
		<div className="flex w-screen justify-center items-center pt-40">
			<div className="w-3/4">
				<h1 className="h1">Projects</h1>
				<p className="paragraph pb-10">Some of my previous projects:</p>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
					<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto hover:shadow-2xl">
						<a
							href="https://mfia.com.my/"
							target="_blank"
							rel="noreferrer"
							className="w-full block h-full"
						>
							<Image
								alt="blog photo"
								src="/fems.jpeg"
								className="max-h-40 w-full object-cover"
								width={400}
								height={160}
							/>
							<div className="bg-white dark:bg-gray-800 w-full p-4">
								<p className="text-indigo-500 text-md font-medium">Web</p>
								<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
									MFIA
								</p>
								<p className="text-gray-400 dark:text-gray-300 font-light text-md">
									I help to maintain the website, refactoring the redundant code
									and change the UI.
								</p>
								<div className="flex flex-wrap justify-starts items-center mt-4">
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Laravel
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#MariaDB
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#AlpineJS
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#tailwindcss
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto  hover:shadow-2xl">
						<a
							href="https://hovah-blog.vercel.app/"
							target="_blank"
							rel="noreferrer"
							className="w-full block h-full"
						>
							<Image
								alt="blog photo"
								src="/blog.jpeg"
								className="max-h-40 w-full object-top object-cover"
								width={400}
								height={160}
							/>
							<div className="bg-white dark:bg-gray-800 w-full p-4">
								<p className="text-indigo-500 text-md font-medium">Web</p>
								<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
									Hovah Blog
								</p>
								<p className="text-gray-400 dark:text-gray-300 font-light text-md">
									In this blog, I share about my life and interesting things I
									found in UMP...
								</p>
								<div className="flex flex-wrap justify-starts items-center mt-4">
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#NextJS
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#React
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#GraphQL
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#GraphCMS
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#tailwindcss
									</div>
								</div>

								<div className="flex flex-wrap justify-starts items-center mt-4 pl-4">
									<a
										href="https://github.com/hovahyii/my-blog"
										target="_blank"
										rel="noreferrer"
										className="text-gray-800"
									>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="github"
											className="w-8"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</a>
					</div>
					<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto hover:shadow-2xl">
						<a
							href="https://jesus-the-only-hope.vercel.app/"
							target="_blank"
							rel="noreferrer"
							className="w-full block h-full"
						>
							<Image
								alt="blog photo"
								src="/jesus.jpeg"
								className="max-h-40 w-full object-top object-cover"
								width={400}
								height={160}
							/>
							<div className="bg-white dark:bg-gray-800 w-full p-4">
								<p className="text-indigo-500 text-md font-medium">Web</p>
								<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
									Jesus The Only Hope
								</p>
								<p className="text-gray-400 dark:text-gray-300 font-light text-md">
									This website allows anyone to post his/her prayer request and
									the request will be saved into Prisma. I also connect the
									devotion page to the Our Daily Bread (odb.org) API, which will
									show daily devotion...
								</p>
								<div className="flex flex-wrap justify-starts items-center mt-4">
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#NextJS
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Prisma
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#React
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#PostgreSQL
									</div>
								</div>
								<div className="flex flex-wrap justify-starts items-center mt-4 pl-4">
									<a
										href="https://github.com/hovahyii/jesus-the-only-hope"
										target="_blank"
										rel="noreferrer"
										className="text-gray-800"
									>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="github"
											className="w-8"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</a>
					</div>
					<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto  hover:shadow-2xl">
						<a
							href="https://luc-chinese-association.herokuapp.com/about"
							className="w-full block h-full"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								alt="blog photo"
								src="/luc.jpeg"
								className="max-h-40 w-full object-top object-cover"
								width={400}
								height={160}
							/>
							<div className="bg-white dark:bg-gray-800 w-full p-4">
								<p className="text-indigo-500 text-md font-medium">Web</p>
								<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
									LUC Chinese Association
								</p>
								<p className="text-gray-400 dark:text-gray-300 font-light text-md">
									This is teh full stack web application I had done with my club
									members during the studies at Linton. This website allows
									visitor to post comment on memory wall. We also make a admin
									dashboard whereby the admin can check the post and perform
									CRUD on the unwanted posts. Only admin can login to the
									dashboard.
								</p>
								<div className="flex flex-wrap justify-starts items-center mt-4">
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Angular
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Bootstrap
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#NodeJs
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#MongoDB
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#JWT
									</div>
								</div>
								<div className="flex flex-wrap justify-starts items-center mt-4 pl-4">
									<a
										href="https://github.com/Linton-IET-On-Campus/LUC-Chinese-Association"
										target="_blank"
										rel="noreferrer"
										className="text-gray-800"
									>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="github"
											className="w-8"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</a>
					</div>
					<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto hover:shadow-2xl">
						<a
							href="https://lavender23p-covid-19-vaccine.herokuapp.com/"
							className="w-full block h-full"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								alt="blog photo"
								src="/vaccine.jpeg"
								className="max-h-40 w-full object-top object-cover"
								width={400}
								height={160}
							/>
							<div className="bg-white dark:bg-gray-800 w-full p-4">
								<p className="text-indigo-500 text-md font-medium">Web</p>
								<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
									COVID Vaccine Blog
								</p>
								<p className="text-gray-400 dark:text-gray-300 font-light text-md">
									This is an assignment under UMP course Softskill. In this
									blog, I made both client and server side for API. I wrote the
									API using Express JS.
								</p>
								<div className="flex flex-wrap justify-starts items-center mt-4">
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#NextJs
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#ExpressJs
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#NodeJs
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#MongoDB
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#JWT
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Google Login
									</div>
								</div>
								<div className="flex flex-wrap justify-starts items-center mt-4 pl-4">
									<a
										href="https://github.com/hovahyii/Lavender_23P-COVID-19-Vaccine"
										target="_blank"
										rel="noreferrer"
										className="text-gray-800"
									>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fab"
											data-icon="github"
											className="w-8"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path
												fill="currentColor"
												d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</a>
					</div>
					<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto hover:shadow-2xl">
						<a
							href="https://github.com/hovahyii/BeamRaisingOperationChecklist_Notification"
							className="w-full block h-full"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								alt="anode jacking frame"
								src="/beam.jpg" 
								className="max-h-40 w-full object-top object-cover"
								width={400}
								height={160}
							/>
							<div className="bg-white dark:bg-gray-800 w-full p-4">
								<p className="text-indigo-500 text-md font-medium">Android</p>
								<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
									Anode Jacking Frame Operation Checklist
								</p>
								<p className="text-gray-400 dark:text-gray-300 font-light text-md">
									The new supercar is here, 543 cv and 140 000$. This is best
									racing GT about 7 years on...
								</p>
								<div className="flex flex-wrap justify-starts items-center mt-4">
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Java
									</div>
									<div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
										#Android
									</div>
								</div>
								<div className="flex flex-wrap justify-starts items-center mt-4 pl-4">
									<button className="border rounded-lg bg-black text-white p-2">
										<Link href="https://github.com/hovahyii">
											<a target="_blank" rel="noopener noreferrer">
												💾 Download
											</a>
										</Link>
									</button>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
