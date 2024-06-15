import { ReactNode } from 'react'

interface SectionProps {
	children: ReactNode
	title?: string
	postTitle?: string
}

export const Section = ({ children, title, postTitle }: SectionProps) => {
	return (
		<div className='w-full bg-white'>
			<div className='relative max-w-[1248px] mx-auto'>
				{title && (
					<div
						className={`${postTitle && 'flex justify-between items-center'}`}
					>
						<p className='text-[33px] font-medium leading-[43px] mb-[39px]'>
							{title}
						</p>
						{postTitle && (
							<p className='text-[20px] text-[#A18A68] font-bold leading-[26px] cursor-pointer active:opacity-80 duration-200'>
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
