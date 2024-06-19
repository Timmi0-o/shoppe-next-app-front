import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Section } from '../ui/Section'

export const Reviews = () => {
	const [comment, setComment] = useState('')
	const [names, setNames] = useState('')
	const [email, setEmail] = useState('')
	return (
		<Section>
			<div className='flex flex-col lg:flex-row gap-[40px] lg:gap-[85px]'>
				<div className='w-full lg:w-[580px]'>
					<div className='sticky top-0 flex justify-between text-[16px] lg:text-[20px] font-normal leading-[26px] mb-[20px] lg:mb-[76px]'>
						<p>{comments.length} Reviews for lira earings</p>
						<p className=' text-[13px] lg:text-[15px] text-[#a18a68] cursor-pointer'>
							All reviews
						</p>
					</div>
					<div className='h-[450px] lg:h-[500px] overflow-scroll lg:overflow-hidden'>
						{comments.slice(0, 2).map((comment, i) => (
							<div
								key={i}
								className={` ${
									comments.slice(0, 2).length > i + 1
										? 'pb-[39px] border-b-[1px] border-b-[#D8D8D8] mb-[24px]'
										: ''
								}`}
							>
								<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
									<p className='text-[16px] lg:text-[20px]'>
										{comment.userName}
									</p>
									<p className='text-[14px] text-[#707070]'>{comment.date}</p>
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
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet.
								</p>
							</div>
						))}
					</div>
				</div>
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
					<div className='flex gap-[8px] cursor-pointer'>
						<div className='size-[18px] border-[1px] border-black'></div>
						<p className='text-[12px] text-[#707070] mb-[46px]'>
							Save my name, email, and website in this browser for the next time
							I comment
						</p>
					</div>
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

const comments = [
	{ userName: 'Scarlet withch', date: '6 May, 2020' },
	{ userName: 'Xyi chop', date: '12 April, 2019' },
	{ userName: 'Madison kill', date: '8 May, 2020' },
	{ userName: 'Chocha ale', date: '24 August, 2023' },
	{ userName: 'Naxer xer', date: '3 October, 2020' },
]
