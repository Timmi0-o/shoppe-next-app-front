import { Section } from '@/components/ui/Section'

export default function Loading() {
	return (
		<Section>
			<div className={`flex flex-col items-center duration-300`}>
				{/* My account */}
				<div className='text-[20px] lg:text-[33px] text-center mb-[24px] lg:mb-[64px] w-[185px] h-[43px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
				{/* Log Reg variable */}
				<div className='flex items-center justify-center w-full h-[48px] sm:w-[500px] lg:h-[60px] rounded-[5px] lg:rounded-[8px] mb-[87px] lg:mb-[131px]  bg-[#ededed] animate-pulse'></div>
				{/* ВЫВОД ОШИБОК ВАЛИДАЦИИ */}
				{/* ВОЙТИ В АККАУНТ */}
				<div className='w-full sm:w-[500px] duration-300'>
					<div
						className={`flex flex-col gap-[46px] duration-300 h-[180px] lg:h-[200px]`}
					>
						<div className='w-full h-[43px]  bg-[#ededed] rounded-[12px] animate-pulse'></div>
						<div className='w-full h-[43px]  bg-[#ededed] rounded-[12px] animate-pulse'></div>
						<div className='w-full h-[43px]  bg-[#ededed] rounded-[12px] animate-pulse'></div>
					</div>
					<div className='flex items-center gap-[8px] mt-[15px] w-full mb-[12px] lg:mb-[85px] h-[20px]  bg-[#ededed] rounded-[12px] animate-pulse'></div>
					{/* Button log reg */}
					<div className='w-full md:w-[500px] h-[33px] md:h-[53px]  bg-[#ededed] rounded-[12px] animate-pulse'></div>
				</div>
			</div>
		</Section>
	)
}
