import React from "react";
import {Link} from "react-router-dom";

const header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-fixed nav-tabs justify-content-center  bg-light text-dark">
            <div className="navbar nav-justified" id="navbarCollapse" >
                <ul className="navbar-nav md-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/book"}>Book</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to={"/categories"}>Category</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
export default header;