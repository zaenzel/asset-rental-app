import TrxOnRent from '@/components/dashboard/onRent/TrxOnRent'
import { getSession } from '@/lib/api/Auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

  const session = await getSession()
  if (!session.isLoggedIn) {
    redirect("/auth")
  }

  return (
    <div className="">
      <TrxOnRent isAdmin={session.isAdmin} user_id={session.userId} />
    </div>
  )
}

export default page