import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useState } from 'react'

export const AccountDetails = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirm, setConfirm] = useState('')

	return (
		<div className='flex flex-col items-center w-full'>
			<div className='w-full md:w-[500px]'>
				<h1 className='text-[33px] hidden md:block text-center'>
					Account details
				</h1>
				<div className='flex flex-col gap-[37px] mt-[37px] mb-[48px]'>
					<Input
						state={firstName}
						setState={setFirstName}
						placeholder='First name*'
					/>
					<Input
						state={lastName}
						setState={setLastName}
						placeholder='Last name*'
					/>
					<div>
						<Input
							state={displayName}
							setState={setDisplayName}
							placeholder='Display name*'
						/>
						<p className='text-[12px] text-[#707070] mt-[8px]'>
							This will be how your name will be displayed in the account
							section and in reviews.
						</p>
					</div>
					<Input
						state={email}
						setState={setEmail}
						placeholder='Email address*'
					/>
				</div>
				<div className='mb-[64px]'>
					<p className='text-[16px] font-bold'>Password change</p>
					<div className='flex flex-col gap-[37px] mt-[37px]'>
						<Input
							state={currentPassword}
							setState={setCurrentPassword}
							placeholder='Current password (leave blank to leave unchanged)'
						/>
						<Input
							state={newPassword}
							setState={setNewPassword}
							placeholder='New password (leave blank to leave unchanged)'
						/>
						<Input
							state={confirm}
							setState={setConfirm}
							placeholder='Confirm new password'
						/>
					</div>
				</div>
				<div>
					<Button title='SAVE CHANGES' />
				</div>
			</div>
		</div>
	)
}
