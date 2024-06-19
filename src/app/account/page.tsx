'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Section } from '@/components/ui/Section'
import { useState } from 'react'

function Page() {
	const [isVariableActive, setIsVariableActive] = useState(0)

	const [password, setPassword] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	return (
		<Section>
			<div className='flex flex-col items-center'>
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
						<div className='size-[18px] border-[1px] border-[#707070] rounded-[2px]'></div>
						<p>Remember me</p>
					</div>
					<Button title={isVariableActive === 0 ? 'SIGN IN' : 'REGISTER'} />
					<p
						className={`relative text-center mt-[13px] mb-[40px] lg:mb-[247px] cursor-pointer before:w-[50%] before:absolute before:h-[2px] before:top-[25px] before:bg-[#000000] before:ease-out before:duration-300 before:origin-left active:before:scale-x-[1] lg:hover:before:scale-x-[1] before:scale-x-[0]`}
					>
						Have you forgotten your password?
					</p>
				</div>
			</div>
		</Section>
	)
}

export default Page

const variables = ['Sign in', 'Register']
