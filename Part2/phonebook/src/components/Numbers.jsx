import Person from './Person'; 

const Numbers = ({ filteredPersons, handleDelete }) => {
    return (
        <ul>
            {filteredPersons.map(person => (
                <Person 
                key={person.id}
                handleDelete={handleDelete}
                person={person} />
            ))}
        </ul>
    );
};

export default Numbers;