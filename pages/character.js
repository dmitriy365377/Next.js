import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import MainLayout from '../component/layouts/MainLayouts';
import fetchCharacter from '../queries/FetchCharacter';
import { useRouter } from 'next/router';
import { withApollo } from '../lib/apollo';



import { CharacterImage, CharacrerInfo } from '../component/style/Character.style'

import VectorImage from '../image/back.png';
import InitialLoader from '../component/Loader/InitialLoader'


const Character = () => {
    const router = useRouter();
    const { data, error } = useQuery(fetchCharacter, { variables: { id: router.query.id } });

    console.log('router', router)
    console.log(data)

    if (!data || !data.character) {
        return (
            <InitialLoader />
        )
    }

    
    if (error) return <p>Error :(</p>;
    

    return (
        <>
            <MainLayout>
                <CharacterImage>
                    <span onClick={() => router.back()}>
                        <img src={VectorImage} id="vectorImage" />
                    </span>
                    <img src={data.character.image} id="characterImage" />
                </CharacterImage>
                <CharacrerInfo>
                    <h3>{data.character.name}</h3>
                    <p>{data.character.location.name}</p>
                    <h3>Status: {data.character.status}</h3>
                    <h3>Home Planet: Unknown</h3>
                </CharacrerInfo>
            </MainLayout>
            <style jsx>{`
                
                h3{
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                    margin-top:10px;
                }

                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    margin-top:10px;
                }

                #vectorImage{
                    width:100px
                }

                #characterImage{
                    margin: 0 auto;
                    width:35%;
                }
            `}
            </style>
        </>
    )
}


export default withApollo({ ssr: true })(Character)