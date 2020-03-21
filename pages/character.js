import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from 'next/router';
import { withApollo } from '../lib/apollo';

import MainLayout from '../component/layouts/MainLayouts';
import fetchCharacter from '../queries/FetchCharacter';


const Character = () => {
    const router = useRouter();
    const { data } = useQuery(fetchCharacter, { variables: { id: router.query.id } });
    console.log(router)
    console.log('data',data)
    return (
        <>
            <MainLayout>
                <h2>Character</h2> 
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </MainLayout>
        </>
    )
}


export default withApollo({ ssr: true })(Character)