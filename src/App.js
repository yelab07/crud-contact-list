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
          <Input onChange={onChange} name="name" type="text" />
          <Input onChange={onChange} name="phone" type="text" />
          <Input onChange={onChange} name="email" type="text" />
          <div>
            <Button>Submit</Button>
          </div>
        </Form>
      </FormContainer>
      <ContactContainer>
        {contacts.map((contact, index) => (
          <Contacts key={index}>
            <h1>{contact.name}</h1>
            <h1>{contact.phone}</h1>
            <h1>{contact.email}</h1>
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
