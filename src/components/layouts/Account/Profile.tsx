'use client'
import { useUser } from '@/components/hooks/useUser'
import { Section } from '@/components/ui/Section'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AccountDetails } from './AccountNavigate/AccountDetails'
import { Addresses } from './AccountNavigate/Addresses'
import { Dashboard } from './AccountNavigate/Dashboard'
import { LogOut } from './AccountNavigate/LogOut'
import { Orders } from './AccountNavigate/Orders'

export const Profile = () => {
	const [isNavigateActive, setIsNavigateActive] = useState(0)

	// GET USER DATA
	const { user } = useUser()

	return (
		<>
			<Section>
				{/* LOADING  */}
				<div
					className={`flex flex-col items-center duration-300 ${
						!user ? 'block' : 'hidden'
					}`}
				>
					{/* USERNAME */}
					<div className='mb-[24px] lg:mb-[64px] w-[250px] h-[43px] bg-[#ededed] rounded-[12px] animate-pulse'></div>
					{/* NAVIGATION */}
					<div className='flex items-center justify-start pl-[20px] gap-[10px] w-full h-[48px] lg:h-[60px] rounded-[5px] lg:rounded-[8px] mb-[50px] bg-[#ebebeb] animate-pulse'>
						<div className='h-[30px] w-[120px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
						<div className='h-[30px] w-[200px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
						<div className='h-[30px] w-[80px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
						<div className='h-[30px] w-[140px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
						<div className='h-[30px] w-[100px] rounded-[5px] bg-[#f8f8f8] animate-pulse'></div>
					</div>
					{/* DASHBOARD  */}
					<div className='flex flex-col gap-[20px] w-full'>
						<div className='w-[650px] h-[23px] bg-[#ededed] rounded-[8px] animate-pulse'></div>
						<div className='w-full h-[23px] bg-[#ededed] rounded-[8px] animate-pulse'></div>
					</div>
				</div>
				<div
					className={`pageLoadMove duration-300 ${
						!user?.username ? 'opacity-0 ml-[100%] fixed' : ''
					}`}
				>
					<h1
						className={`text-[20px] lg:text-[33px] text-center w-full mb-[24px] lg:mb-[64px]`}
					>
						{user && user.username}
					</h1>
					{/* НАВИГАЦИЯ ПК */}
					<div className='hidden lg:flex justify-start items-center gap-[49px] pb-[34px] mb-[39px] border-b-[1px] border-b-[#D8D8D8]'>
						{Object.keys(navigateData).map((naw, i) => (
							<p
								onClick={() => setIsNavigateActive(i)}
								className={`relative text-[20px] cursor-pointer before:w-full before:absolute before:h-[2px] before:left-0 before:top-[60px] before:bg-[#000000] before:px-[2px] before:ease-out leading-[27px] before:origin-left select-none ${
									isNavigateActive === i
										? 'text-black before:scale-x-[1] before:duration-300'
										: 'before:scale-x-[0] text-[#707070] before:duration-300'
								}`}
								key={i}
							>
								{naw}
							</p>
						))}
					</div>
					{/* НАВИГАЦИЯ MOBILE */}
					<div className='flex lg:hidden pb-[16px] mb-[23px] border-b-[1px] border-b-[#D8D8D8]'>
						<Swiper
							className='border-[1px] border-white'
							navigation={true}
							modules={[Navigation]}
							spaceBetween={0}
							slidesPerView={3}
						>
							{Object.keys(navigateData).map((naw, i) => (
								<SwiperSlide key={i}>
									<p
										onClick={() => setIsNavigateActive(i)}
										className={`relative text-center text-[16px] cursor-pointer before:w-full before:absolute before:h-[2px] before:left-0 before:top-[43px] before:bg-[#000000] before:px-[2px] before:ease-out leading-[27px] before:origin-left duration-200 select-none ${
											isNavigateActive === i
												? 'text-black before:scale-x-[1] before:duration-300'
												: 'before:scale-x-[0] text-[#707070] before:duration-300'
										}`}
									>
										{naw}
									</p>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className='w-full mb-[30px] lg:mb-[75px]'>
						{Object.entries(navigateData).map(([key, component], i) => (
							<div
								className={`duration-[400ms] ${
									isNavigateActive === i
										? 'opacity-100'
										: 'ml-[-600px] opacity-0 absolute '
								}`}
								key={i}
							>
								{component}
							</div>
						))}
					</div>
				</div>
			</Section>
		</>
	)
}

const navigateData = {
	Dashboard: <Dashboard />,
	Orders: <Orders />,
	Addresses: <Addresses />,
	AccountDetails: <AccountDetails />,
	Logout: <LogOut />,
}
