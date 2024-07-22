import { Section } from '@/components/ui/Section'

export default function Loading() {
	return (
		<Section>
			{/* TITLE */}
			<div className='w-full flex justify-center'>
				<div className='w-[224px] h-[53px] rounded-[12px] bg-[#ededed] animate-pulse mb-[64px]'></div>
			</div>
			{/* RIGHT & LEFT COMPONENTS */}
			<div className='flex justify-between w-full mb-[200px]'>
				{/* RIGHT COMPONENT */}
				<div className='flex flex-col items-end w-[580px]'>
					{/* PRODUCT & BUTTON UPDATE CART */}
					<div className='shopping-cart-scroll pr-[12px] flex flex-col gap-[39px] h-[610px] overflow-y-auto mb-[39px]'>
						{Array(3)
							.fill(null)
							.map((_, i) => (
								<div
									key={i}
									className='pb-[39px] border-b-[1px] border-b-[#D8D8D8] animate-pulse'
								>
									<div className='w-[580px] h-[136px] rounded-[12px] bg-[#EFEFEF]'></div>
								</div>
							))}
					</div>
					{/* BUTTON UPDATE CART */}
					<div className='w-[168px] h-[43px] bg-[#ededed] rounded-[12px] animate-pulse mb-[64px]'></div>
					{/* ВВЕСТИ КУПОН И ПРИМЕНИТЬ */}
					<div className='flex justify-between w-full'>
						{/* INPUT Coupon Code */}
						<div className='w-[336px] h-[30px]'></div>
						{/* BUTTON APPLY COUPON */}
						<div className='w-[168px]'></div>
					</div>
				</div>
				{/* LEFT COMPONENT */}
				<div className='py-[35px] w-[460px]'>
					{/* TITLE */}
					<div className='w-[224px] h-[53px] rounded-[12px] bg-[#ededed] animate-pulse mb-[44px]'></div>
					<div className='flex justify-between border-b-[1px] border-b-[#D8D8D8] pb-[42px] mb-[42px]'>
						{/* SUBTOTAL & SHIPPING */}
						<div className='flex flex-col gap-[24px] w-[232px]'>
							{/* SUBTOTAL */}
							<div className='w-[84px] h-[28px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
							{/* SHIPPING */}
							<div className='w-[84px] h-[28px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
						</div>
						<div className='w-[250px]'>
							{/* PRICE & SHIPPING COSTS CALCULATED */}
							<div className='flex flex-col gap-[24px] w-[250px] mb-[39px]'>
								{/* PRICE */}
								<div className='w-[84px] h-[28px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
								{/* SHIPPING */}
								<div className='w-[250px] h-[58px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
							</div>
							{/* DROP MENUS */}
							<div className='mb-[25px] w-[250px] h-[192px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
							{/* BUTTON UPDATE TOTALS */}
							<div className='w-full h-[53px]'></div>
						</div>
					</div>
					{/* TOTAL PRICE */}
					<div className='flex justify-between font-bold mb-[45px]'>
						{/* TOTAL */}
						<div className='w-[51px] h-[24px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
						{/* PRICE */}
						<div className='w-[51px] h-[24px] rounded-[12px] bg-[#ededed] animate-pulse'></div>
					</div>
					{/* BUTTON PROCEED TO CHECKOUT */}
					<div className='w-full h-[53px]'></div>
				</div>
			</div>
		</Section>
	)
}
