import { ReactNode } from 'react'

interface SideBarProps {
	title?: string
	titleMobile?: string
	children: ReactNode
}

export const SideBar = ({ title, children, titleMobile }: SideBarProps) => {
	return (
		<div className='mt-[24px] mb-[60px] md:mb-[120px]'>
			<p className='hidden md:block text-[33px] font-medium leading-[43px]'>
				{title}
			</p>
			<p className='block md:hidden text-[20px] font-medium leading-[26px]'>
				{titleMobile}
			</p>
			{children}
		</div>
	)
}
