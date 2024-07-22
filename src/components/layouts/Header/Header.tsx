import { allertaStencil } from '@/utils/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import 'swiper/css'
import { InputSearch } from '../../ui/Input'
import { Section } from '../../ui/Section'
import { MobileCategory } from './MobileCategory'
import { Navigation } from './Navigation'

export const Header = () => {
	let path = usePathname()

	// Активна ссылка naw bar и добавляем бордер снизу шапки и бордер снизу link
	const [isNawActive, setIsNawActive] = useState<null | number>(null)

	// Стейты для поля поиска товаров
	const [searchText, setSearchText] = useState('')

	return (
		<Section>
			<div
				className={`flex justify-between items-center ease-out ${
					path !== '/' ? 'mb-[17px] lg:mb-[96px]' : 'mb-[17px] md:mb-0'
				} ${
					isNawActive !== null
						? 'lg:pt-[17px] md:border-b-[1px] md:border-b-[#D8D8D8] lg:pb-[12px] mt-[15px] lg:mt-[48px]'
						: 'mt-[15px] lg:mt-[64px] md:border-b-transparent'
				}`}
			>
				{/* LOGO */}
				<Link href={'/'}>
					<div
						onClick={() => setIsNawActive(null)}
						className={
							'flex text-[20px] sm:text-[28px] md:text-[35px] cursor-pointer ' +
							allertaStencil.className
						}
					>
						<p className='text-[#A18A68]'>S</p>HOPPE
					</div>
				</Link>
				{/* Навигация (naw bar, search, shop cart & burger) */}
				<Navigation isNawActive={isNawActive} setIsNawActive={setIsNawActive} />
			</div>
			<div className={'block lg:hidden mb-[39px]'}>
				{/* SEARCH INPUT ДЛЯ MOBILE */}
				<div className={`${path.includes('/product') ? 'hidden' : ''}`}>
					<InputSearch state={searchText} setState={setSearchText} />
				</div>
				{/* СПИСОК КАТЕГОРИЙ ТОВАРОВ ДЛЯ MOBILE */}
				<MobileCategory />
			</div>
		</Section>
	)
}
