'use client'
import { fetcher } from '@/utils/fetcher'
import axios from 'axios'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useSWR, { mutate } from 'swr'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'

export const PostComment = () => {
	const path = usePathname()

	// ID ТЕКУЩЕГО ТОВАРА
	const nowPath = path.split('/')[2]

	const [comment, setComment] = useState('')
	const [commentRating, setCommentRating] = useState(0)

	// const [names, setNames] = useState('')
	// const [email, setEmail] = useState('')

	// const [rights, setRights] = useState(false)

	const [commentWarning, setCommentWarning] = useState<React.ReactNode>('')

	const { data, error, isLoading } = useSWR(
		() => ({
			url: `${process.env.BACK_PORT}auth`,
			post: localStorage.getItem('token')
				? { token: localStorage.getItem('token') }
				: undefined,
		}),
		fetcher
	)

	const handleComment = async () => {
		if (comment === '') {
			return setCommentWarning(
				<div className='text-[14px] w-full md:w-[250px] xl:w-[400px]'>
					Комментарий не может быть пустым
				</div>
			)
		}
		if (data === undefined) {
			return setCommentWarning(
				<div className='text-[14px] w-full lg:w-[250px] xl:w-[400px]'>
					Комментарии могут оставлять только зарегистрированные пользователи,
					<Link href={'/account'}>
						<span className='text-black underline ml-[5px]'>войдите!</span>
					</Link>
				</div>
			)
		}

		try {
			const response = await axios.post(
				`${process.env.BACK_PORT}review/create`,
				{
					user: data._id,
					product: nowPath,
					feedback: comment,
				}
			)

			if (response) {
				setComment('')
				mutate({ url: `${process.env.BACK_PORT}review/${nowPath}` })
			}
		} catch (error: any) {
			console.log(error.message)
		}
	}

	// console.log('data', data)

	return (
		<div>
			{/* ОСТАВИТЬ СВОЙ ОТЗЫВ */}
			<div className='w-full lg:w-[400px] xl:w-[580px]'>
				<p className='text-[20px] leading-[26px]'>Add a Review</p>
				<p className='text-[13px] text-[#707070] leading-[30px] mb-[46px]'>
					Your email address will not be published. Required fields are marked *
				</p>
				<p className='text-[14px] text-[#707070] leading-[22px] mb-[30px]'>
					Your Review*
				</p>
				<div className='flex flex-col gap-[46px] mb-[24px]'>
					<Input state={comment} setState={setComment} />
				</div>
				<p className='text-[14px] text-[#707070] mb-[13px]'>Your Rating*</p>
				<div className='flex gap-[10px] mb-[20px] xl:mb-[48px]'>
					{star.map((i) => (
						<FaStar
							key={i}
							color={commentRating === i ? '' : ''}
							className={`size-[18px] cursor-pointer`}
						/>
					))}
				</div>
				<div className='flex flex-col lg:flex-row items-center gap-[20px] mb-[48px] lg:mb-0'>
					<div className='w-full lg:w-[122px]'>
						<Button onClick={handleComment} title='Submit' />
					</div>
					<div
						className={`text-red-400 font-bold duration-300 ${
							commentWarning ? 'opacity-100' : 'opacity-0 ml-[-100%] absolute'
						}`}
					>
						{commentWarning}
					</div>
				</div>
			</div>
			{/* ОСТАВИТЬ СВОЙ ОТЗЫВ (ONLY MOBILE) */}
			{/* <div className='block lg:hidden w-full'>
				<p className='text-[20px] leading-[26px] mb-[5px]'>Add a Review</p>
				<p className='text-[13px] text-[#707070] leading-[20px] mb-[26px]'>
					Your email address will not be published. Required fields are marked *
				</p>
				<p className='text-[14px] text-[#707070] leading-[22px]'>
					Your Review*
				</p>
				<div className='flex flex-col gap-[26px] mb-[24px]'>
					<Input type='text' state={comment} setState={setComment} />
				</div>
				<p className='text-[14px] text-[#707070] mb-[13px]'>Your Rating*</p>
				<div className='flex gap-[10px] mb-[28px]'>
					{star.map((i) => (
						<FaStar key={i} className='size-[18px] cursor-pointer fill-white' />
					))}
				</div>
				<div className='w-full mb-[28px]'>
					<Button title='Submit' />
				</div>
			</div> */}
		</div>
	)
}

const star = [1, 2, 3, 4, 5]
