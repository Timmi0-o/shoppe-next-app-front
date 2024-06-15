import { ReactNode } from 'react'

interface SectionProps {
	children: ReactNode
	title?: string
	postTitle?: string
}

export const Section = ({ children, title, postTitle }: SectionProps) => {
	return (
		<div className='w-full bg-white'>
			<div className='relative max-w-[320px] sm:max-w-[500px]  md:max-w-[770px] lg:max-w-[960px]  xl:max-w-[1248px] mx-auto'>
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
						{postTitle && (
							<p className='text-[12px] sm:text-[20px] text-[#A18A68] font-bold leading-[26px] cursor-pointer active:opacity-80 duration-200'>
								{postTitle}
							</p>
						)}
					</div>
				)}
				{children}
			</div>
		</div>
	)
}
