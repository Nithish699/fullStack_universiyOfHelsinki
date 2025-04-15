import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';
import personsService from './services/persons';

const App = () => {

  const [persons, setPersons] = useState([]) ;
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error('Error fetching persons:', error);
      });
  }, []);  
  

  const nameCheck = (newName, newNumber) => {
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      
    } else {
      const nameObject = { name: newName, number: newNumber }; 
      personsService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          console.log(`Added name: ${newName}, added number: ${newNumber}`);
        })
      .catch(error => {
        console.error('Error adding person:', error);
      });
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          console.log(`${name} deleted successfully`);
        })
        .catch(error => {
          console.error(`Error deleting ${name}:`, error);
          alert(`The person '${name}' was already removed from the server.`);
          // Remove the person from the UI even if the backend deletion fails
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  };

  const addName = (event) =>{
    event.preventDefault();    
    nameCheck(newName,newNumber)             
  } ;

  const handleNameChange=(event) =>{
    setNewName(event.target.value)
  };
  const handleNumberChange=(event) =>{
    setNewNumber(event.target.value)
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

const filteredPersons = persons
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];



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
      <Numbers 
      filteredPersons={filteredPersons}
      handleDelete={handleDelete}
       />
    </div>
  )
}

export default App