import { Table } from 'evergreen-ui'
import Image from 'next/image'
import React from 'react'

interface Props {
    rows: {

        uid: string,
        username: string,
        email: string,
        avatar: string,
        DOB: string,
        employment: {
            title: string,
            key_skill: string
        }
    }[] | undefined

    headers: string[] | undefined

    sort?: boolean
    pagination?: boolean
    caption?: string
}

function EvergreenUI_Table({ rows, headers, sort, pagination, caption }: Props) {

    return (
        <section className='h-screen w-full'>

            <Table className='w-full'>

                <Table.Head>
                    {
                        headers?.map((header) => (
                            <Table.TextHeaderCell key={header}>{header}</Table.TextHeaderCell>

                        ))
                    }
                </Table.Head>
                <Table.Body height={740} >
                    {rows?.map((row) => (
                        <Table.Row key={row.uid}
                            height="auto" paddingY={32} paddingX={12}
                        // isSelectable onSelect={() => alert(row.name)}
                        >
                            <Table.TextCell >{row.uid}</Table.TextCell>
                            <Table.TextCell >{row.username}</Table.TextCell>
                            <Table.TextCell >{row.email}</Table.TextCell>

                            <Table.TextCell >{row.DOB}</Table.TextCell>
                            <Table.TextCell >
                                <Image src={row.avatar} alt="user avatar" height={100} width={100} />
                            </Table.TextCell>

                            <Table.TextCell >{row.employment.title}</Table.TextCell>
                            <Table.TextCell >{row.employment.key_skill}</Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </section>
    )
}

export default EvergreenUI_Table

