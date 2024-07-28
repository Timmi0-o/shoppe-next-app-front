export const LatestReviewLoading = () => {
	return (
		<div className={`w-full lg:w-[400px] xl:w-[580px]`}>
			<div className='sticky top-0 flex justify-between text-[14px] md:text-[16px] lg:text-[20px] font-normal leading-[26px] mb-[20px] lg:mb-[76px]'>
				{/* NUMBER REVIEWS  */}
				<div className='w-[140px] h-[20px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
				{/* LINK ALL REVIEWS  */}
				<div className='w-[60px] h-[15px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
			</div>
			<div className='h-[360px] lg:h-[400px] overflow-scroll lg:overflow-hidden'>
				{Array.from({ length: 2 }).map((_, i: number) => (
					<div
						key={i}
						className={` ${
							Array.from({ length: 2 }).length > i + 1
								? 'pb-[39px] border-b-[1px] border-b-[#D8D8D8] mb-[24px]'
								: ''
						}`}
					>
						{/* USERNAME && DATE  */}
						<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
							{/* USERNAME */}
							<div className='w-[140px] h-[20px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
							{/* DATE ADDING COMMENT  */}
							<div className='w-[40px] h-[15px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
						</div>
						{/* RATING  */}
						<div className='w-[80px] h-[15px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
						{/* FEEDBACK  */}
						<div className='flex flex-col gap-[10px] mt-[40px] w-full'>
							<div className='w-full h-[15px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
							<div className='w-[85%] h-[15px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
							<div className='w-[90%] h-[15px]	bg-[#ededed] rounded-[5px] animate-pulse'></div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
