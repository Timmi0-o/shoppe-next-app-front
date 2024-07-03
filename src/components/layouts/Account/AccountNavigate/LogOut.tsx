import { Button } from '@/components/ui/Button'

export const LogOut = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='hidden lg:block text-[26px] text-center mb-[18px] lg:mb-[39px]'>
				We are very attached to you, come back <br /> as soon as possible!
			</h1>
			<h1 className='block lg:hidden text-[18px] text-center mb-[18px] lg:mb-[39px]'>
				We are very attached to you, come back as soon as possible!
			</h1>
			<div className='w-full md:w-[500px]'>
				<Button
					onClick={() => localStorage.setItem('token', '')}
					href={'/'}
					title='LOG OUT OF ACCOUNT'
				/>
			</div>
		</div>
	)
}
