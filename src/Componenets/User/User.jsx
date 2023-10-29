import React from 'react'
import { useParams } from 'react-router-dom'


function User  () {
    const {userid} = useParams()
  return (
    <>

    <h1 className=" bg-red-700 text-3xl text-white-500 border-r-emerald-400 rounded-xl"> user: {userid}</h1>
    </>
  )
}

export default User