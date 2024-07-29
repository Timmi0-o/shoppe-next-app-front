'use client'
import { useBasket } from '@/components/hooks/useBasket'
import { useUser } from '@/components/hooks/useUser'
import { DropMenu } from '@/components/layouts/DropMenu'
import { Rights } from '@/components/layouts/Rights'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { RadioButton } from '@/components/ui/RadioButton'
import { Section } from '@/components/ui/Section'
import { useState } from 'react'

export default function Checkout() {
	// BASKET
	const { basketData, allPrice } = useBasket()

	const { user } = useUser()

	// COUPON
	const [coupon, setCoupon] = useState('')

	// USER FULL DATA
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [companyName, setCompanyName] = useState('')

	// const [country, setCountry] = useState('')

	const [streetAddress, setStreetAddress] = useState('')
	const [postcodeZIP, setPostcodeZIP] = useState('')
	const [TownCity, setTownCity] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState(user ? user.email : '')

	const [createAnAccount, setCreateAnAccount] = useState(false)
	const [shipToADifferentAddress, setShipToTDifferentAddress] = useState(false)

	// ORDER NOTES
	const [orderNotes, setOrderNotes] = useState('')

	const [paySelect, setPaySelect] = useState<number | null>(0)

	return (
		<Section>
			{/* TITLE  */}
			<h1 className='w-full text-[16px] md:text-[33px] mb-[24px] md:mb-[64px] text-center'>
				Checkout
			</h1>

			{/* COUPON & ORGANIZATION INFORMATION  */}
			<div className='w-[580px]'>
				{/* ORGANIZATION INFORMATION  */}
				<div>
					<p className='mb-[16px]'>
						<span className='opacity-60'>Returning customer?</span> Click here
						to login
					</p>
					<p>
						<span className='opacity-60'>Have a coupon?</span> Click here to
						enter your code
					</p>
				</div>
				{/* ENTER COUPON  */}
				<div className='border-[1px] border-[#D8D8D8] pt-[24px] pb-[40px] px-[24px] mt-[24px]'>
					<p className='opacity-60'>
						If you have a coupon code, please apply it below.
					</p>
					<div className='flex justify-between items-end mt-[39px]'>
						<div className='w-[336px]'>
							<Input
								state={coupon}
								setState={setCoupon}
								placeholder='Coupon Code'
							/>
						</div>
						<div className='w-[168px]'>
							<Button title='APPLY COUPON' />
						</div>
					</div>
				</div>
			</div>
			{/* RIGHT & LEFT SECTION  */}
			<div className='flex justify-between w-full mt-[35px] md:mt-[48px] mb-[50px] md:mb-[150px]'>
				{/* LEFT  */}
				<div className='w-[580px]'>
					{/* TITLE  */}
					<h2 className='text-[26px] mb-[27px]'>Billing Details</h2>
					{/* USER DATA  */}
					<div className='flex flex-col gap-[37px]'>
						{/* FIRST && LAST NAME  */}
						<div className='flex justify-between'>
							<div className='w-[270px]'>
								<Input
									placeholder='First Name'
									state={firstName}
									setState={setFirstName}
								/>
							</div>
							<div className='w-[270px]'>
								<Input
									placeholder='Last Name'
									state={lastName}
									setState={setLastName}
								/>
							</div>
						</div>
						<Input
							placeholder='Company Name'
							state={companyName}
							setState={setCompanyName}
						/>
						<DropMenu
							className='text-[#9f9f9f]'
							underline
							list
							title='Country'
							dropLink={[]}
						/>
						<Input
							placeholder='Street Address *'
							state={lastName}
							setState={setLastName}
						/>
						<Input
							placeholder='Postcode / ZIP *'
							state={lastName}
							setState={setLastName}
						/>
						<Input
							placeholder='Town / City *'
							state={lastName}
							setState={setLastName}
						/>
						<Input
							placeholder='Phone *'
							state={lastName}
							setState={setLastName}
						/>
						<Input
							placeholder='Email *'
							state={lastName}
							setState={setLastName}
						/>
						{/* AGREEMENTS  */}
						<div>
							<Rights
								rightsText='Create an account?'
								rightsState={createAnAccount}
								rightsSetState={setCreateAnAccount}
							/>
							<Rights
								rightsText='Ship to a different address?'
								rightsState={shipToADifferentAddress}
								rightsSetState={setShipToTDifferentAddress}
							/>
						</div>
						{/* NOTES  */}
						<Input
							placeholder='Order notes'
							state={orderNotes}
							setState={setOrderNotes}
						/>
					</div>
				</div>
				{/* RIGHT  */}
				<div className='w-[580px]'>
					{/* TITLE  */}
					<h2 className='text-[26px] mb-[27px]'>YOUR ORDER</h2>
					{/* ORDER DATA  */}
					<div className='bg-[#EFEFEF] py-[39px] px-[58px]'>
						<div className='flex justify-between border-b-[1px] border-b-[#D8D8D8] pb-[18px] mb-[22px]'>
							<p>PRODUCT</p>
							<p>TOTAL</p>
						</div>
						{/* PRODUCT LIST */}
						<div className='flex flex-col gap-[26px] pb-[12px] border-b-[1px] border-b-[#D8D8D8] mb-[14px]'>
							{basketData?.map((basket, i) => (
								<div key={i} className='flex justify-between text-[#707070]'>
									<p>{basket?.product?.title}</p>
									<p>{`$ ${basket.qty * basket.product.price}`}</p>
								</div>
							))}
						</div>
						{/* SUBTOTAL  */}
						<div className='flex justify-between pb-[10px] mb-[12px] border-b-[1px] border-b-[#D8D8D8]'>
							<p>SUBTOTAL</p>
							<p className='text-[#707070]'>{`$ ${allPrice}`}</p>
						</div>
						{/* SHIPPING  */}
						<div className='flex justify-between pb-[10px] mb-[12px] border-b-[1px] border-b-[#D8D8D8]'>
							<p>SHIPPING</p>
							<p className='text-[#707070]'>Free shipping</p>
						</div>
						{/* TOTAL  */}
						<div className='flex justify-between font-bold'>
							<p>TOTAL</p>
							<p>{`$ ${allPrice + 15}`}</p>
						</div>
						{/* PAY SETTINGS  */}
						<div className='flex flex-col gap-[20px] mt-[40px] lg:mt-[60px]'>
							{payVariableTitle.map((pay, i) => (
								<div key={i}>
									<div
										onClick={() => {
											setPaySelect(i)
										}}
									>
										<RadioButton
											img={
												i + 1 === payVariableTitle.length ? '/paypal.svg' : ''
											}
											imgSize='w-[13px] h-[16px]'
											state={i === paySelect ? true : false}
											title={pay}
										/>
									</div>
									<p
										className={`text-[12px] ${
											i === 0 ? 'mt-[19px]' : 'hidden'
										}`}
									>
										Make your payment directly into our bank account. Please use
										your Order ID as the payment reference. Your order will not
										be shipped until the funds have cleared in our account
									</p>
								</div>
							))}
						</div>
						<div className='mt-[24px] lg:my-[45px]'>
							<Button title='PLACE ORDER' />
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

const payVariableTitle = [
	'Direct bank transfer',
	'Check payments',
	'Cash on delivery',
	'PayPal ',
]
