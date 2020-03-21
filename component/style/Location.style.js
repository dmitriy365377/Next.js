import styled from 'styled-components';

export const Section = styled.div`
    display:flex;
    flex-direction: column;
`


export const Container = styled.div`
    margin: 20px auto;
    width: 70%;
    min-height: 100px;
    background: #073955;
    box-shadow: 5px 3px 14px rgba(29, 99, 234, 0.48);
    justify-self: center;
    display: flex;
    background: #312A2A;
`
 

export const PlanetInformation = styled.div`
    width:60%;
    margin: 0 2.23%;
    margin-top: 16px;
    color: white;
`

export const Residents = styled.div`
    padding-top: 40px;
    color: white;
    text-align:center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;  
`
export const ResidentImg = styled.div`
    display: inline-flex;
    width:30%;
`
  
export const PlanetImg = styled.div`
    display: flex;
    flex-flow: row wrap; 
`

export const PlanetInfo = styled.div`
    color: #fff;
    padding-left:20%;
`