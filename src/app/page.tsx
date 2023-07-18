"use client"
import { SearchInput } from 'evergreen-ui';
import { Input } from '@chakra-ui/react'
import ChakraUI_Table from './components/ChakraUI_Table'

import EvergreenUI_Table from './components/EvergreenUI_Table'
import { useEffect, useState } from 'react'
import { ChakraUIProps, } from './_types';

export default function Home(): JSX.Element {
  const headers = [
    {
      key: "uid",
      label: "UID",
    },
    {
      key: "username",
      label: "USERNAME",
    },
    {
      key: "avatar",
      label: "Avatar",
    },
    {
      key: "email",
      label: "E-Mail",
    },
    {
      key: "dob",
      label: "DOB",
    },
    {
      key: "title",
      label: "TITLE",
    },
    {
      key: "key_skills",
      label: "key-Skill",
    },
  ];
  const [userData, setUserData] = useState<ChakraUIProps | undefined>()
  const [searchResult, setSearchResult] = useState()
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) return setSearchResult(userData)
    const resultArr = userData.filter((data: { key: string; username: string; email: string; title: string; DOB: string; }) => {
      return data.key.includes(e.target.value)
        || data.username.includes(e.target.value)
        || data.email.includes(e.target.value)
        || data.title.includes(e.target.value)
        || data.DOB.includes(e.target.value)
    })
    // setUserData(resultArr)
    setSearchResult(resultArr)
  }

  useEffect(() => {
    let controller = new AbortController();
    async function fetchData(): Promise<void> {
      const res = await fetch("http://localhost:3003/data")
      const data = await res.json()
      Promise.all([
        setUserData(data),
        setSearchResult(data)

      ])
    }
    fetchData()
    return () => controller?.abort();
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <h1 className='text-2xl p-12 '> Built using ChakraUI</h1>
        <Input

          width={400}
          margin={22}
          placeholder='Search user'
          onChange={handleSearch}
        />
        <ChakraUI_Table rows={searchResult} headers={headers} />
      </>
      <>
        <h1 className='text-2xl p-12 '> Built using EvergreenUI</h1>
        <SearchInput
          width={400}
          margin={22}
          placeholder="Search user..."
          onChange={handleSearch}
        />
        <EvergreenUI_Table rows={searchResult} headers={headers} />
      </>
    </main>
  )
}
