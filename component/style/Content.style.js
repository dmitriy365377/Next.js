import styled from 'styled-components';


export const Section = styled.div`
    display:flex;
    flex-direction: column;
`


export const Container = styled.div`
    margin: 20px auto;
    width: 80%;
    min-height: 100px;
    background: #fff;
    box-shadow: 5px 3px 14px rgba(29, 99, 234, 0.48);
    justify-self: center;
    display: flex;
    background: #312A2A;
    
    @media(max-width: 768px) {
         width: 95%;   
    }    
`

export const Planet = styled.div`
    display: inline-flex;
    width:30%;

    @media(max-width: 768px) {
        width: 40%;   
   }  
`

export const PlanetInformation = styled.div`
    width:70%;
    margin: 0 2.23%;
    margin-top: 16px;
    color: white;
`

export const Residents = styled.div`
    display:flex;
`
