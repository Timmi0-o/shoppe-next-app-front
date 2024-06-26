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
			className='flex items-start gap-[8px] w-full cursor-pointer mb-[26px] mt-[11px]'
		>
			<div
				className={`size-[13px] lg:size-[18px] border-[1px] border-black duration-300 ease-in ${
					rightsState && 'bg-black'
				}`}
			></div>
			<p className='w-fit text-[12px] text-[#707070]'>{rightsText}</p>
		</div>
	)
}
