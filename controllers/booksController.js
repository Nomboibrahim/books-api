const books = require("../books")


//get all books
const getBooks =(req, res)=>{
    res.status().json()
}

//delete a book

const deleteBook= (req, res)=>{
    res.json(books.filter((book)=> book.title!==req.params.title))
}
/*const deleteBook =async(req, res)=>{
    const foundBook =await books.findByTitle(req, params.title)
    if (foundBook){
        foundBook.remove()
        res.json({msg: "book remove"})

    } else{
        res.status(404).json({error:"Book not found"})
    }
}*/


module.exports={getBooks, deleteBook}