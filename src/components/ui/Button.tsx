interface ButtonProps {
	title: string
}

export const Button = ({ title }: ButtonProps) => {
	return (
		<button className='flex justify-center items-center w-full h-[32px] lg:h-[53px] rounded-[4px] border border-[#000000] lg:hover:bg-black lg:hover:text-white duration-200 ease-out active:scale-[0.99]'>
			<p className='text-[12px] leading-[20px] font-normal lg:text-[16px] lg:font-bold lg:leading-[21px]'>
				{title}
			</p>
		</button>
	)
}
