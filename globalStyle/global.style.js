import { createGlobalStyle } from 'styled-components';
 

export const Global = createGlobalStyle` 
html{
  background-image:url('/galaxy.jpg') ;
}
  
 * {   
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family: Arial, Helvetica, sans-serif;
 }
 :root {
     font-size: 24px;

     @media (min-width: 768px) {
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
      }
 }
`


export default Global