import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
    mutation addClient($name:String!,$email:String!,$phone:String!,$address:String){
        addClient(name:$name,email:$email,phone:$phone,address:$address){
            id
            name
            email
            phone
            address
        }
    }
`;

const DELETE_CLIENT = gql`
    mutation deleteClient ($id:ID!){
        deleteClient(id:$id){
            id
            name
            email
            phone
            address
        }
    }
`;

export { ADD_CLIENT, DELETE_CLIENT };