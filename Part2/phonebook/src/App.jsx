import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 0 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
  ]) ;

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  
  const addName = (event) =>{
    event.preventDefault();    
    nameCheck(newName,newNumber)             
  } ;

  const handleNameChange=(event) =>{
    setNewName(event.target.value)
    console.log(event.target.value)
  };
  const handleNumberChange=(event) =>{
    setNewNumber(event.target.value)
    console.log(event.target.value)
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

const filteredPersons = persons
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const nameCheck = (newName, newNumber) => {
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      
    } else {
      const nameObject = { name: newName, number: newNumber,id: persons.length }; 
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewNumber('');
      console.log(`added name: ${newName}, added number: ${newNumber}`);
      console.log(persons);
    }
  };

  return (
    <div>                         
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Numbers filteredPersons={filteredPersons} />
    </div>
  )
}

export default App