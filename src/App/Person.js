import React from 'react';
import { connect } from "react-redux";
import { deleteContact, editContact } from "../redux/contacts";
import Form from "./shared/Form";
import ContactForm from "./ContactForm";
import Toggler from "./shared/Toggler";

function Person(props) {
    const { name, index, gender, occupation, vet, deleteContact, editContact } = props;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Gender: {gender}</p>
            <p>Occupation: {occupation}</p>
            <p>Veteran: {String(vet)}</p>
            <Toggler render={({ toggle, isToggled }) =>
                <div>
                    <button onClick={toggle}>Edit</button>
                    <button onClick={() => deleteContact(index)}>X</button>
                    {isToggled && <Form
                        inputs={{ name, gender, occupation, vet }}
                        submit={inputs => editContact(index, inputs)}
                        render={props => <ContactForm {...props} />} />}
                </div>
            } />
        </div>
    )
}

export default connect(null, { deleteContact, editContact })(Person)
