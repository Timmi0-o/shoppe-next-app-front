import localfont from 'next/font/local'

export const dmSans = localfont({
	src: [
		{
			path: '../../public/fonts/DMSans-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/DMSans-Medium.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/DMSans-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
	],
})

export const allertaStencil = localfont({
	src: [
		{
			path: '../../public/fonts/AllertaStencil-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
	],
})
