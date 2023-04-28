import React from "react";
import {useNavigate} from "react-router-dom";

const BookAdd = (props) => {

    const history = useNavigate();

    const [formData, updateFormData] = React.useState({
        name: "",
        category: "NOVEL",
        author: 1,
        availableCopies: 0,
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, author, availableCopies);
        history("/book");
    }


    return (
        <div className="container mm-6 mt-5 ">
            <div className="row  justify-content-center">
                <div className="col-md-5">
                    <form className="w-75 p-3 bg-light border border-warning rounded" onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   required
                                   placeholder="Enter book name"
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="availableCopies">Available Copies</label>
                            <input type="text"
                                   className="form-control"
                                   id="availableCopies"
                                   name="availableCopies"
                                   placeholder="1"
                                   required
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" className="form-control" onChange={handleChange}>
                                {props.category.map((term) =>
                                    <option value={term}>{term}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <select name="author" className="form-control" onChange={handleChange}>
                                {props.author.map((term) =>
                                    <option value={term.id}>{term.name+' '+term.surname}</option>
                                )}
                            </select>
                        </div>
                        <button id="submit" type="submit" className="btn btn-warning mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookAdd;