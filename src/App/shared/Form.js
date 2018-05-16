import { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: props.inputs
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { type, name, value, checked } = e.target;
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: type === "checkbox" ? checked : value
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state.inputs, this.upload.files);
        if (this.props.resetInputs) this.setState({ inputs: this.props.inputs });
    }
    render() {
        return this.props.render({ handleSubmit: this.handleSubmit, handleChange: this.handleChange, inputs: this.state.inputs, upload: el => this.upload = el });
    }
}
