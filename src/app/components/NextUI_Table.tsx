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

function NextUI_Table({ rows, headers, sort, pagination, caption }: Props) {
    return (
        <div>NextUI_Table</div>
    )
}

export default NextUI_Table