import Image from 'next/image'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface DropMenuProps {
	title: string
	setTitle?: Dispatch<SetStateAction<string>>
	dropLink: ReactNode
	heightCustom?: string
	underline?: boolean
	list?: boolean
}

export const DropMenu = ({
	title,
	setTitle,
	dropLink,
	heightCustom,
	underline,
	list,
}: DropMenuProps) => {
	const [isDropActive, setIsDropActive] = useState(false)

	return (
		<div
			className={`w-full flex flex-col gap-[10px] duration-300 ${
				isDropActive
					? `${heightCustom ? heightCustom : 'h-[150px]'}`
					: 'h-[20px]'
			} `}
		>
			<div
				onClick={() => setIsDropActive(!isDropActive)}
				className={`flex justify-between items-center lg:cursor-pointer ${
					underline && 'border-b-[1px] border-b-[#D8D8D8] pb-[12px]'
				}`}
			>
				<p className='text-[12px] md:text-[16px]'>{title}</p>
				<div
					className={`relative w-[10px] h-[18px] duration-300 ease-out ${
						isDropActive ? 'rotate-180' : ''
					}`}
				>
					<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
				</div>
			</div>
			{/* ДЕФОЛТНОЕ МЕНЮ (NO LIST) */}
			<div
				className={` ${
					list && 'hidden'
				} text-[13px] duration-300 bg-[#f9f9f9] rounded-[6px] p-[5px] ${
					isDropActive
						? 'opacity-100 scale-[1] h-fit'
						: ' opacity-0 z-[-1] h-0 scale-[0.95]'
				}`}
			>
				{dropLink}
			</div>

			{/* ОПЦИОНАЛЬНОЕ ДРОП МЕНЮ СО СПИСКАМИ (LIST) */}
			<div
				className={`${
					list ? 'flex' : 'hidden'
				} flex-col gap-[23px] duration-300 ${
					isDropActive ? 'h-fit' : 'h-0 opacity-0 z-[-1] ml-[10px]'
				}`}
			>
				{dropLink &&
					Array.isArray(dropLink) &&
					dropLink.map((link: string, i: number) => (
						<div
							onClick={() => setTitle && setTitle(link)}
							className='text-[12px] text-[#707070] md:text-[14px] lg:text-[16px] py-[5px] rounded-[4px] cursor-pointer'
							key={i}
						>
							<div onClick={() => setTitle && setIsDropActive(false)}>
								{link}
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
