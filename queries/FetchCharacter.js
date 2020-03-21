import gql from 'graphql-tag';


export default gql`
    query CharacterQuery($id:Int) {
        character(id:$id){
		id
        name
        type
		gender 
		status
        image
        location {
            id
            name
        }    
    }     
}    
`   