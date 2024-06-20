'use client'
import { Section } from '@/components/ui/Section'
import { SideBar } from '@/components/ui/SideBar'
import { PaginationControls } from '@/utils/PaginationControls'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Blog() {
	// СТЕЙТЫ ДЛЯ ПОИСКА В SIDEBAR
	const [searchBlog, setSearchBlog] = useState('')

	// НОМЕР СТРАНИЦЫ И КОЛ-ВО ЭЛЕМЕНТОВ В ПАГИНАЦИИ
	const searchParams = useSearchParams()
	const page = searchParams.get('page') ?? '1'
	const per_page = searchParams.get('per_page') ?? '4'

	// ПЕРИОДЫ ДЛЯ ОПРЕДЕЛЕНИЯ ПО С КАКОГО ПО КАКОЙ СЛАЙСИТЬ
	const start = (Number(page) - 1) * Number(per_page)
	const end = start + Number(per_page)

	// МАССИВ С ТЕКУЩИМИ БЛОГАМИ
	const entries = blogs.slice(start, end)

	return (
		<Section>
			<SideBar title='Blog' titleMobile='Blog'>
				<div className='flex gap-[39px] mt-[39px] lg:mt-[36px]'>
					{/* SIDEBAR */}
					<div className='hidden lg:block'>
						<div className='flex justify-between items-center w-[261px] pb-[11px] border-b-[1px] border-b-[#D8D8D8]'>
							<input
								className='w-full outline-none bg-transparent placeholder:text-[#707070] text-[14px] font-normal leading-[22px] text-black'
								onChange={(e) => setSearchBlog(e.target.value)}
								type='text'
								value={searchBlog}
								placeholder='Search...'
							/>
							<div className='relative w-[19px] h-[19px]'>
								<Image src={'/search.svg'} fill alt='search' />
							</div>
						</div>
						<div className='mt-[62px]'>
							<p className='text-[20px] mb-[22px]'>Categories</p>
							<div className='flex flex-col gap-[10px]'>
								{categories.map((category, i) => (
									<Link href={category.link} key={i}>
										<p className='text-[16px] duration-300 ease-in-out text-[#707070] active:bg-[#d9d9d9] lg:active:bg-transparent lg:hover:ml-[10px] w-fit px-[5px] py-[2px] rounded-[4px]'>
											{category.title}
										</p>
									</Link>
								))}
							</div>
						</div>
					</div>
					{/* БЛОГИ */}
					<div className='flex justify-center flex-wrap gap-[39px] lg:gap-[48px]'>
						{entries.map((blog, i) => (
							<Link href={'/blog/details'} key={i}>
								<div className='w-full lg:w-[305px] xl:w-[450px] h-[340px] md:h-[550px] lg:h-[490px] rounded-[8px]'>
									<div className='relative w-full h-[192px] md:h-[450px] lg:h-[230px] xl:h-[300px] cursor-pointer'>
										<Image src={blog.src} fill alt='blog1' />
									</div>
									<div className='mt-[15px] lg:mt-[22px]'>
										<p className='text-[12px] md:text-[14px] text-[#707070] mb-[2px] lg:mb-[5px]'>
											Fashion - October 8, 2020
										</p>
										<p className='text-[16px] md:text-[20px]'>
											Top Trends From Spring
										</p>
										<p className='text-[12px] md:text-[16px] text-[#707070] mt-[5px] lg:mt-[15px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											faucibus augue, a maximus elit ex vitae libero...
										</p>
										<p className='text-[12px] lg:text-[16px] text-[#A18A68] mt-[15px] lg:mt-[24px] cursor-pointer'>
											Read More
										</p>
									</div>
								</div>
							</Link>
						))}
						{/* ПАГИНАЦИЯ */}
						<div className='w-full flex justify-center'>
							<PaginationControls />
						</div>
					</div>
				</div>
			</SideBar>
		</Section>
	)
}

const categories = [
	{ title: 'Fashion', link: '' },
	{ title: 'Style', link: '' },
	{ title: 'Accessories', link: '' },
	{ title: 'Season', link: '' },
]

const blogs = [
	{ src: '/blog1.png' },
	{ src: '/blog2.png' },
	{ src: '/blog3.png' },
	{ src: '/blog4.png' },
	{ src: '/blog3.png' },
	{ src: '/blog2.png' },
	{ src: '/blog4.png' },
	{ src: '/blog1.png' },
]
