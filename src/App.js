import './App.css';
import Title from './component/Text';
import { useState } from "react";
function App() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [contacts, setContacts] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addToContacts = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <input onChange={onchange} name="name" type="text" />
      <input onChange={onchange} name="phone" type="text" />
      <input onChange={onchange} name="email" type="text" />
      <button> Submit</button>
    </div>
  );
}

export default App;
