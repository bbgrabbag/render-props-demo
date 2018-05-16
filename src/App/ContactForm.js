import React from 'react'

function ContactForm(props) {
    const { handleSubmit, handleChange, inputs, upload } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" value={inputs.name} onChange={handleChange} />
            <label >
                Male:
                <input name="gender" type="radio" value="male" checked={inputs.gender === "male"} onChange={handleChange} />
            </label>
            <label >
                Female:
            <input name="gender" type="radio" value="female" checked={inputs.gender === "female"} onChange={handleChange} />
            </label>
            <label >
                N/A:
            <input name="gender" type="radio" value="n/a" checked={inputs.gender === "n/a"} onChange={handleChange} />
            </label>
            <select name="occupation" value={inputs.occupation} onChange={handleChange}>
                <option value="none">None</option>
                <option value="welder">Welder</option>
                <option value="philosopher">Philosopher</option>
                <option value="musician">Musician</option>
            </select>
            <label>
                Vet:
                <input name="vet" type="checkbox" checked={inputs.vet} onChange={handleChange} />
            </label>
            <input type="file" ref={upload} />
            <button>Submit</button>
        </form>
    )
}

export default ContactForm;