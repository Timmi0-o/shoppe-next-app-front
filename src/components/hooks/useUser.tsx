'use client'
import { fetcher } from '@/utils/fetcher'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useUser = () => {
	// ПРОВЕРКА НАЛИЧИЯ ТОКЕНА НА КЛИЕНТЕ
	const [token, setToken] = useState<string | null>()

	useEffect(() => {
		if (window !== undefined && localStorage !== undefined) {
			const storedToken = localStorage.getItem('token')
			setToken(storedToken)
		}
	}, [])

	const deleteToken = () => {
		localStorage.removeItem('token')
		setToken('')
		mutateUser()
	}

	// ПРОВЕРКА ЛОГИНА
	const { data: userData, mutate: mutateUser } = useSWR(
		{
			url: `${process.env.BACK_PORT}auth/${token}`,
		},
		fetcher,
		{ refreshInterval: 0 }
	)

	return {
		user: userData,
		mutateUser,
		deleteToken,
		setToken,
	}
}
