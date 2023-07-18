import { Table } from 'evergreen-ui'
import Image from 'next/image'
import React from 'react'

interface Props {
    rows: {

        key: string,
        username: string,
        email: string,
        avatar: string,
        DOB: string,

        title: string,
        key_skill: string

    }[] | undefined

    headers: {
        key: string;
        label: string;
    }[]

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
                            <Table.TextHeaderCell key={header.key}>{header.label}</Table.TextHeaderCell>

                        ))
                    }
                </Table.Head>
                <Table.Body height={740} >
                    {rows?.map((row) => (
                        <Table.Row key={row.key}
                            height="auto" paddingY={22} paddingX={12}
                        // isSelectable onSelect={() => alert(row.name)}
                        >
                            <Table.TextCell >{row.key}</Table.TextCell>
                            <Table.TextCell >{row.username}</Table.TextCell>
                            <Table.TextCell >
                                <Image src={row.avatar} alt="user avatar" height={40} width={40} />
                            </Table.TextCell>
                            <Table.TextCell >{row.email}</Table.TextCell>

                            <Table.TextCell >{row.DOB}</Table.TextCell>

                            <Table.TextCell >{row.title}</Table.TextCell>
                            <Table.TextCell >{row.key_skill}</Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </section>
    )
}

export default EvergreenUI_Table

