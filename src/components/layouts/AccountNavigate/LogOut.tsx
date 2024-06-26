import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const LogOut = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-[20px] lg:text-[33px] text-center mb-[18px] lg:mb-[39px]'>
				We are very attached to you, come back as soon as possible!
			</h1>
			<div className='w-full md:w-[500px]'>
				<Link href={'/'}>
					<Button title='LOG OUT OF ACCOUNT' />
				</Link>
			</div>
		</div>
	)
}
