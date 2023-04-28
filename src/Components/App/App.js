
import './App.css';
import {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Header from "../../Header/header";
import Book from "../Book/BookList/book";
import Category from "../Categories/categories";
import BookShopService from "../../Repository/bookShopRepository";
import categories from "../Categories/categories";
import BookAdd from "../Book/BookAdd/bookAdd";
import BookEdit from "../Book/BookEdit/bookEdit";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],
      author: [],
      categoryName: [],
      selectedBook: {}
    }
  }

  render() {
    return(

        <Router>
          <Header/>
          <main>
            <Routes>
              <Route path={"/categories"}
                     element={<Category category={this.state.categoryName} />}/>
              <Route path={"/book/edit/:id"} element={<BookEdit category={this.state.categoryName}
                                                                author={this.state.author}
                                                                onEditBook={this.editBook}
                                                                book={this.state.selectedBook} />}/>
              <Route path={"/book/add"} element={<BookAdd category={this.state.categoryName}
                                                          author={this.state.author}
                                                          onAddBook={this.addBook}/>}/>

              <Route path={"/book"}
                     element={<Book book={this.state.book}
                                    onDelete={this.deleteBook}
                                    onEdit={this.loadBookById}
                                    onMarkAsTaken={this.markBookAsTaken}/>}/>

              <Route path="/" element={<Navigate replace to="/book"/>}/>
            </Routes>
          </main>
        </Router>



    );
  }

  loadBooks = () => {
    BookShopService.fetchBooks()
        .then((data)=>{
          this.setState({
            book: data.data
          })
        })
  }
  loadCategory = () => {
    BookShopService.fetchCategories()
        .then((data)=>{
          this.setState({
            categoryName: data.data
          })
        })
  }
  loadAuthors = () => {
    BookShopService.fetchAuthors()
        .then((data) => {
              this.setState( {
                author: data.data
              })
            }
        )
  }

  deleteBook = (id) => {
    BookShopService.deleteBook(id)
        .then(() => {
          this.loadBooks();
        })
  }
  addBook = (name,category,authorId,availableCopies) => {
    BookShopService.addBook(name,category,authorId,availableCopies)
        .then(() => {
          this.loadBooks();
        })
  }
  loadBookById = (id) => {
    BookShopService.fetchBookById(id)
        .then((data)=>{
          this.setState({
            selectedBook: data.data
          })
        })
  }
  editBook = (id,name,category,authorId,availableCopies)=> {
    BookShopService.editBook(id,name,category,authorId,availableCopies)
        .then(() => {
          this.loadBooks();
        })
  }
  markBookAsTaken = (id) => {
    BookShopService.markBookAsTaken(id)
        .then(()=>{
          this.loadBooks();
        })
  }

  componentDidMount() {
    this.loadBooks();
    this.loadCategory();
    this.loadAuthors()
  }
}
export default App;
