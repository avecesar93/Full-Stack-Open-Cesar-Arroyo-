import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

// Componentes

const FilterName = ({ filterName, handleFilterChange }) => {
  return (
    <div>
      <p>
        Filter shown with <input value={filterName} onChange={handleFilterChange} />
      </p>
    </div>
  )
}

const ButtonName = ({ newName, handleNameChange }) => {
  return (
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
  )
}

const ButtonNumber = ({ newNumber, handleNumberChange }) => {
  return (
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
  )
}

const AddPerson = (props) => {
  return(
     <form onSubmit={props.addPerson}>
        <ButtonName newName={props.newName} handleNameChange={props.handleNameChange} />
        <ButtonNumber newNumber={props.newNumber} handleNumberChange={props.handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const PersonsToShow = ({personsToShow, handleDeletePerson}) => {
  return(
    <div>
      {personsToShow.map(person => (
      <p key={person.id}>
       {person.name} {person.number}
       <button onClick={() => handleDeletePerson(person.id)}>delete</button>
       </p>
      ))}
    </div>
  )
} 

// App principal

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  // const addPerson = (event) => {
  //   event.preventDefault()
  //   if (persons.some(person => person.name === newName)) {
  //     window.alert(`${newName} is already added to phonebook`)
  //   } else {
  //     const personObject = {
  //       name: newName,
  //       number: newNumber,
  //       id: persons.length + 1,
  //     }
  //     setPersons(persons.concat(personObject))
  //     setNewName('')
  //     setNewNumber('')
  //   }
  // }

    const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const updatedPerson = { ...person, number: newNumber }
        personService
          .update(updatedPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert(`An error has happen with the update`)
              // setPersons(persons.filter(p => p.id !== id))
          })
        // })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      // setPersons(persons.concat(personObject))
      // setNewName('')
      // setNewNumber('')
    personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    }
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDeletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          alert(`The person '${person.name}' was already deleted from server`)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterName filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <AddPerson addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <PersonsToShow personsToShow={personsToShow} handleDeletePerson={handleDeletePerson} />
      {/* <div>
        {personsToShow.map(person => (
          <p key={person.id}>{person.name} {person.number}</p>
        ))}
      </div> */}
    </div>
  )
}

export default App
