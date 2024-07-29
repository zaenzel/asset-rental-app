import { getSession } from '@/lib/api/Auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getSession()
  if (!session.isLoggedIn) {
    redirect("/auth")
  }

  return (
    <div>page offers</div>
  )
}

export default page