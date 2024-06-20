import React, { useState } from 'react'

const Contact_Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        role: "",
        teamName: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='c_form'>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className='c_form'>
                    <div className="contact-form-inner-div">
                        <input
                            className="contact-form-input"
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                        />
                        <label className={formData.name.length >= 1 ? "form-lable" : "input-form-lable"}>
                            Name{" "}
                        </label>
                    </div>

                    <div className="contact-form-inner-div">
                        <input
                            className="contact-form-input"
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                        />

                        <label className={formData.email.length >= 1 ? "form-lable" : "input-form-lable"}>
                            Email ID{" "}
                        </label>
                    </div>
                </div>
                <div className="contact-form-inner-div">
                    <input
                        className="contact-form-input"
                        type="selected"
                        name="department"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <label className={formData.department.length >= 1 ? "form-lable" : "input-form-lable"}>
                        Department
                    </label>
                </div>

                <div className="contact-form-inner-div">
                    <input
                        className="contact-form-input"
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                    />
                    <label className={formData.role.length >= 1 ? "form-lable" : "input-form-lable"}>
                        Role
                    </label>
                </div>

                <div>
                    <div className="contact-form-inner-div">
                        <input
                            className="contact-form-input"
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleInputChange}
                        />

                        <label className={formData.teamName.length >= 1 ? "form-lable" : "input-form-lable"}>
                            Team Name
                        </label>
                    </div>
                </div>
                <div className='d-flex mt-4 justify-content-center'>
                <button className="pushable">
                    <span className="front">
                        Send
                    </span>
                </button>
                </div>
            </form>
        </div>
    )
}

export default Contact_Form
