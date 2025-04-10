import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const handleNoteChange=(event) =>{
    setNewName(event.target.value)
    console.log(event.target.value)
  }
  const addName = (event) =>{
    event.preventDefault();
    const nameObject ={
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('');
    console.log('added name: '+newName); 
    console.log(persons);         
  }
  console.log(persons); 

  return (
    <div>                         
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person =>        (
          <li key={person.name}> 
          {person.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App