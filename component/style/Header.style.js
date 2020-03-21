import styled from 'styled-components';
import img from '../../image/Rick_and_Morty_logo.png';
 

export const MinHeight = styled.div`
    display:flex;
    justify-content: center;
    min-height:150px;
    background:black;
    width:80%;
    margin:0 auto;
    @media(max-width:768px) {
        width: 100%;
    }
`

export const RickyAndMorty = styled.div`
    background-image: url("${img}") ;
    background-repeat: no-repeat; 
    width: 45%;
    background-position: center;
    background-size: contain;

    @media(max-width: 768px) {
        height: 65vw;
        width: 100%;
        background-size: 99% 107%;
   }  
` 
 
 