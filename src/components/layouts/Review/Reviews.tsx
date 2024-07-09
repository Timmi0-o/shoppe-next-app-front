'use client'
import { Button } from '@/components/ui/Button'
import { fetcher } from '@/utils/fetcher'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useSWR, { SWRResponse } from 'swr'
import { Section } from '../../ui/Section'

interface Reviews {
	feedback: string
	date: string
	user: {
		username: string
	}
}

export const Reviews = () => {
	const path = usePathname()
	const nowPath = path.split('/')[2]

	const { data, error, isLoading }: SWRResponse<any, any, any> = useSWR(
		{ url: `${process.env.BACK_PORT}review/${nowPath}` },
		fetcher
	)

	const [buttonTitle, setButtonTitle] = useState('All reviews')

	return (
		<Section bg='bg-transparent'>
			<div className='flex flex-col lg:flex-row gap-[40px] lg:gap-[85px]'>
				{data?.length ? (
					<div className='w-full lg:w-[400px] xl:w-[580px]'>
						<div className='sticky top-0 flex justify-between text-[14px] md:text-[16px] lg:text-[20px] font-normal leading-[26px] mb-[20px] lg:mb-[76px]'>
							<p>{data.length} Reviews for lira earings</p>
							<Link href={`${nowPath}/reviews`}>
								<p className='text-[13px] lg:text-[15px] text-[#a18a68] cursor-pointer'>
									All reviews
								</p>
							</Link>
						</div>
						<div className='h-[360px] lg:h-[400px] overflow-scroll lg:overflow-hidden'>
							{data.slice(0, 2).map((comment: Reviews, i: number) => (
								<div
									key={i}
									className={` ${
										data.slice(0, 2).length > i + 1
											? 'pb-[39px] border-b-[1px] border-b-[#D8D8D8] mb-[24px]'
											: ''
									}`}
								>
									<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
										<p className='text-[14px] md:text-[16px] lg:text-[20px]'>
											{comment.user.username}
										</p>
										<p className='text-[12px] md:text-[14px] text-[#707070]'>
											{comment.date.slice(0, 10)}
										</p>
									</div>
									<div className='flex gap-[4px] md:gap-[10px] mb-[18px] lg:mb-[24px]'>
										{star.map((i) => (
											<FaStar
												key={i}
												className='size-[12px] md:size-[14px] lg:size-[18px] cursor-pointer text-[#000000]'
											/>
										))}
									</div>
									<p className='text-[12px] md:text-[16px] text-[#707070]'>
										{comment.feedback.slice(0, 120)}...
									</p>
								</div>
							))}
						</div>
					</div>
				) : (
					<div className='w-full lg:w-[580px]'>
						<p className='text-[18px] lg:text-[28px] text-center text-[#4d4d4d]'>
							There are no comments here yet...
						</p>
					</div>
				)}
			</div>
			<Button
				onClick={() => setButtonTitle('Loading...')}
				href={`${nowPath}/reviews`}
				title={buttonTitle}
			/>
		</Section>
	)
}
const star = [1, 2, 3, 4, 5]
