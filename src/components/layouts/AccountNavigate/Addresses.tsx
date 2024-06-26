export const Addresses = () => {
	return (
		<div>
			<p className='text-[12px] md:text-[16px]'>
				The following addresses will be used on the checkout page by default.
			</p>
			<div className='flex flex-col md:flex-row gap-[48px] lg:gap-0 justify-between w-full mt-[45px]'>
				<div className='w-1/2'>
					<p className='text-[16px] lg:text-[20px] mb-[24px]'>
						Billing address
					</p>
					<p className='text-[16px] text-[#A18A68] mb-[14px] cursor-pointer'>
						ADD
					</p>
					<p className='text-[12px] lg:text-[14px] text-[#707070]'>
						You have not set up this type of address yet.
					</p>
				</div>
				<div className='w-1/2'>
					<p className='text-[16px] lg:text-[20px] mb-[24px]'>
						Billing address
					</p>
					<p className='text-[16px] text-[#A18A68] mb-[14px] cursor-pointer'>
						ADD
					</p>
					<p className='text-[12px] lg:text-[14px] text-[#707070]'>
						You have not set up this type of address yet.
					</p>
				</div>
			</div>
		</div>
	)
}
