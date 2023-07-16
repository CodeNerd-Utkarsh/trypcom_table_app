// import Image from 'next/image'
import NextUI_Table from './components/NextUI_Table'
import EvergreenUI_Table from './components/EvergreenUI_Table'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EvergreenUI_Table />
      <NextUI_Table />
    </main>
  )
}
