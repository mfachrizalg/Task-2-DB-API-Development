const bookTransaction= 
`
INSERT INTO public.Book (bookid, Title, PublisherID, ISBN, Pages, PublishedDate) 
VALUES ($1, $2, $3, $4, $5, $6);` 

module.exports = {
    bookTransaction,
}