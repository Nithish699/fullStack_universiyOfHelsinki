import { useState } from 'react'
import Person from './components/Person'
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '140-123456' }
  ]) ;
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
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

  const nameCheck = (newName, newNumber) => {
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      
    } else {
      const nameObject = { name: newName, number: newNumber }; 
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
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => (
          <Person key={person.name} person={person} /> 
          ))}
      </ul>
    </div>
  )
}

export default App