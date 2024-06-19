import Image from 'next/image'
import { ReactNode, useState } from 'react'

interface DropMenuMobileProps {
	title: string
	dropLink: ReactNode
	heightCustom?: string
}

export const DropMenuMobile = ({
	title,
	dropLink,
	heightCustom,
}: DropMenuMobileProps) => {
	const [isDropActive, setIsDropActive] = useState(false)
	return (
		<div
			onClick={() => setIsDropActive(!isDropActive)}
			className={`w-full flex flex-col gap-[10px] duration-300 ${
				isDropActive
					? `${heightCustom ? heightCustom : 'h-[150px]'}`
					: 'h-[20px]'
			} `}
		>
			<div className='flex justify-between items-center'>
				<p>{title}</p>
				<div
					className={`relative w-[10px] h-[18px] duration-300 ease-out ${
						isDropActive ? 'rotate-180' : ''
					}`}
				>
					<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
				</div>
			</div>
			<div
				className={`text-[13px] duration-300 border-[1px] border-[#00000047] rounded-[6px] p-[5px] ${
					isDropActive
						? 'opacity-100 h-fit scale-[1]'
						: ' opacity-0 z-[-1] h-0 scale-[0.9]'
				}`}
			>
				{dropLink}
			</div>
		</div>
	)
}
