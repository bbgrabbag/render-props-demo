import React from 'react';
import Loading from "./shared/Loading";
import ErrorHandler from "./shared/ErrorHandler";
import DataList from "./shared/DataList";
import Person from "./Person";
import Form from "./shared/Form";
import ContactForm from "./ContactForm";

import { connect } from "react-redux";
import { addContact } from "../redux/contacts";

function Contacts(props) {
    const { loading, err, data, addContact } = props;
    return (
        <div>
            <Form resetInputs inputs={{
                name: "",
                gender: "n/a",
                occupation: "none",
                vet: false
            }} submit={(inputs, file) => addContact(inputs, file)} render={props => <ContactForm {...props} />} />
            <Loading loading={loading} render={() => <div>...Loading</div>}>
                <ErrorHandler err={err} render={props => <div>Error {props.code}: {props.msg}</div>}>
                    <DataList data={data} className="red rum" render={props => <Person {...props} />} />
                </ErrorHandler>
            </Loading>
        </div>
    )
}

export default connect(null, { addContact })(Contacts);
