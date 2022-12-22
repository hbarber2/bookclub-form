import React from 'react';
function Form () {
    
    const [data, setData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            meetInPerson: false,
            zip: "",
            radius: "",
            genres: "",
            leadClub: false,
            comments: ""
        })

    function handleChange(event) {
        const {name, type, checked, value} = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function handleRadio(event) {
        const {name, value} = event.target;
        const isChecked = value === 'true' ? true : false;
        setData(prevData => {
            return {
                ...prevData,
                [name]: isChecked
            }
        })
    }

    function handleSubmit (event) {
        event.preventDefault()
        console.log('submit')
    }

    console.log(data)

    return (
        <div className="container">
            <h1>The Book Club Finder</h1>
            <h2>Please fill out our form and we'll match you with a local or virtual group</h2>
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
                <div className="personal-info">
                    <div className="first-name">
                        <label htmlFor="firstName">First Name <span className="red">*</span></label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={data.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="last-name">
                        <label htmlFor="">Last Name <span className="red">*</span></label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={data.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email <span className="red">*</span></label>
                        <input
                            type="email"
                            name="email"
                            required
                            onChange={handleChange}
                            value={data.email}
                        />
                    </div>
                </div>
                <h3>Let's Talk Books</h3>
                <div className="book-info">
                    <div>
                        <fieldset className="meet-in-person">
                            <legend htmlFor="meetInPerson">Would you like to meet in person?</legend>
                            <div className="yes-input">
                                <input
                                    value="true"
                                    type="radio"
                                    name="meetInPerson"
                                    onChange={handleRadio}
                                    checked={data.meetInPerson.value}
                                /> Yes
                            </div>
                            <div className="no-input">
                                <input 
                                    type="radio"
                                    name="meetInPerson"
                                    value="false"
                                    onChange={handleRadio}
                                    checked={data.meetInPerson.value}
                                /> No
                            </div>
                        </fieldset>
                    </div>
                    <div className="zipcode">
                        <label htmlFor="zip">Zip code</label>
                        <input
                            type="number"
                            min="00000"
                            max="99999"
                            name="zip"
                            onChange={handleChange}
                            value={data.zip}
                        />
                    </div>
                    <div className="radius-travel">
                        <label htmlFor="radius">How far are you willing to travel?</label>
                        <select
                            id="radius"
                            value={data.radius}
                            onChange={handleChange}
                            name="radius"
                        >
                            <option value=""></option>
                            <option value="5">up to 5 miles</option>
                            <option value="10">5-10 miles</option>
                            <option value="20">10-20 miles</option>
                            <option value="100">20+ miles</option>
                        </select>
                    </div>
                    <div className="genres">
                        <label htmlFor="genres">What genre are you most interested in?</label>
                        <select
                            id="genres"
                            value={data.genres}
                            onChange={handleChange}
                            name="genres"
                        >
                            <option></option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-fiction</option>
                            <option value="historical-fiction">Historical fiction</option>
                            <option value="mystery">Mystery</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="educational">Educational</option>
                            <option value="young-adult">Young Adult</option>
                            <option value="self-help">Self Help</option>
                            <option value="biography">Biography</option>
                            <option value="poetry">Poetry</option>
                            <option value="history">History</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="autobiography">Autobiography</option>
                            <option value="mythology">Mythology</option>
                            <option value="essay">Essay</option>
                            <option value="philosophy">Philosophy</option>
                        </select>
                    </div>
                    <div className="lead">
                        <fieldset>
                            <legend htmlFor="leadClub">Would you be interested in leading a discussion?</legend>
                            <div className="yes-input">
                                <input
                                    value="true"
                                    type="radio"
                                    name="leadClub"
                                    onChange={handleRadio}
                                    checked={data.leadClub.value}
                                /> Yes
                            </div>
                            <div className="yes-input">
                                <input 
                                    type="radio"
                                    name="leadClub"
                                    value="false"
                                    onChange={handleRadio}
                                    checked={data.leadClub.value}
                                /> No
                            </div>
                        </fieldset>
                    </div>
                    <div className="comments">
                        <textarea
                            value={data.comments}
                            name="comments"
                            placeholder="Anything else you would like to add?"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form