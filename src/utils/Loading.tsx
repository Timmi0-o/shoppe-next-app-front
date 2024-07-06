import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading() {
	return (
		<div className={`flex justify-center items-center w-full`}>
			<div className={`flex items-center mb-[40px] justify-center w-full `}>
				<AiOutlineLoading3Quarters
					className={`animate-spin size-[30px] lg:size-[60px] `}
				/>
			</div>
		</div>
	)
}
