'use client'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const PaginationControls = () => {
	let path = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()
	const page = searchParams.get('page') ?? '1'
	const per_page = searchParams.get('per_page') ?? '4'

	return (
		<div className='flex gap-[8px]'>
			{blogs.slice(0, blogs.length / Number(per_page)).map((page, i) => (
				<div
					key={i}
					className={`flex justify-center items-center size-[40px] rounded-[4px] cursor-pointer ${
						Number(page) === i + 1
							? 'bg-black text-white'
							: 'text-black border-[1px] border-[#D8D8D8]'
					}`}
					// onClick={() =>
					// 	router.push(`${path}?page=${i + 1}&per_page=${per_page}`)
					// }
				>
					<p className='text-[14px]'>{i + 1}</p>
				</div>
			))}
			<div
				// onClick={() =>
				// 	router.push(`${path}?page=${Number(page) + 1}&per_page=${per_page}`)
				// }
				className='flex justify-center items-center size-[40px] rounded-[4px] cursor-pointer border-[1px] border-[#D8D8D8]'
			>
				<div className='relative w-[6px] h-[10px]'>
					<Image src={'/drop-arrow.svg'} fill alt='drop-arrow' />
				</div>
			</div>
		</div>
	)
}

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
