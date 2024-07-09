import { Section } from '@/components/ui/Section'

export default function Loading() {
	return (
		<Section>
			<div>
				<div
					className={`flex flex-col lg:flex-row gap-[20px] xl:gap-[62px] mb-[21px] lg:mb-[96px] duration-300 ease-in-out`}
				>
					{/* Главный слайдер и боковой для привью */}
					<div className='flex md:gap-[40px] lg:gap-[15px] xl:gap-[39px]'>
						<div className='hidden md:block md:h-[540px] xl:h-[600px] w-[120px] 	bg-[#ededed] rounded-[12px] animate-pulse'></div>
						<div className='w-full h-[450px] md:h-[540px] md:w-[500px] xl:h-[600px] xl:w-[540px]	bg-[#ededed] rounded-[12px] animate-pulse'></div>
					</div>
					{/* О ТОВАРЕ */}
					<div>
						{/* НАЗВАНИЕ ТОВАРА И ПРАЙС */}
						<div className='w-[147px] h-[84px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
						{/* ОЦЕНКА ТОВАРА */}
						<div className='hidden lg:flex items-center gap-[24px] my-[30px] xl:mt-[64px] w-full md:w-[292px] h-[47px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
						<div className='flex flex-col-reverse lg:flex-col'>
							{/* ОПИСАНИЕ */}
							<div className='border-b-[1px] border-b-[#D8D8D8] pb-[14px] md:pb-0 md:border-none bg-[#ededed] rounded-[12px] animate-pulse w-full md:w-[300px] xl:w-[484px] h-[108px] mt-[30px]'></div>
							{/* КОПКА ДОБАВИТЬ В КОРЗИНУ И (ВЫБОРА КОЛ-ВА НА PC) */}
							<div className='flex mt-[25px] xl:mt-[49px]'>
								<div className='hidden lg:flex items-center justify-center w-[102px] h-[53px] rounded-[4px] mr-[23px] bg-[#ededed] animate-pulse'></div>
								<div className='w-full h-[53px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
							</div>
							{/* МЕТА ИНФА О ТОВАРЕ */}
							<div className='hidden lg:block mt-[40px] xl:mt-[80px] w-[242px] h-[117px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
						</div>
					</div>
				</div>
				{/* ОПИСАНИЕ, ДОП ИНФОРМАЦИЯ И ОТЗЫВЫ О ТОВАРЕ (ONLY PC) */}
				<div className='hidden lg:block mb-[96px] w-full h-[153px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
				{/* ОПИСАНИЕ, ДОП ИНФОРМАЦИЯ И ОТЗЫВЫ О ТОВАРЕ (ONLY MOBILE) */}
				<div className='flex flex-col gap-[9px] lg:hidden my-[16px] border-b-[1px] border-b-[#D8D8D8] pb-[15px] w-full h-[78px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
				{/* ОСТАВИТЬ КОММЕНТАРИЙ ONLY MOBILE */}
				<div className='block lg:hidden w-full h-[300px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
			</div>
		</Section>
	)
}
