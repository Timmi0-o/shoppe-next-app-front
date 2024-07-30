export const ReviewLoading = () => {
	return (
		<div
			className={`pageLoadMove flex flex-col lg:flex-row gap-[20px] xl:gap-[62px] mb-[21px] lg:mb-[96px] duration-300 ease-in-out`}
		>
			{/* GENERAL && SIDE SWIPER */}
			<div className='flex md:gap-[40px] lg:gap-[15px] xl:gap-[39px]'>
				<div className='hidden md:block md:h-[540px] xl:h-[600px] w-[120px] 	bg-[#ededed] rounded-[12px] animate-pulse'></div>
				<div className='w-full h-[450px] md:h-[540px] md:w-[500px] xl:h-[600px] xl:w-[540px]	bg-[#ededed] rounded-[12px] animate-pulse'></div>
			</div>
			{/* COMMENTS DATA */}
			<div className='flex flex-col gap-[54px] w-full'>
				{Array.from({ length: 3 }).map((_, i) => (
					<div key={i} className='flex flex-col w-full'>
						<div>
							{/* USER & TIME */}
							<div className='flex gap-[10px] items-center'>
								<div className='w-[147px] h-[34px] bg-[#ededed] rounded-[8px] animate-pulse'></div>
								<div className='w-[87px] h-[14px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
							</div>
							{/* RATING  */}
							<div className='w-[87px] h-[24px] bg-[#ededed] rounded-[4px] animate-pulse mt-[24px] mb-[24px]'></div>
						</div>
						{/* COMMENTS  */}
						<div className='w-full'>
							<div className='w-full h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-[90%] h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-[70%] h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-full h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-[95%] h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-[85%] h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-full h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
							<div className='w-full h-[12px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10px]'></div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
