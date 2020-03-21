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
    const { data, error, networkStatus } = useQuery(fetchCharacter, { variables: { id: router.query.id } });

    if (error) return <p>Error :(</p>;

    if (!data || !data.character) {
        return (
            <InitialLoader />
        )
    }


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
                    line-height:30px;
                }

                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    line-height:30px;
                }

                #vectorImage{
                    width:100px
                }

                #characterImage{
                    margin: 0 auto;
                    width:35%;
                }

                @media(max-width: 768px) {
                    #characterImage{
                        width:100%;
                    }
                    
                    #vectorImage{
                        position: absolute;
                        left: 40px;
                   }

                   h3{
                    line-height:60px;
                    font-size: 50px;
                   }

                   p{
                    line-height:50px;
                    font-size: 30px;
                   }
                }  
            `}
            </style>
        </>
    )
}


export default withApollo({ ssr: true })(Character)