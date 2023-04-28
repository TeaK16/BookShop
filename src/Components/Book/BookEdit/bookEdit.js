import React from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) => {

    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        name: " ",
        category: "NOVEL",
        author: 0,
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
        const name = formData.name !== "" ? formData.name : props.book.name;
        console.log(name)
        const category = formData.category !== "NOVEL" ? formData.category : props.book.category;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category, author, availableCopies);
        navigate("/book");
    }


    return (
        <div className="container mm-4 mt-5 bg-light">
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
                                   placeholder={props.book.name}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="availableCopies">Available Copies</label>
                            <input type="text"
                                   className="form-control"
                                   id="availableCopies"
                                   name="availableCopies"
                                   placeholder={props.book.availableCopies}
                                   required
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" className="form-control" onChange={handleChange}>
                                {props.category.map((item) =>{
                                    if(props.book.category !== undefined &&
                                        props.book.category === item)
                                        return (<option selected={item}
                                                        value={props.book.category}>{item}</option>);
                                    else
                                        return (<option value={item}>{item}</option>);
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <select name="author" className="form-control" onChange={handleChange}>
                                {props.author.map((term) =>{
                                    if(props.book.author !== undefined &&
                                        props.book.author.id === term.id)
                                        return (<option selected={props.book.author.id}
                                                        value={term.id}>{term.name + ' ' +term.surname}</option>);
                                    else
                                        return (<option value={term.id}>{term.name + ' ' +term.surname}</option>);
                                })}
                            </select>
                        </div>
                        <button id="submit" type="submit" className="btn btn-warning mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookEdit;