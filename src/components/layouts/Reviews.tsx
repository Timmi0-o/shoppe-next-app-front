'use client'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Section } from '../ui/Section'
import { Rights } from './Rights'

interface Reviews {
	feedback: string
	date: string
	user: {
		username: string
	}
}

export const Reviews = () => {
	// ТЕКУЩИЙ ID ПРОДУКТА
	const path = usePathname()
	const nowPath = path.split('/')[2]

	const [comment, setComment] = useState('')
	const [names, setNames] = useState('')
	const [email, setEmail] = useState('')

	const [rights, setRights] = useState(false)

	const [reviews, setReviews] = useState<Reviews[]>()

	// ПОЛУЧЕНИЕ ТОВАРА ИЗ БД
	useEffect(() => {
		const getReviews = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/review/${nowPath}`
				)
				setReviews(response.data)
			} catch (error) {
				console.error('Error fetching review:', error)
			}
		}
		getReviews()
	}, [nowPath])

	// console.log('reviews', reviews)

	return (
		<Section>
			<div className='flex flex-col lg:flex-row gap-[40px] lg:gap-[85px]'>
				{reviews?.length ? (
					<div className='w-full lg:w-[580px]'>
						<div className='sticky top-0 flex justify-between text-[16px] lg:text-[20px] font-normal leading-[26px] mb-[20px] lg:mb-[76px]'>
							<p>{reviews.length} Reviews for lira earings</p>
							<p className=' text-[13px] lg:text-[15px] text-[#a18a68] cursor-pointer'>
								All reviews
							</p>
						</div>
						<div className='h-[400px] lg:h-[500px] overflow-scroll lg:overflow-hidden'>
							{reviews.slice(0, 2).map((comment, i) => (
								<div
									key={i}
									className={` ${
										reviews.slice(0, 2).length > i + 1
											? 'pb-[39px] border-b-[1px] border-b-[#D8D8D8] mb-[24px]'
											: ''
									}`}
								>
									<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
										<p className='text-[16px] lg:text-[20px]'>
											{comment.user.username}
										</p>
										<p className='text-[14px] text-[#707070]'>
											{comment.date.slice(0, 10)}
										</p>
									</div>
									<div className='flex gap-[10px] mb-[18px] lg:mb-[24px]'>
										{star.map((i) => (
											<FaStar
												key={i}
												className='size-[14px] lg:size-[18px] cursor-pointer text-[#000000]'
											/>
										))}
									</div>
									<p className='text-[16px] text-[#707070]'>
										{comment.feedback.slice(0, 150)}
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
				{/* ОСТАВИТЬ СВОЙ ОТЗЫВ */}
				<div className='hidden lg:block w-[580px]'>
					<p className='text-[20px] leading-[26px]'>Add a Review</p>
					<p className='text-[13px] text-[#707070] leading-[30px] mb-[46px]'>
						Your email address will not be published. Required fields are marked
						*
					</p>
					<p className='text-[14px] text-[#707070] leading-[22px] mb-[30px]'>
						Your Review*
					</p>
					<div className='flex flex-col gap-[46px] mb-[24px]'>
						<Input state={comment} setState={setComment} />
						<Input
							state={names}
							setState={setNames}
							placeholder='Enter your name*'
						/>
						<Input
							state={email}
							setState={setEmail}
							placeholder='Enter your Email*'
							type='email'
						/>
					</div>
					<Rights
						rightsState={rights}
						rightsSetState={setRights}
						rightsText='Save my name, email, and website in this browser for the next time I comment'
					/>
					<p className='text-[14px] text-[#707070] mb-[13px]'>Your Rating*</p>
					<div className='flex gap-[10px] mb-[48px]'>
						{star.map((i) => (
							<FaStar key={i} className='size-[18px] cursor-pointer' />
						))}
					</div>
					<div className='w-[122px]'>
						<Button title='Submit' />
					</div>
				</div>
			</div>
		</Section>
	)
}

const star = [1, 2, 3, 4, 5]
