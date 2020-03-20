import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import MainLayout from '../component/layouts/MainLayouts';
import fetchLocation from '../queries/FetchLocation'
import { withApollo } from '../lib/apollo'
import {useRouter} from 'next/router'

const LocationPage = (props) => {
    const router = useRouter();
    const {data} = useQuery(fetchLocation, { variables: {name: router.query.name }});

    return (
        <>
            <MainLayout>
                <h1>Contact</h1>
                <pre>{JSON.stringify(router, null, 2)}</pre>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </MainLayout>
        </>
    )
}

export default withApollo()(LocationPage);