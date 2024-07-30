import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface InputProps {
	state: string
	setState: Dispatch<SetStateAction<string>>
	placeholder?: string
	type?: string
}

export const InputSearch = ({ state, setState }: InputProps) => {
	return (
		<div className='flex items-center gap-[8px] w-full h-[32px] bg-[#EFEFEF] rounded-[4px]'>
			<div className='relative size-[12px] ml-[10px]'>
				<Image src={'/search-input.svg'} fill alt='search' />
			</div>
			<input
				className='outline-none bg-transparent text-[12px] font-normal leading-[20px] placeholder:text-[#707070] text-black w-full pr-[10px]'
				type='text'
				placeholder='Search'
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		</div>
	)
}

export const Input = ({ state, setState, placeholder, type }: InputProps) => {
	return (
		<div className='w-full h-[25px] lg:h-[35px] pb-[13px] text-[12px] md:text-[14px] border-b-[1px] border-b-[#D8D8D8]'>
			<input
				className='w-full outline-none'
				onChange={(e) => setState(e.target.value)}
				type={type ? type : 'text'}
				value={state}
				placeholder={placeholder ? placeholder : ''}
			/>
		</div>
	)
}
