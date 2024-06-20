import { Dispatch, SetStateAction } from 'react'

interface RightsProps {
	rightsText: string
	rightsState: boolean
	rightsSetState: Dispatch<SetStateAction<boolean>>
}

export const Rights = ({
	rightsText,
	rightsState,
	rightsSetState,
}: RightsProps) => {
	return (
		<div
			onClick={() => rightsSetState(!rightsState)}
			className='flex gap-[8px] w-full cursor-pointer'
		>
			<div
				className={`size-[18px] border-[1px] border-black duration-300 ease-in ${
					rightsState && 'bg-black'
				}`}
			></div>
			<p className='w-fit text-[12px] text-[#707070] mb-[26px]'>{rightsText}</p>
		</div>
	)
}
