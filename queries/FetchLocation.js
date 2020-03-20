import gql from 'graphql-tag'


export default gql` 
    query LocationQuery($page:Int,$name: String) {
        locations(page:$page,filter:{name:$name} ) { 
            results{
                id
                name
                type
             residents{
                 image
                 id
             }
         }
         info{
              pages
             count 
             prev
              next
            }
     }
    }
` 