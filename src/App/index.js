import React, { Component } from 'react';
import { connect } from "react-redux";
import Contacts from "./Contacts";
import { getContacts } from "../redux/contacts";

class App extends Component {
    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        return (
            <div>
                <Contacts {...this.props.contacts} />
            </div>
        )
    }
}

export default connect(state => state, { getContacts })(App)
