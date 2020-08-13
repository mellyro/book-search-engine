import gql from 'graphql-tag';


export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            author
            description
            bookId
            image
            link
            title
        }
    }
}
`;
