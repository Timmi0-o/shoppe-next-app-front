import { Section } from '@/components/ui/Section'

export default function Loading() {
	return (
		<Section>
			<div className='mt-[16px] bg-[#ededed] rounded-[12px] animate-pulse'>
				<div className='relative w-full h-[180px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[646px]'></div>
				<div className='flex flex-col justify-center ml-[39px] absolute top-0 size-full text-white'></div>
			</div>
		</Section>
	)
}
