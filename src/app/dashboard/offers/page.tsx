import TrxListing from '@/components/dashboard/offers/TrxListing'
import { getSession } from '@/lib/api/Auth'
import React from 'react'

const page = async () => {

  const session = await getSession()
  console.log(session);
  return (
    <div className="">
      <TrxListing isAdmin={session.isAdmin} user_id={session.userId} />
    </div>
  )
}

export default page