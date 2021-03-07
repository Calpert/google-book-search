import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div class="form-group">
                <label for="booksearch">Book Search</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
                <button type="search" class="btn btn-primary">Search</button>
        </form>
    )
}

export default Form;