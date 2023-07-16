"use client"
// import Image from 'next/image'
import NextUI_Table from './components/NextUI_Table'
import EvergreenUI_Table from './components/EvergreenUI_Table'
import { useEffect, useState } from 'react'

export default function Home() {
  const [userData, setUserData] = useState()
  const headers = [
    "uid", "username", "email", "DOB", "Avatar", "title", "key_skill"
  ]
  useEffect(() => {
    let controller = new AbortController();
    async function fetchData() {
      const res = await fetch("http://localhost:3003/data")
      const data = await res.json()
      setUserData(data)
    }
    fetchData()
    return () => controller?.abort();
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className='text-2xl p-12 '> Built using EvergreenUI</h1>
      <EvergreenUI_Table rows={userData} headers={headers} /> */}
      <h1 className='text-2xl p-12 '> Built using NextUI</h1>
      <NextUI_Table rows={userData} headers={headers} />
    </main>
  )
}
