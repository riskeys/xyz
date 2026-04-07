import Link from "next/link";

export default function LandingCommand() {

	return (
		<div className="w-3/4 xl:w-1/2 mt-4">
			<div className="vim-only ">
				<div className="flex-col xl:w-2/3 xl:mx-auto items-center">
					{ /* <HomeCommand />  */}
					<ProfileCommand />
					<AboutCommand />
					<MusicCommand />
				</div>
			</div>
			<div className="touch-only">
				<div className=" flex flex-col text-center text-sm">
					<div className="flex flex-row justify-center">
						<div className="text-center basis-1/2 py-1 border-r-1 border-white">
							<Link href={"/blog"} className="text-blue-500 dark:text-blue-500">blog</Link>
						</div>
						<div className="text-center basis-1/2 py-1">
							<Link href={"/profile"} className="text-blue-500 dark:text-blue-500">profile</Link>
						</div>
					</div>
					<div className="hidden flex-row justify-center">
						<div className="text-center basis-1/2 py-1 border-r-1 border-white">
							<Link href={"/blog"} className="text-blue-500 dark:text-blue-500">blog</Link>
						</div>
						<div className="hidden text-center basis-1/2 py-1 border-r-1 border-white">
							<Link href={"/music"} className="text-blue-500 dark:text-blue-500">music</Link>
						</div>
						<div className="text-center basis-1/2 py-1">
							<Link href={"/profile"} className="text-blue-500 dark:text-blue-500">profile</Link>
						</div>
					</div>
					<div className="flex flex-row justify-center">
						<div className="text-center pt-4">
							<Link href={"/about"} className="text-blue-500 dark:text-blue-500">about the website</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function HomeCommand() {
	return (
		<div className="vim-only text-sm md:text-base w-full mx-auto md:w-full">
			<div className="hidden text-sm text-left md:text-base md:flex md:flex-row md:justify-between w-full ">
				<div className="basis-2/10 ">type</div>
				<div className="basis-4/10 ">:blog&lt;Enter&gt;</div>
				<div className="basis-4/10">
					<span>to open</span>
					<Link href={"/blog"} className="text-blue-500 dark:text-blue-500"> blog </Link>
				</div>
			</div>
		</div>
	);
}

function MusicCommand() {
	return (
		<div className="vim-only text-sm md:text-base w-full mx-auto md:w-full">
			<div className="hidden text-sm text-left md:text-base md:flex md:flex-row md:justify-between w-full ">
				<div className="basis-2/10 ">type</div>
				<div className="basis-4/10 ">:music&lt;Enter&gt;</div>
				<div className="basis-4/10">
					<span>to open</span>
					<Link href={"/music"} className="text-blue-500 dark:text-blue-500"> music </Link>
				</div>
			</div>
		</div>
	);
}

function ProfileCommand() {
	return (
		<div className="hidden md:block text-sm text-left md:text-base w-full mx-auto md:w-full">
			<div className="hidden text-sm md:text-base md:flex flex-col md:flex-row md:justify-between w-full mx-auto">
				<div className="basis-2/10 ">type</div>
				<div className="basis-4/10">:profile&lt;Enter&gt;</div>
				<div className="basis-4/10">
					<span>to open</span>
					<Link href={"/profile"} className="text-blue-500 dark:text-blue-500"> profile </Link>
				</div>
			</div>
		</div>
	);
}

function AboutCommand() {
	return (
		<div className="hidden md:block text-sm text-left md:text-base w-full mx-auto md:w-full">
			<div className="hidden text-sm md:text-base md:flex flex-col md:flex-row md:justify-between w-full mx-auto">
				<div className="basis-2/10 ">type</div>
				<div className="basis-4/10">:about&lt;Enter&gt;</div>
				<div className="basis-4/10">
					<span>to open</span>
					<Link href={"/profile"} className="text-blue-500 dark:text-blue-500"> about </Link>
					<span>page</span>
				</div>
			</div>
		</div>
	);
}
