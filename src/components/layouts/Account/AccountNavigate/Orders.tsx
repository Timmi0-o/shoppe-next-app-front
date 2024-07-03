'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Notification } from '../../Notification'

export const Orders = () => {
	const [orders, setOrders] = useState([
		'7643980998990',
		'October 8,2021',
		'Delivered',
		'$ 105',
	])
	return (
		<div>
			<div className={`${orders.length ? 'hidden' : ''}`}>
				<Notification
					title='No order has been made yet.'
					btnTitle='BROWSE PRODUCT'
					linkHref='/shop'
					position='block'
				/>
			</div>
			<div
				className={`flex justify-between md:justify-normal md:flex-col gap-[24px] border-b-[1px] border-b-[#D8D8D8] duration-300 ${
					orders.length ? '' : 'opacity-0 ml-[-200px] absolute'
				}`}
			>
				<div className='grid grid-cols-1 gap-[24px] md:gap-0 md:grid-cols-5 pb-[16px] md:border-b-[1px] md:border-b-black'>
					{orderTitle.map((title, i) => (
						<p key={i} className='text-[12px] md:text-[16px] w-fit'>
							{title}
						</p>
					))}
				</div>
				<div className='grid grid-cols-1 gap-[24px] md:gap-0 md:grid-cols-5 pb-[16px]'>
					{orders.map((order, i) => (
						<p key={i} className='text-[12px] md:text-[16px] text-start'>
							{order}
						</p>
					))}
					<Link href={'/account/profile/view-order'}>
						<p className='text-[12px] text-[#A18A68] md:text-[16px] text-start cursor-pointer'>
							View Order
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

const orderTitle = ['ORDER NUMBER', 'DATE', 'STATUS', 'TOTAL', 'ACTIONS']
