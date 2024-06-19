import { MouseEventHandler } from 'react'

interface ButtonProps {
	title: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	addedClass?: string
	AddTitleClass?: string
}

export const Button = ({
	title,
	onClick,
	addedClass,
	AddTitleClass,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`flex justify-center items-center w-full h-[32px] lg:h-[53px] rounded-[4px] border border-[#000000] active:bg-black active:text-white xl:hover:bg-black xl:hover:text-white duration-200 ease-out active:scale-[0.99] ${addedClass}`}
		>
			<p
				className={`text-[12px] leading-[20px] font-normal lg:text-[16px] lg:font-bold lg:leading-[21px] duration-300 ${AddTitleClass}`}
			>
				{title}
			</p>
		</button>
	)
}
