import Image from 'next/image'
import { ReactNode, useState } from 'react'

interface DropMenuMobileProps {
	title: string
	dropLink: ReactNode
}

export const DropMenuMobile = ({ title, dropLink }: DropMenuMobileProps) => {
	const [isDropActive, setIsDropActive] = useState(false)
	return (
		<div
			onClick={() => setIsDropActive(!isDropActive)}
			className={`w-full flex flex-col gap-[10px] duration-200 ${
				isDropActive ? 'h-fit' : 'h-[20px]'
			} `}
		>
			<div className='flex justify-between items-center'>
				<p>{title}</p>
				<div className='relative w-[8] h-[16px]'>
					<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
				</div>
			</div>
			<div
				className={`text-[12px] duration-200 border-[1px] border-[#00000047] rounded-[6px] p-[5px] ${
					isDropActive ? 'opacity-100' : ' opacity-0 z-[-1]'
				}`}
			>
				{dropLink}
			</div>
		</div>
	)
}
