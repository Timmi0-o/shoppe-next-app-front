import dynamic from 'next/dynamic'

const DynamicBlog = dynamic(() => import('../../components/layouts/Blog'), {
	ssr: false,
})

export default function Page() {
	return <DynamicBlog />
}
