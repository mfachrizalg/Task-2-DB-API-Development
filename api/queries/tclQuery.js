const bookTransaction1 = 
`
INSERT INTO public.Book (bookid, Title, PublisherID, ISBN, Pages, PublishedDate) 
VALUES ($1, $2, $3, $4, $5, $6);`

const bookTransaction2 = 
`INSERT INTO public.AuthorBook(BookID, AuthorID)
VALUES ((SELECT BookID FROM Book WHERE ISBN='9781234567890'), $1);` 

module.exports = {
    bookTransaction1,
    bookTransaction2
}