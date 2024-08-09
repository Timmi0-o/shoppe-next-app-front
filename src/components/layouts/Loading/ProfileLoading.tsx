export const ProfileLoading = () => {
	return (
		<div className={`flex flex-col items-center duration-300`}>
			{/* USERNAME */}
			<div className='mb-[24px] lg:mb-[64px] w-[250px] h-[43px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
			{/* NAVIGATION */}
			<div className='flex items-center justify-start pl-[20px] gap-[10px] w-full h-[48px] lg:h-[60px] rounded-[5px] lg:rounded-[8px] mb-[50px] bg-[#ebebeb] animate-pulse'>
				<div className='h-[30px] w-[120px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
				<div className='h-[30px] w-[200px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
				<div className='h-[30px] w-[80px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
				<div className='h-[30px] w-[140px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
				<div className='h-[30px] w-[100px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
			</div>
			{/* DASHBOARD  */}
			<div className='flex flex-col gap-[20px] w-full'>
				<div className='w-[650px] h-[23px] bg-[#ededed] rounded-[8px] animate-pulse'></div>
				<div className='w-full h-[23px] bg-[#ededed] rounded-[8px] animate-pulse'></div>
			</div>
		</div>
	)
}
