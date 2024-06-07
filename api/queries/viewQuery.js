const getAuthorBookView = "SELECT b.title AS booktitle,a.name AS authorname FROM book b JOIN authorbook ba ON b.bookid = ba.bookid JOIN author a ON ba.authorid = a.authorid;"

module.exports = {
    getAuthorBookView
}