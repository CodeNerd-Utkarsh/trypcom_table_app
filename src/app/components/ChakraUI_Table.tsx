"use client"

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Image from 'next/image'


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

function ChakraUI_Table({ rows, headers, sort, pagination, caption }: Props) {
    return (
        <section className='h-screen w-full'>
            <TableContainer>
                <Table variant='simple'>

                    {/* <TableCaption>{caption}</TableCaption> */}
                    <Thead>
                        <Tr>
                            {
                                headers?.map((header) => (
                                    <Th key={header.key} >{header.label}</Th>
                                ))
                            }
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            rows?.map((row) => (
                                <Tr key={row.key}>
                                    <Td>{row.key}</Td>
                                    <Td>{row.username}</Td>
                                    <Td>{row.email}</Td>
                                    <Td>{row.DOB}</Td>
                                    <Td>
                                        <Image src={row.avatar} alt="user avatar" height={40} width={40} />
                                    </Td>
                                    <Td>{row.title}</Td>
                                    <Td>{row.key_skill}</Td>
                                </Tr>
                            ))
                        }


                    </Tbody>

                </Table>
            </TableContainer>
        </section>
    )
}

export default ChakraUI_Table