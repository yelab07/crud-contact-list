import "./App.css";
import Form from "./component/Form";
import { useState } from "react";
import FormContainer from "./component/FormContainer";
import Button from "./component/Button";
import Input from "./component/Input";
import Contacts from "./component/Contact";
import ContactContainer from "./component/ContactContainer";
function App() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [contacts, setContacts] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addToContacts = (e) => {
    e.preventDefault();

    setContacts([...contacts, form]);
  };
  const deleteContact = (index) => {
    const newArrey = [...contacts];
    newArrey.splice(index, 1);
    setContacts(newArrey);
  };
  const updateContact = (index) => {
    const newArrey = [...contacts];
    newArrey[index] = form;
    setContacts(newArrey);
  };
  const styledButton = {
    marginLeft: "7px",
    marginRight: "7px",
  };
  return (
    <div className="App">
      <FormContainer>
        <Form onSubmit={addToContacts}>
          <Input
            onChange={onChange}
            name="fname"
            type="text"
            placeholder="First Name"
          />
          <Input
            onChange={onChange}
            name="lname"
            type="text"
            placeholder="Last Name"
          />
          <Input
            onChange={onChange}
            name="phone"
            type="text"
            placeholder="Phone Number"
          />

          <Input
            onChange={onChange}
            name="email"
            type="text"
            placeholder="E-mail"
          />
          <Input
            onChange={onChange}
            name="address"
            type="text"
            placeholder="Address"
          />
          <Input
            onChange={onChange}
            name="image"
            type="text"
            placeholder="Profile Image Url"
          />
          <div>
            <Button>Add Contact</Button>
          </div>
        </Form>
      </FormContainer>
      <ContactContainer>
        {contacts.map((contact, index) => (
          <Contacts key={index}>
            <h1>{contact.fname}</h1>
            <h1>{contact.lname}</h1>
            <h1>{contact.phone}</h1>
            <h1>{contact.email}</h1>
            <h1>{contact.address}</h1>
            <h1>{contact.image}</h1>
            <Button
              onClick={(e) => {
                e.preventDefault();
                deleteContact(index);
              }}
              style={styledButton}
            >
              Delete
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                updateContact(index);
              }}
              style={styledButton}
            >
              Update
            </Button>
          </Contacts>
        ))}
      </ContactContainer>
    </div>
  );
}

export default App;
