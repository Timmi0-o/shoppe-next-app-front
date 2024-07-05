'use client'
import { fetcher } from '@/utils/fetcher'
import axios from 'axios'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useSWR from 'swr'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'

type ReviewData = {
	_id: string
	product: string
	user: string
	feedback: string
	date: string
}

export const PostComment = () => {
	const path = usePathname()

	// ID ТЕКУЩЕГО ТОВАРА
	const nowPath = path.split('/')[2]

	const [comment, setComment] = useState('')
	const [commentRating, setCommentRating] = useState(0)
	const [commentButtonTitle, setCommentButtonTitle] = useState('Submit')

	const [commentWarning, setCommentWarning] = useState<React.ReactNode>('')

	// ПОЛНОСТЬЮ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
	const {
		data: userData,
		error: userError,
		isLoading: userIsLoading,
	} = useSWR(
		() => ({
			url: `${process.env.BACK_PORT}auth`,
			post: localStorage.getItem('token')
				? { token: localStorage.getItem('token') }
				: undefined,
		}),
		fetcher
	)

	// ДАННЫЕ О ОТЗЫВЕ ПОЛЬЗОВАТЕЛЯ
	const {
		data: reviewData,
		error: reviewError,
		isLoading: reviewIsLoading,
	} = useSWR(
		{ url: `${process.env.BACK_PORT}review/${nowPath}/${userData?._id}` },
		fetcher
	)

	console.log('userData', userData)
	console.log('reviewData', reviewData)

	// ОСТАВИТЬ КОММЕНТАРИЙ
	const handleComment = async () => {
		if (!comment) {
			return setCommentWarning(
				<div className='text-[14px] w-full md:w-[250px] xl:w-[400px]'>
					Комментарий не может быть пустым
				</div>
			)
		}
		if (userData === undefined) {
			return setCommentWarning(
				<div className='text-[14px] w-full lg:w-[250px] xl:w-[400px]'>
					Комментарии могут оставлять только зарегистрированные пользователи,
					<Link href={'/account'}>
						<span className='text-black underline ml-[5px]'>войдите!</span>
					</Link>
				</div>
			)
		}
		setCommentButtonTitle('Loading...')
		try {
			const response = (
				await axios.post(`${process.env.BACK_PORT}review/create`, {
					user: userData?._id,
					product: nowPath,
					feedback: comment,
				})
			).data

			if (response) {
				setComment('')
			}
			setCommentButtonTitle('Submit')
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}

	return (
		<div>
			{/* ОСТАВИТЬ СВОЙ ОТЗЫВ */}
			<div
				className={`w-full lg:w-[400px] xl:w-[580px] ${
					reviewData ? 'hidden' : ''
				} `}
			>
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
						<Button onClick={handleComment} title={commentButtonTitle} />
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
			{/* НАПИСАННЫЙ КОММЕНТАРИЙ */}
			<div
				className={`w-full lg:w-[400px] xl:w-[580px] mb-[48px] lg:mb-0  ${
					reviewData ? '' : 'ml-[100%] fixed'
				}`}
			>
				<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
					<p className='text-[14px] md:text-[16px] lg:text-[20px]'>
						{userData?.username} (You)
					</p>
					<p className='text-[12px] md:text-[14px] text-[#707070]'>
						{reviewData && reviewData?.date.slice(0, 10)}
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
					{reviewData?.feedback}
				</p>
			</div>
		</div>
	)
}

const star = [1, 2, 3, 4, 5]
