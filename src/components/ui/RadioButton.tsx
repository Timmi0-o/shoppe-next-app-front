import Image from 'next/image'

interface RadioButtonProps {
	state: boolean
	// setState: Dispatch<SetStateAction<boolean>>
	title: string
	img?: string
	imgSize?: string
}

export const RadioButton = ({
	state,
	title,
	img,
	imgSize,
}: RadioButtonProps) => {
	return (
		<div className='cursor-pointer flex items-center gap-[8px]'>
			<div className='flex items-center justify-center size-[16px] rounded-full border-[1px] border-black'>
				<div
					className={`rounded-full duration-300 ease-in-out ${
						state
							? 'size-[6px] bg-black'
							: 'size-[0px] opacity-0 bg-transparent'
					}`}
				></div>
			</div>
			<div className='flex items-center gap-[8px]'>
				<p className='text-[12px] md:text-[16px]'>{title}</p>
				{img ? (
					<div className={`relative ${imgSize}`}>
						<Image src={img} fill alt='' />
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
