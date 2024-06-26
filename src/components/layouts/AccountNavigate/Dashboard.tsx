export const Dashboard = () => {
	return (
		<div className='text-[12px] md:text-[16px]'>
			<div className='flex flex-wrap gap-[2px] mb-[10px]'>
				Hello Vitatheme (not Vitatheme?
				<p className='text-[#A18A68]'>Log out</p>)
			</div>
			<div className='flex flex-wrap gap-[2px]'>
				From your account dashboard you can view your
				<p className='text-[#A18A68]'>recent orders</p>, manage your
				<p className='text-[#A18A68]'>shipping and billing addresses</p>, and
				edit your
				<p className='text-[#A18A68]'>password and account details</p>.
			</div>
		</div>
	)
}
