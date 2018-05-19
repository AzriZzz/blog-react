import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        return(
            <div className="form-group">
            <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input} 
                />
            </div>
        );
    }


    render(){
        return(
            <form>
                <Field 
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    //validate the input from the 'values'
    if (values.title.length < 3) {
        errors.title = 'Title must be at least 3 characters!';
    }

    if (!values.title || values.title.length < 3){
        errors.title = 'Enter a title!';
    }

    if (!values.content){
        errors.content = 'Enter a content!';
    }

    if (!values.categories){
        errors.categories = 'Enter a categories!';
    }
    
    //if error is empty, the form is fine to submit 
    //if error has *any* properties, redux form is assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);

