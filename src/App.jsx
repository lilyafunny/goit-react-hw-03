import './App.css'
import contacts from './contacts.json'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"

import { useState } from 'react'

const App = () => {
  const [numbers, setNumbers] = useState(contacts);
  const [search, setSearch] = useState('');



  const searchContacts = numbers.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList numbers={searchContacts} />
    </>
  )
}

export default App
