const express = require('express')
const app =express();

app.use(express.json())

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    { 
      "id": "5",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(request,response) => {
    response.json(persons)
    console.log("sent all person details as reponse");
    
})

app.get('/info',(request,response)=>{
  const length = persons.length;
  const date = new Date();
  response.send(
      `<p>Phonebook has info for ${length} people</p>
       <p>${date}</p>`
  );
  console.log("persons info sent as reponse.")
})

app.get('/api/persons/:id',(request, response)=>{
  const id = request.params.id;
  const person=persons.find(person => person.id == id);

  if(person) {
    response.json(person);
    console.log(person)
  }
  else {
    response.status(404).send(`<h1>404 </h1><h3>page not found error</h3>person info for <b>id:${id}</b> not found in serve`);
    console.log('info not found')
  }  

})

app.delete('/api/persons/:id',(request,response)=>{

  const id = request.params.id;
  const person = persons.find(person => person.id ==id);

  if(!person){
    console.log('person not found to delete');    
    return response.status(404).json({error: " person not found to delete"})
  }

  persons = persons.filter(person=> person.id != id)
  response.status(204).end();
  console.log(`person wih id:${id} deleted from server memory!`)
  
})



const PORT = 3001;
app.listen(PORT);
console.log(`server running on ${PORT}`)
