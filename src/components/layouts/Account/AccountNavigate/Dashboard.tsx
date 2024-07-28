'use client'
import { useUser } from '@/components/hooks/useUser'
import Link from 'next/link'

export const Dashboard = () => {
	const { user, deleteToken } = useUser()

	return (
		<div className='text-[12px] md:text-[16px]'>
			<div className='flex flex-wrap gap-[2px] mb-[10px]'>
				Hello {user?.username} (not {user?.username}?
				<Link
					onClick={() => {
						deleteToken()
					}}
					href={'/'}
				>
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
