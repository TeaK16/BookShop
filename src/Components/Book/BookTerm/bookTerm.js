import React from "react";
import {Link, useNavigate} from "react-router-dom";

const BookTerm = (props) => {

    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <Link className={"btn btn-primary mx-1"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/book/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link className={"btn btn-success"}
                      onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark As Taken
                </Link>
                <a  title={"Delete"}
                    className={"btn btn-danger mx-1"}
                    onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    );
}

export default BookTerm;