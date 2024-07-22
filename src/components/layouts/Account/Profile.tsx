'use client'
import { useUser } from '@/components/hooks/useUser'
import { Section } from '@/components/ui/Section'
import Loading from '@/utils/Loading'
import { useRouter } from 'next/navigation'
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
	// const [userData, setUserData] = useState({})
	const router = useRouter()
	// const token = localStorage.getItem('token')
	const [isNavigateActive, setIsNavigateActive] = useState(0)

	// GET USER DATA
	const { user } = useUser()
	// console.log('userProfile', user)

	// useEffect(() => {
	// 	if (user === undefined) {
	// 		router.push('/')
	// 	}
	// })

	return (
		<>
			<div
				className={`${!user?.username ? 'block' : 'opacity-0 ml-[100%] fixed'}`}
			>
				<Loading />
			</div>

			<div
				className={`pageLoadMove duration-300 ${
					!user?.username ? 'opacity-0 ml-[100%] fixed' : ''
				}`}
			>
				<Section>
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
				</Section>
			</div>
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
