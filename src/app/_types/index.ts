
export interface ChakraUIProps {
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


export interface EvergreenUIProps {
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
