export const ViewOrderLoading = () => {
	return (
		<div className='pageLoadMove flex flex-col lg:flex-row justify-between pageLoadMove'>
			{/* ДЕТАЛИ ЗАКАЗА (БАНКОВСКАЯ КАРТА, АДРЕС И Т.Д) */}
			<div className='w-full lg:w-[400px] xl:w-[500px] mb-[60px] lg:mb-0 '>
				{/* TITLE  */}
				<h1 className='w-[170px] h-[30px] bg-[#ededed] rounded-[4px] animate-pulse mb-[40px]'></h1>
				{/* META DATA  */}
				<div className='flex justify-between w-full lg:w-[400px] xl:w-[500px] bg-[#ededed] rounded-[12px] animate-pulse '>
					<div className='flex flex-col gap-[39px] pr-[15px]'>
						<div className='flex flex-col'>
							{/* ORDER NUMBER TITLE */}
							<p className='w-[170px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* ORDER NUMBER */}
							<p className='w-[150px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse mx-[10px] my-[5px]'></p>
						</div>
						<div className='flex flex-col'>
							{/* EMAIL TITLE */}
							<p className='w-[170px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* EMAIL  */}
							<p className='w-[200px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
						<div className='flex flex-col'>
							{/* PAYMENT METHOD TITLE */}
							<p className='w-[140px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* PAYMENT METHOD */}
							<p className='w-[60px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
						<div className='flex flex-col'>
							{/* ORDER DATE TITLE */}
							<p className='w-[100px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* ORDER DATE  */}
							<p className='w-[80px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
					</div>
					<div className='flex flex-col gap-[39px]'>
						<div className='flex flex-col'>
							{/* DELIVERY OPTIONS TITLE  */}
							<p className='w-[140px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* DELIVERY OPTIONS  */}
							<p className='w-[80px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
						<div className='flex flex-col'>
							{/* DELIVERY ADDRESS TITLE */}
							<p className='w-[170px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* DELIVERY ADDRESS */}
							<p className='w-[120px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
						<div className='flex flex-col'>
							{/* CONTACT NUMBER TITLE */}
							<p className='w-[170px] h-[20px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* CONTACT NUMBER */}
							<p className='w-[120px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
					</div>
				</div>
			</div>
			{/* ПРАВАЯ ЧАСТЬ С ОПИСАНИЕМ КУПЛЕННЫХ ТОВАРОВ И ОБЩЕЙ СТОИМОСТИ */}
			<div className='w-full lg:w-[450px] xl:w-[580px]'>
				{/* TITLE  */}
				<h1 className='w-[190px] h-[30px] bg-[#ededed] rounded-[4px] animate-pulse mb-[40px]'></h1>
				<div className='w-full bg-[#EFEFEF] px-[59px] py-[39px] mt-[39px]'>
					<div className='flex justify-between items-center pb-[18px] mb-[22px] border-b-[1px] border-b-[#D8D8D8]'>
						{/* PRODUCT  */}
						<p className='w-[100px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						{/* TOTAL  */}
						<p className='w-[60px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
					</div>
					{/* ORDERS PRODUCTS */}
					<div className='flex flex-col gap-[26px] pb-[12px] border-b-[1px] border-b-[#D8D8D8]'>
						{/* PRODUCT  */}
						<div className='flex justify-between items-center text-[16px]'>
							{/* PRODUCT TITLE  */}
							<p className='w-[160px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* PRODUCT TOTAL PRICE  */}
							<p className='w-[30px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
						{/* PRODUCT  */}
						<div className='flex justify-between items-center text-[16px]'>
							{/* PRODUCT TITLE  */}
							<p className='w-[120px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* PRODUCT TOTAL PRICE  */}
							<p className='w-[30px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
						{/* PRODUCT  */}
						<div className='flex justify-between items-center text-[16px]'>
							{/* PRODUCT TITLE  */}
							<p className='w-[180px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
							{/* PRODUCT TOTAL PRICE  */}
							<p className='w-[30px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						</div>
					</div>
					<div className='flex justify-between items-center text-[16px] my-[14px] pb-[10px] border-b-[1px] border-b-[#D8D8D8]'>
						{/* SUBTOTAL  */}
						<p className='w-[120px] h-[18px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						{/* SUBTOTAL NUMBER  */}
						<p className='w-[30px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
					</div>
					<div className='flex justify-between items-center text-[16px] my-[14px] pb-[10px] border-b-[1px] border-b-[#D8D8D8]'>
						{/* SHIPPING */}
						<p className='w-[120px] h-[18px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
						{/* SHIPPING OPTION  */}
						<p className='w-[100px] h-[15px] bg-[#bcbcbc] rounded-[4px] animate-pulse m-[10px]'></p>
					</div>
					<div className='flex justify-between items-center text-[16px] mt-[24px] font-bold'>
						{/* TOTAL  */}
						<p className='w-[60px] h-[18px] bg-[#757575] rounded-[4px] animate-pulse m-[10px]'></p>
						{/* TOTAL NUMBER  */}
						<p className='w-[30px] h-[18px] bg-[#757575] rounded-[4px] animate-pulse m-[10px]'></p>
					</div>
				</div>
			</div>
		</div>
	)
}
