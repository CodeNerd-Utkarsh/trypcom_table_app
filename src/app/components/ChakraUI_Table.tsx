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
import { ChakraUIProps } from "../_types/"
import Image from 'next/image'



function ChakraUI_Table({ rows, headers, sort, pagination, caption }: ChakraUIProps): JSX.Element {
    return (
        <section className='h-screen w-full'>
            <TableContainer>
                <Table variant='simple'>
                    {
                        caption ? (
                            <TableCaption>{caption}</TableCaption>
                        ) : (null)
                    }
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
                                    <Td>
                                        <Image src={row.avatar} alt="user avatar" height={40} width={40} />
                                    </Td>
                                    <Td>{row.email}</Td>
                                    <Td>{row.DOB}</Td>
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