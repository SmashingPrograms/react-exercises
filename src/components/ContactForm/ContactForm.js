import { useState } from "react";
import "../../App.css";
  
function ContactForm() {
  // const [todos, setTodos] = useState([]]);
  const [form, setForm] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // setBlog([1, 2])

  // const addContact = (firstName, lastName, email, phoneNumber) => {
  //   // console.log(blog)
  //   const newForm = {
  //     firstName,
  //     lastName,
  //     email,
  //     phoneNumber,
  //   }
  //   console.log(newForm)
  //   setForm([newForm, ...form])
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // addContact(firstName, lastName, email, phoneNumber);

    const newForm = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    setForm([newForm, ...form])
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  return (
    <>
      <h1>B: Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name: </label>
        <input type="text" name="firstName" onChange={handleFirstName} value={firstName} required />
        <label htmlFor="lastName">Last name: </label>
        <input type="text"  name="lastName" onChange={handleLastName} value={lastName} required />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={handleEmail} value={email} required />
        <label htmlFor="phone">Phone #: </label>
        <input type="tel" name="phone" onChange={handlePhoneNumber} value={phoneNumber} required />
        <button type="submit"> ADD AS CONTACT IN YOUR LIST </button>
      </form>
        {
          form.map(i => (
            <>
              <ul>
                <li>
                  First name: {i.firstName}
                </li>
                <li>
                  Last name: {i.lastName}
                </li>
                <li>
                  Email: {i.email}
                </li>
                <li>
                  Phone #: {i.phoneNumber}
                </li>
              </ul>
              <hr />
            </>
          ))
        }
      {/* <BlogList title={title} /> */}
    </>
  )
}

export default ContactForm;