'use client'
import { DropMenu } from '@/components/layouts/DropMenu'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Section } from '@/components/ui/Section'
import { useState } from 'react'

function ContactAs() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	return (
		<Section>
			<div className='flex flex-col items-center'>
				<h1 className='w-full text-[20px] leading-[26px] lg:text-[33px] lg:leading-[43px] lg:text-center mb-[39px] mt-[39px] lg:mt-0'>
					Contact Us
				</h1>
				<p className='hidden lg:block text-[20px] text-center mb-[108px]'>
					Say Hello send us your thoughts about our products or share <br />{' '}
					your ideas with our Team!
				</p>
				<div className='flex flex-col items-center lg:w-[908px]'>
					<div className='flex justify-center flex-wrap gap-[60px] lg:gap-[116px] mb-[80px] lg:mb-[126px]'>
						<div className='w-full md:w-[396px]'>
							<Input
								state={firstName}
								setState={setFirstName}
								placeholder='First name'
							/>
						</div>
						<div className='w-full md:w-[396px]'>
							<Input
								state={lastName}
								setState={setLastName}
								placeholder='Last name'
							/>
						</div>
						<div className='w-full md:w-[396px]'>
							<Input state={email} setState={setEmail} placeholder='Email' />
						</div>
						<div className='w-full md:w-[396px]'>
							<DropMenu pc list title='Subject' dropLink={subjects} />
						</div>
					</div>
					<div className='w-full mb-[40px] lg:mb-[96px]'>
						<Input
							state={message}
							setState={setMessage}
							placeholder='Message'
						/>
					</div>
					<div className='w-full lg:w-[500px] mb-[40px] lg:mb-[150px]'>
						<Button title='SEND' />
					</div>
				</div>
			</div>
		</Section>
	)
}

export default ContactAs

const subjects = ['Design', 'Technical implementation', 'Other']
