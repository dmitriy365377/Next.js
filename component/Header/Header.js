import React from 'react';
import RickyAndMorty from '../../image/Rick_and_Morty_logo.png'
import { MinHeight } from '../style/Header.style';


const Header = () => {
    return (
        <MinHeight> 
                <img src={RickyAndMorty} /> 
        </MinHeight>
    )
}


export default Header
