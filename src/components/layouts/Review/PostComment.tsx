'use client'
import { useReview } from '@/components/hooks/useReview'
import { useUser } from '@/components/hooks/useUser'
import Loading from '@/utils/Loading'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'

export const PostComment = () => {
	const [comment, setComment] = useState('')
	const [commentRating, setCommentRating] = useState(0)
	const [commentButtonTitle, setCommentButtonTitle] = useState('Submit')

	const [isPostedComment, setIsPostedComment] = useState(false)

	const path = usePathname()

	// ID ТЕКУЩЕГО ТОВАРА
	const nowPath = path.split('/')[2]

	// GET USER DATA
	const { user } = useUser()

	const { userReview, mutateAllReviews, addUserComment, commentWarning } =
		useReview()

	// ОСТАВИТЬ КОММЕНТАРИЙ
	const handleComment = async () => {
		setCommentButtonTitle('Loading...')
		setIsPostedComment(true)
		const response = await addUserComment(comment)
		if (response?.data) {
			mutateAllReviews((prevData: any) => [
				...prevData,
				{
					user: user?._id,
					product: nowPath,
					feedback: comment,
				},
			])
			setCommentButtonTitle('Submit')
		} else {
			setCommentButtonTitle('Error!')
			setTimeout(() => {
				setCommentButtonTitle('Submit')
			}, 1500)
			setIsPostedComment(false)
		}
	}

	return (
		<div className='overflow-x-hidden'>
			<div
				className={`duration-500 delay-150 ${
					isPostedComment && !commentWarning
						? 'opacity-100'
						: 'opacity-0 absolute -z-10 mt-[-40px]'
				}`}
			>
				<Loading />
			</div>
			{/* ОСТАВИТЬ СВОЙ ОТЗЫВ */}
			<div
				className={`w-full lg:w-[400px] xl:w-[580px] duration-500 ease-in-out ${
					userReview?.feedback ? 'hidden' : ''
				} ${isPostedComment && !commentWarning ? 'ml-[100%] opacity-0' : ''} `}
			>
				<p className='text-[16px] lg:text-[20px] leading-[26px]'>
					Add a Review
				</p>
				<p className='text-[12px] lg:text-[13px] text-[#707070] lg:leading-[30px] mb-[15px] lg:mb-[46px]'>
					Your email address will not be published. Required fields are marked *
				</p>
				<p className='text-[12px] lg:text-[14px] text-[#707070] lg:leading-[22px] mb-[15px] lg:mb-[30px]'>
					Your Review*
				</p>
				<div className='flex flex-col gap-[46px] mb-[24px]'>
					<Input state={comment} setState={setComment} />
				</div>
				<p className='text-[12px] lg:text-[14px] text-[#707070] mb-[13px]'>
					Your Rating*
				</p>
				<div className='flex gap-[10px] mb-[20px] xl:mb-[48px]'>
					{star.map((i) => (
						<FaStar
							key={i}
							color={commentRating === i ? '' : ''}
							className={`size-[14px] lg:size-[18px] cursor-pointer`}
						/>
					))}
				</div>
				<div className='flex flex-col lg:flex-row items-center gap-[20px] mb-[48px] lg:mb-0'>
					<div className='w-full lg:w-[122px]'>
						<Button onClick={handleComment} title={commentButtonTitle} />
					</div>
					<div
						className={`text-red-500 font-bold duration-300 w-full lg:w-[200px] xl:w-[350px] ${
							commentWarning
								? ''
								: 'opacity-0 ml-[-60px] absolute -z-20 scale-[0.95]'
						}`}
					>
						{commentWarning}
					</div>
				</div>
			</div>
			{/* POSTED COMMENT */}
			<div
				className={`w-full lg:w-[400px] xl:w-[580px] mb-[48px] lg:mb-0 duration-300 pl-[10px] ${
					userReview?.feedback ? '' : 'ml-[100%] fixed'
				}`}
			>
				<div className='flex items-center gap-[16px] mb-[8px] lg:mb-[16px]'>
					<p className='text-[14px] md:text-[16px] lg:text-[20px]'>
						{user?.username} (You)
					</p>
					<p className='text-[12px] md:text-[14px] text-[#707070]'>
						{userReview && userReview?.date.slice(0, 10)}
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
					{userReview?.feedback}
				</p>
			</div>
		</div>
	)
}

const star = [1, 2, 3, 4, 5]
