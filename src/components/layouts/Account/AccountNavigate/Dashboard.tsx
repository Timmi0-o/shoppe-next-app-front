'use client'
import { fetcher } from '@/utils/fetcher'
import Link from 'next/link'
import useSWR from 'swr'

export const Dashboard = () => {
	// ПРОВЕРКА НАЛИЧИЯ ТОКЕНА НА КЛИЕНТЕ
	const token =
		typeof window !== 'undefined' ? localStorage.getItem('token') : undefined
	// ПРОВЕРКА ЛОГИНА
	const { data, error, isLoading } = useSWR(
		() => ({
			url: `${process.env.BACK_PORT}auth/${token}`,
		}),
		fetcher
	)
	return (
		<div className='text-[12px] md:text-[16px]'>
			<div className='flex flex-wrap gap-[2px] mb-[10px]'>
				Hello {data?.username} (not {data?.username}?
				<Link onClick={() => localStorage.setItem('token', '')} href={'/'}>
					<p className='text-[#A18A68]'>Log out</p>
				</Link>
				)
			</div>
			<div className='flex flex-wrap gap-[2px]'>
				From your account dashboard you can view your
				<p className='text-[#A18A68]'>recent orders</p>, manage your
				<p className='text-[#A18A68]'>shipping and billing addresses</p>, and
				edit your
				<p className='text-[#A18A68]'>password and account details</p>.
			</div>
		</div>
	)
}
