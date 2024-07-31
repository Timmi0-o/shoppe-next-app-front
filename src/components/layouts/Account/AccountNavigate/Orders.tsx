'use client'
import { useOrder } from '@/components/hooks/useOrder'
import { setOrderNumber } from '@/lib/reducers/Order'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { Notification } from '../../Notification'

export const Orders = () => {
	const { ordersPreview } = useOrder()
	const dispatch = useDispatch()
	return (
		<div>
			<div className={`${ordersPreview?.length ? 'hidden' : ''}`}>
				<Notification
					title='No order has been made yet.'
					btnTitle='BROWSE PRODUCT'
					href='/shop'
					position='block'
				/>
			</div>
			{/* PC ORDER DETAILS  */}
			<div
				className={`hidden md:flex justify-between md:justify-normal md:flex-col gap-[24px] border-b-[1px] border-b-[#D8D8D8] duration-300 ${
					ordersPreview?.length ? '' : 'opacity-0 ml-[-200px] absolute'
				}`}
			>
				<div className='grid grid-cols-1 gap-[24px] md:gap-0 md:grid-cols-5 pb-[16px] md:border-b-[1px] md:border-b-black'>
					{orderTitle.map((title, i) => (
						<p key={i} className='text-[12px] md:text-[16px] w-fit'>
							{title}
						</p>
					))}
				</div>

				{ordersPreview?.map((order, i) => (
					<div
						key={i}
						className='grid grid-cols-1 gap-[24px] md:gap-0 md:grid-cols-5 pb-[16px]'
					>
						<p className='text-[12px] md:text-[16px] text-start'>
							{order?.number}
						</p>
						<p className='text-[12px] md:text-[16px] text-start'>
							{order?.date.slice(0, 10)}
						</p>
						<p className='text-[12px] md:text-[16px] text-start'>
							{order?.status}
						</p>
						<p className='text-[12px] md:text-[16px] text-start'>
							{`$ ${order?.total}`}
						</p>
						<Link
							onClick={() => dispatch(setOrderNumber(order.number))}
							href={'/account/profile/view-order'}
						>
							<p className='text-[12px] text-[#A18A68] md:text-[16px] text-start cursor-pointer'>
								View Order
							</p>
						</Link>
					</div>
				))}
			</div>
			{/* MOBILE ORDER DETAILS  */}
			{ordersPreview?.map((order, i) => (
				<div
					key={i}
					className={`flex md:hidden justify-between md:justify-normal md:flex-col gap-[24px] duration-300 mb-[10px] ${
						i + 1 < ordersPreview.length
							? 'border-b-[1px] border-b-[#D8D8D8]'
							: ''
					} ${ordersPreview?.length ? '' : 'opacity-0 ml-[-200px] absolute'}`}
				>
					<div className='grid grid-cols-1 gap-[12px] pb-[16px] md:border-b-[1px] md:border-b-black'>
						{orderTitle.map((title, i) => (
							<p key={i} className='text-[12px] md:text-[16px] w-fit'>
								{title}
							</p>
						))}
					</div>

					<div key={i} className='grid grid-cols-1 gap-[12px] pb-[16px]'>
						<p className='text-[12px] md:text-[16px] text-start'>
							{order?.number}
						</p>
						<p className='text-[12px] md:text-[16px] text-start'>
							{order?.date.slice(0, 10)}
						</p>
						<p className='text-[12px] md:text-[16px] text-start'>
							{order?.status}
						</p>
						<p className='text-[12px] md:text-[16px] text-start'>
							{`$ ${order?.total}`}
						</p>
						<Link
							onClick={() => dispatch(setOrderNumber(order.number))}
							href={'/account/profile/view-order'}
						>
							<p className='text-[12px] text-[#A18A68] md:text-[16px] text-start cursor-pointer'>
								View Order
							</p>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

const orderTitle = ['ORDER NUMBER', 'DATE', 'STATUS', 'TOTAL', 'ACTIONS']
