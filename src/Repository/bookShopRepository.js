import axios from "../custom-axios/axios";
import categories from "../Components/Categories/categories";

const BookShopService ={

    fetchBooks: () => {
        return axios.get("/book");
    },
    fetchCategories: () => {
        return axios.get("/book/category");
    },
    fetchBookById: (id) => {
        return axios.get(`/book/${id}`);
    },
    deleteBook: (id) => {
        return axios.delete(`/book/delete/${id}`);
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/book/add", {
            name: name,
            category: category,
            authorId: author,
            availableCopies: availableCopies
        });

    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/book/edit/${id}`, {
            name: name,
            category: category,
            authorId: author,
            availableCopies: availableCopies
        });
    },
    markBookAsTaken: (id) => {
        return axios.post(`/book/reserveBook/${id}`);
    }

}

export default BookShopService;