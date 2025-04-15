import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([]) ;

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data);
        })
  }, [])
  
  console.log('render', persons.length, 'persons')

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
      const nameObject = { name: newName, number: newNumber,id: persons.length+1 }; 
      axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
        console.log(`Added name: ${newName}, added number: ${newNumber}`);
      })
      .catch(error => {
        console.error('Error adding person:', error);
      });
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