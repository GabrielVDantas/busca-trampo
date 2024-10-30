'use server'
import { auth } from '@/auth'
import React from 'react'

const DashboardPage = async () => {
    const session = await auth()

    return (
        <div>DashboardPage</div>
    )
}

export default DashboardPage