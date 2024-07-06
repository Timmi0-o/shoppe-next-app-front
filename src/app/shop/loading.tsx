import { Section } from '@/components/ui/Section'
import { SideBar } from '@/components/ui/SideBar'

export default function Loading() {
	return (
		<Section>
			<SideBar>
				<div className='flex flex-col md:flex-row items-start gap-[16px] md:gap-[36px] mt-[16px] md:mt-[39px]'>
					{/* ФИЛЬТРЫ ДЛЯ ТОВАРОВ (ONLY PC) */}
					<div className='hidden md:flex flex-col gap-[39px] w-[262px] h-[450px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
					{/* ФИЛЬТРЫ ДЛЯ ТОВАРОВ (ONLY MOBILE) */}
					<div className='flex md:hidden items-center gap-[8px] w-[60px] h-[20px]'></div>
					{/* ТОВАРЫ */}
					<div className='flex justify-center w-full'>
						<div className={`flex justify-center duration-300 `}>
							<div className='flex sm:justify-center md:justify-normal flex-wrap gap-[8px] sm:gap-[16px] md:gap-[18px] xl:gap-[22px]'>
								{data.map((i) => (
									<div
										key={i}
										className='w-[156px h-[208px] sm:w-[180px] sm:h-[280px] md:w-[200px] md:h-[280px] lg:w-[200px] lg:h-[292px] xl:w-[300px] xl:h-[392px] mb-[31px] bg-[#ededed] rounded-[12px] animate-pulse'
									></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</SideBar>
		</Section>
	)
}

const data = [1, 2, 3, 4]
