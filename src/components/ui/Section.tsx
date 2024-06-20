import Link from 'next/link'
import { ReactNode } from 'react'

interface SectionProps {
	children: ReactNode
	title?: string
	postTitle?: string
	bg?: string
	height?: string
	postTitleLink?: string
}

export const Section = ({
	children,
	title,
	postTitle,
	bg,
	height,
	postTitleLink,
}: SectionProps) => {
	return (
		<div className={`w-full ${height && height} ${bg ? bg : 'bg-white'}`}>
			<div className='relative max-w-[320px] sm:max-w-[500px]  md:max-w-[720px] lg:max-w-[960px]  xl:max-w-[1248px] mx-auto'>
				{title && (
					<div
						className={`${
							postTitle &&
							'flex justify-between items-center mb-[13px] sm:mb-[39px]'
						}`}
					>
						<p className='text-[16px] sm:text-[33px] font-medium leading-[27px] sm:leading-[43px]'>
							{title}
						</p>
						{postTitle &&
							(postTitleLink ? (
								<Link href={postTitleLink}>
									<p className='text-[12px] sm:text-[20px] text-[#A18A68] font-bold leading-[26px] cursor-pointer active:opacity-80 duration-200'>
										{postTitle}
									</p>
								</Link>
							) : (
								<p className='text-[12px] sm:text-[20px] text-[#A18A68] font-bold leading-[26px] cursor-pointer active:opacity-80 duration-200'>
									{postTitle}
								</p>
							))}
					</div>
				)}
				{children}
			</div>
		</div>
	)
}
