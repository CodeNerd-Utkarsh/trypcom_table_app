// import Image from 'next/image'
import NextUI_Table from './components/NextUI_Table'
import EvergreenUI_Table from './components/EvergreenUI_Table'

export default function Home() {
  const mockedData = [
    {
      "id": 3989,
      "uid": "54e88eab-1a18-4c74-9b64-62a7d77b125a",
      "password": "Hlp9SOiVCA",
      "first_name": "Virgilio",
      "last_name": "Kulas",
      "username": "virgilio.kulas",
      "email": "virgilio.kulas@email.com",
      "avatar": "https://robohash.org/voluptatemenimadipisci.png?size=300x300&set=set1",
      "gender": "Female",
      "phone_number": "+225 (441) 197-0995 x24671",
      "social_insurance_number": "768098121",
      "date_of_birth": "1986-05-20",
      "employment": {
        "title": "Human Administration Designer",
        "key_skill": "Networking skills"
      }
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EvergreenUI_Table />
      <NextUI_Table />
    </main>
  )
}
