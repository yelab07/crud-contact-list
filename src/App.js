import './App.css';
import Form from './component/Form';
import { useState } from "react";
import FormContainer from './component/FormContainer';
import Button from './component/Button';
import Input from './component/Input';
function App() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [contacts, setContacts] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addToContacts = (e) => {
    e.preventDefault();
    setContacts([...contacts,form])
  }
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
    </div>
  );
}

export default App;
