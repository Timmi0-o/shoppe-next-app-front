'use client'
import { useBasket } from '@/components/hooks/useBasket'
import { ProductList, useOrder } from '@/components/hooks/useOrder'
import { useUser } from '@/components/hooks/useUser'
import { DropMenu } from '@/components/layouts/DropMenu'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { RadioButton } from '@/components/ui/RadioButton'
import { Rights } from '@/components/ui/Rights'
import { Section } from '@/components/ui/Section'
import { useEffect, useState } from 'react'

export default function Checkout() {
	// BASKET
	const { basketData, allPrice } = useBasket()
	// USER
	const { user } = useUser()
	// ORDER
	const { handleNewOrder } = useOrder()
	// COUPON
	const [coupon, setCoupon] = useState('')
	// USER FULL DATA
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [companyName, setCompanyName] = useState('')
	const [country, setCountry] = useState('Country')
	const [streetAddress, setStreetAddress] = useState('')
	const [postcodeZIP, setPostcodeZIP] = useState('')
	const [townCity, setTownCity] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	const [createAnAccount, setCreateAnAccount] = useState(false)
	const [shipToADifferentAddress, setShipToTDifferentAddress] = useState(false)

	// ORDER NOTES
	const [orderNotes, setOrderNotes] = useState('')

	useEffect(() => {
		setEmail(user?.email || '')
	}, [user])

	const [paySelect, setPaySelect] = useState<number>(0)

	const [errors, setErrors] = useState('')
	const handleCreateNewOrder = async () => {
		try {
			if (
				!firstName ||
				!lastName ||
				country === 'Country' ||
				!streetAddress ||
				!postcodeZIP ||
				!townCity ||
				!phone ||
				!email
			) {
				setErrors('Не все поля заполнены!')
			} else {
				setErrors('')
				user &&
					basketData &&
					handleNewOrder({
						user: user._id,
						email: email,
						paymentMethod: payVariableTitle[paySelect],
						deliveryOptions: 'Standard delivery',
						deliveryAddress: streetAddress,
						contactPhone: phone,
						shipping: 'Free shipping',
						productList: basketData.reduce((acc: ProductList[], item) => {
							const product = {
								title: item.product.title,
								totalPrice: item.qty * item.product.price,
							}
							acc.push(product)
							return acc
						}, []),
					})
			}
		} catch (error: any) {
			console.log(error?.response?.data)
		}
	}

	return (
		<Section>
			<div className='pageLoadMove'>
				{/* TITLE  */}
				<h1 className='w-full text-[16px] md:text-[33px] mb-[24px] md:mb-[64px] text-center'>
					Checkout
				</h1>

				{/* COUPON & ORGANIZATION INFORMATION  */}
				<div className='w-full md:w-[500px] lg:w-[580px]'>
					{/* ORGANIZATION INFORMATION  */}
					<div>
						<p className='text-[12px] md:text-[16px] mb-[16px]'>
							<span className='opacity-60'>Returning customer?</span> Click here
							to login
						</p>
						<p className='text-[12px] md:text-[16px]'>
							<span className='opacity-60'>Have a coupon?</span> Click here to
							enter your code
						</p>
					</div>
					{/* ENTER COUPON  */}
					<div className='hidden md:block border-[1px] border-[#D8D8D8] pt-[24px] pb-[40px] px-[24px] mt-[24px]'>
						<p className='opacity-60'>
							If you have a coupon code, please apply it below.
						</p>
						<div className='flex justify-between items-end mt-[39px]'>
							<div className='w-[250px] lg:w-[336px]'>
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
				<div className='flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-between w-full mt-[35px] md:mt-[48px] mb-[50px] md:mb-[150px]'>
					{/* LEFT  */}
					<div className='w-full lg:w-[450px] xl:w-[580px]'>
						{/* TITLE  */}
						<h2 className='text-[16px] md:text-[26px] mb-[27px]'>
							Billing Details
						</h2>
						{/* USER DATA  */}
						<div className='flex flex-col gap-[37px]'>
							{/* FIRST && LAST NAME  */}
							<div className='flex justify-between'>
								<div className='w-[40%] lg:w-[180px] xl:w-[270px]'>
									<Input
										placeholder='First Name'
										state={firstName}
										setState={setFirstName}
									/>
								</div>
								<div className='w-[40%] lg:w-[180px] xl:w-[270px]'>
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
								title={country}
								setTitle={setCountry}
								dropLink={countrySend}
							/>
							<Input
								placeholder='Street Address *'
								state={streetAddress}
								setState={setStreetAddress}
							/>
							<Input
								placeholder='Postcode / ZIP *'
								state={postcodeZIP}
								setState={setPostcodeZIP}
							/>
							<Input
								placeholder='Town / City *'
								state={townCity}
								setState={setTownCity}
							/>
							<Input placeholder='Phone *' state={phone} setState={setPhone} />
							<Input placeholder='Email *' state={email} setState={setEmail} />
							{/* ERRORS PC  */}
							<p
								className={`hidden md:block text-[16px] text-red-500 font-semibold duration-300 ease-in-out ${
									errors ? '' : 'ml-[-100%] opacity-0'
								}`}
							>
								{errors}
							</p>
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
					<div className='w-full lg:w-[450px] xl:w-[580px]'>
						{/* TITLE  */}
						<h2 className='text-[16px] md:text-[26px] mb-[27px]'>YOUR ORDER</h2>
						{/* ORDER DATA  */}
						<div className='bg-[#EFEFEF] py-[39px] px-[58px] text-[12px] md:text-[16px]'>
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
											Make your payment directly into our bank account. Please
											use your Order ID as the payment reference. Your order
											will not be shipped until the funds have cleared in our
											account
										</p>
									</div>
								))}
							</div>
							<div className='mt-[24px] lg:my-[45px]'>
								<Button
									onClick={() => handleCreateNewOrder()}
									title='PLACE ORDER'
								/>
							</div>
						</div>
						{/* ERRORS MOBILE  */}
						<p
							className={`block md:hidden text-[12px] text-red-500 font-semibold duration-300 ease-in-out mt-[20px] ${
								errors ? '' : 'ml-[-100%] opacity-0'
							}`}
						>
							{errors}
						</p>
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

const countrySend = ['Germany', 'France', 'Italy']
