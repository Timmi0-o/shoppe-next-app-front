export const LatestShopLoading = () => {
	return (
		<div className={`pageLoadMove flex justify-center mt-[60px]`}>
			<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[20px] md:gap-[30px] lg:gap-[52px] xl:gap-[57px]'>
				{Array.from({ length: 5 }).map((_, i: number) => (
					<div className='mb-[12px]' key={i}>
						<div className='size-[156px] sm:size-[180px] md:size-[220px] lg:size-[285px] xl:size-[370px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
						<div className='w-[100px] md:w-[150px] lg:w-[200px] h-[12px] md:h-[15px] lg:h-[20px] mt-[20px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
						<div className='w-[45px] md:w-[75px] lg:w-[100px] h-[12px] md:h-[15px] lg:h-[20px] mt-[20px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
					</div>
				))}
			</div>
		</div>
	)
}
