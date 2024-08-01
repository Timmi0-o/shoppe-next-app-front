'use client'
import { fetcher } from '@/utils/fetcher'
import { useEffect, useState } from 'react'
import useSWR, { SWRResponse } from 'swr'

interface UserData {
	_id: string
	username: string
	email: string
}

export const useUser = () => {
	// ПРОВЕРКА НАЛИЧИЯ ТОКЕНА НА КЛИЕНТЕ
	const [token, setToken] = useState<string | null>()

	useEffect(() => {
		if (window !== undefined && localStorage !== undefined) {
			const storedToken = localStorage.getItem('token')
			setToken(storedToken)
		}
	})

	const deleteToken = () => {
		localStorage.removeItem('token')
		setToken('')
		mutateUser()
	}

	// ПРОВЕРКА ЛОГИНА
	const {
		data: userData,
		mutate: mutateUser,
	}: SWRResponse<UserData, any, any> = useSWR(
		{
			url: `${process.env.BACK_PORT}auth/${token}`,
		},
		fetcher
	)

	return {
		user: userData,
		mutateUser,
		deleteToken,
		setToken,
	}
}
