import gql from 'graphql-tag';


export default gql`
    query CharacterQuery($id:ID) {
        character(id:$id){
		id
        name
	    status
        gender 
        image
        location {
            id
            name
            type
            dimension 
             
        }   
    }     
}    
`   