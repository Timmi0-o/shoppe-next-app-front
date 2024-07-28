'use client'
import { useUser } from '@/components/hooks/useUser'
import { Section } from '@/components/ui/Section'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ViewOrder() {
	const router = useRouter()

	const { user } = useUser()

	useEffect(() => {
		if (!user) {
			router.push('/')
		}
	})

	const [purchasesOrder, setPurchasesOrder] = useState([
		{ product: 'Lira Earrings', price: 64 },
		{ product: 'Ollie Earrings', price: 10 },
	])
	return (
		<Section>
			<div className='flex flex-col lg:flex-row justify-between'>
				{/* ДЕТАЛИ ЗАКАЗА (БАНКОВСКАЯ КАРТА, АДРЕС И Т.Д) */}
				<div className='w-full lg:w-[400px] xl:w-[500px] mb-[60px] lg:mb-0'>
					<h1 className='text-[26px] mb-[39px]'>Order Details</h1>
					<div className='flex justify-between'>
						<div className='flex flex-col gap-[39px]'>
							<div className='flex flex-col'>
								<p>ORDER NUMBER</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									1879605573994
								</p>
							</div>
							<div className='flex flex-col'>
								<p>EMAIL</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									Vitathemes@gmail.com
								</p>
							</div>
							<div className='flex flex-col'>
								<p>PAYMENT METHOD</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									Mastercard*************7865
								</p>
							</div>
							<div className='flex flex-col'>
								<p>ORDER DATE</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									October 8,2020
								</p>
							</div>
						</div>
						<div className='flex flex-col gap-[39px]'>
							<div className='flex flex-col'>
								<p>DELIVERY OPTIONS</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									Standard delivery
								</p>
							</div>
							<div className='flex flex-col'>
								<p>DELIVERY ADDRESS</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									Kristian holst 34 <br /> old street W1F <br /> 7NU london
									<br />
									United Kingdom
								</p>
							</div>
							<div className='flex flex-col'>
								<p>CONTACT NUMBER</p>
								<p className='text-[12px] md:text-[16px] text-[#707070]'>
									+44 8749790988
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* ПРАВАЯ ЧАСТЬ С ОПИСАНИЕМ КУПЛЕННЫХ ТОВАРОВ И ОБЩЕЙ СТОИМОСТИ */}
				<div className='w-full lg:w-[450px] xl:w-[580px]'>
					<h1 className='text-[26px] mb-[39px]'>ORDER Summary</h1>
					<div className='w-full bg-[#EFEFEF] px-[59px] py-[39px] mt-[39px]'>
						<div className='flex justify-between items-center pb-[18px] mb-[22px] border-b-[1px] border-b-[#D8D8D8]'>
							<p>PRODUCT</p>
							<p>TOTAL</p>
						</div>
						{/* ТОВАРЫ ИЗ ЗАКАЗА */}
						<div className='flex flex-col gap-[26px] pb-[12px] border-b-[1px] border-b-[#D8D8D8]'>
							{purchasesOrder.map((purchase, i) => (
								<div
									className='flex justify-between items-center text-[16px]'
									key={i}
								>
									<p>{purchase.product}</p>
									<p>{`$ ${purchase.price}`}</p>
								</div>
							))}
						</div>
						<div className='flex justify-between items-center text-[16px] my-[14px] pb-[10px] border-b-[1px] border-b-[#D8D8D8]'>
							<p className='text-[16px]'>SUBTOTAL</p>
							<p>$85</p>
						</div>
						<div className='flex justify-between items-center text-[16px] my-[14px] pb-[10px] border-b-[1px] border-b-[#D8D8D8]'>
							<p className='text-[16px]'>SHIPPING</p>
							<p>Free shipping</p>
						</div>
						<div className='flex justify-between items-center text-[16px] mt-[24px] font-bold'>
							<p className='text-[16px]'>TOTAL</p>
							<p>$85</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}
