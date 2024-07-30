export const ProductLoading = () => {
	return (
		<div className='pageLoadMove'>
			<div
				className={`flex flex-col lg:flex-row gap-[20px] xl:gap-[62px] mb-[21px] lg:mb-[36px] duration-300 ease-in-out`}
			>
				{/* Главный слайдер и боковой для привью */}
				<div className='flex md:gap-[40px] lg:gap-[15px] xl:gap-[39px]'>
					<div className='hidden md:block md:h-[540px] xl:h-[600px] w-[120px] 	bg-[#ededed] rounded-[12px] animate-pulse'></div>
					<div className='w-full h-[450px] md:h-[540px] md:w-[500px] xl:h-[600px] xl:w-[540px]	bg-[#ededed] rounded-[12px] animate-pulse'></div>
				</div>
				{/* О ТОВАРЕ */}
				<div>
					{/* НАЗВАНИЕ ТОВАРА И ПРАЙС */}
					<div className='w-[177px] h-[40px] bg-[#ededed] rounded-[8px] animate-pulse'></div>
					<div className='w-[100px] h-[20px] bg-[#ededed] rounded-[4px] animate-pulse mt-[10PX]'></div>
					{/* ОЦЕНКА ТОВАРА */}
					<div className='hidden lg:flex items-center gap-[24px] my-[30px] xl:mt-[64px] w-[292px] h-[47px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
					<div className='flex flex-col-reverse lg:flex-col'>
						{/* ОПИСАНИЕ */}
						<div className='border-b-[1px] border-b-[#D8D8D8] pb-[14px] md:pb-0 md:border-none bg-[#ededed] rounded-[12px] animate-pulse w-full md:w-[320px] xl:w-[484px] h-[108px] mt-[30px]'></div>
						{/* КОПКА ДОБАВИТЬ В КОРЗИНУ И (ВЫБОРА КОЛ-ВА НА PC) */}
						<div className='flex mt-[25px] xl:mt-[49px]'>
							<div className='hidden lg:flex items-center justify-center w-[102px] h-[53px] rounded-[4px] mr-[23px] bg-[#ededed] animate-pulse'>
								<div className='p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300'>
									<div className='w-[9px] h-[1px] bg-[#707070]'></div>
								</div>
								<div className='flex justify-center items-center px-[15p] size-[24px]'></div>
								<div className='p-[10px] border border-transparent active:border-[#00000034] cursor-pointer rounded-[4px] duration-300'>
									<div className='flex justify-center items-center w-[9px] h-[1px] bg-[#707070] cursor-pointer'>
										<div className='w-[1px] h-[9px] bg-[#707070]'></div>
									</div>
								</div>
							</div>
							<div className='w-full h-[53px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
						</div>
						{/* МЕТА ИНФА О ТОВАРЕ */}
						<div className='hidden lg:block mt-[40px] xl:mt-[80px] w-[242px] h-[117px]'></div>
					</div>
				</div>
			</div>
			{/* BLOCK DESCRIPTION */}
			<div className='hidden lg:block mb-[56px] w-full h-[80px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
			{/* ОПИСАНИЕ */}
			<div>
				<div className=' mb-[16px] w-full h-[23px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
				<div className=' mb-[16px] w-[75%] h-[23px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
				<div className=' mb-[16px] w-[90%] h-[23px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
				<div className=' mb-[16px] w-full h-[23px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
				<div className=' mb-[16px] w-full h-[23px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
				<div className=' mb-[16px] w-[65%] h-[23px] bg-[#ededed] rounded-[4px] animate-pulse'></div>
			</div>
		</div>
	)
}
