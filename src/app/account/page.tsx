'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Section } from '@/components/ui/Section'
import { useState } from 'react'

function Page() {
	// ВЫБОР РЕЖИМА ВХОДА
	const [isVariableActive, setIsVariableActive] = useState(0)

	// ФОРМА ДЛЯ РЕГИСТРАЦИИ / ЛОГИНА
	const [password, setPassword] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')

	const [remember, setRemember] = useState(false)

	const [isResetPassword, setIsResetPassword] = useState(false)
	// const [logRegForm, setLogRegForm] = useState('')
	// const [resetPasswordForm, setResetPasswordForm] = useState('')

	return (
		<Section>
			<div
				className={`flex flex-col items-center duration-300 ${
					isResetPassword ? 'opacity-0 left-[-1000px] fixed' : 'opacity-100'
				}`}
			>
				<p className='text-[20px] lg:text-[33px] text-center my-[24px] lg:mb-[64px]'>
					My account
				</p>
				<div className='flex items-center justify-center w-full h-[32px] lg:w-[500px] lg:h-[60px] bg-[#EFEFEF] rounded-[5px] lg:rounded-[8px] mb-[87px] lg:mb-[131px]'>
					{variables.map((variable, i) => (
						<div
							onClick={() => setIsVariableActive(i)}
							key={i}
							className={`relative flex justify-center items-center w-[calc(100%/2.07)] lg:w-[236px] h-[28px] lg:h-[50px] before:rounded-[5px] lg:before:rounded-[8px] cursor-pointer before:absolute before:size-full before:duration-300 before:origin-right ${
								isVariableActive === i
									? 'before:bg-[#fff]'
									: `before:bg-transparent ${
											isVariableActive === 1
												? 'before:ml-[200px] lg:before:ml-[400px]'
												: 'before:mr-[200px] lg:before:mr-[400px]'
									  }`
							}`}
						>
							<p className='text-[12px] lg:text-[20px] z-[2]'>{variable}</p>
						</div>
					))}
				</div>
				<div className='w-full lg:w-[500px] duration-300'>
					<div
						className={`flex flex-col gap-[46px] duration-300 ${
							isVariableActive === 1 ? 'h-[180px] lg:h-[200px]' : 'h-[120px]'
						}`}
					>
						<div
							className={`duration-300 ${
								isVariableActive === 1 ? 'mr-0' : 'mr-[100%] absolute'
							}`}
						>
							<Input
								state={userName}
								setState={setUserName}
								placeholder='UserName'
							/>
						</div>
						<Input state={email} setState={setEmail} placeholder='Email' />
						<Input
							state={password}
							setState={setPassword}
							placeholder='Password'
						/>
					</div>
					<div className='flex items-center gap-[8px] mt-[15px] w-full mb-[12px] lg:mb-[85px]'>
						<div
							onClick={() => setRemember(!remember)}
							className={`size-[18px] duration-300 ease-in-out border-[1px] border-[#707070] ${
								remember && 'bg-[#000000]'
							} rounded-[2px]`}
						></div>
						<p>Remember me</p>
					</div>
					<Button title={isVariableActive === 0 ? 'SIGN IN' : 'REGISTER'} />
					<p
						onClick={() => setIsResetPassword(!isResetPassword)}
						className={`relative text-center mt-[13px] mb-[40px] lg:mb-[247px] cursor-pointer`}
					>
						Have you forgotten your password?
					</p>
				</div>
			</div>
			<div
				className={`flex flex-col items-center duration-300 my-[24px] ${
					isResetPassword ? 'ml-0' : 'ml-[100%] opacity-0 fixed'
				}`}
			>
				<p className='hidden lg:block text-[33px] mb-[39px] text-center'>
					Have you Forgotten Your Password ?
				</p>
				<p className='block lg:hidden text-[20px] mb-[16px]'>Lost password</p>

				<p className='text-[12px] lg:text-[20px] text-left lg:text-center'>
					If you've forgotten your password, enter your e-mail <br /> address
					and we'll send you an e-mail
				</p>
				<div className='flex flex-col gap-[64px] w-full lg:w-[500px] mt-[76px] mb-[250px]'>
					<Input placeholder='Email' />
					<Button title='RESET PASSWORD' />
				</div>
			</div>
		</Section>
	)
}

export default Page

const variables = ['Sign in', 'Register']
