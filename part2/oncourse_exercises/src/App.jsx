
// // Exercises NOTES***********************************************

// // import Note from './components/Note'

// // const App = ({ notes }) => {
// //   return (
// //     <div>
// //       <h1>Notes</h1>
// //       <ul>

// //         {notes.map(note => 
// //           <Note key={note.id} note={note} />
// //         )}
// //       </ul>
// //     </div>
// //   )
// // }

// // Exercises NOTES END***********************************************

// // export default App

// // Exercises 2.0 --> 2.5 **********************************************

// // import Course from './components/Course'

// // const App = () => {
// //   const courses = [
// //     {
// //       name: 'Half Stack application development',
// //       id: 1,
// //       parts: [
// //         {
// //           name: 'Fundamentals of React',
// //           exercises: 10,
// //           id: 1
// //         },
// //         {
// //           name: 'Using props to pass data',
// //           exercises: 7,
// //           id: 2
// //         },
// //         {
// //           name: 'State of a component',
// //           exercises: 14,
// //           id: 3
// //         },
// //         {
// //           name: 'Redux',
// //           exercises: 11,
// //           id: 4
// //         }
// //       ]
// //     }, 
// //     {
// //       name: 'Node.js',
// //       id: 2,
// //       parts: [
// //         {
// //           name: 'Routing',
// //           exercises: 3,
// //           id: 1
// //         },
// //         {
// //           name: 'Middlewares',
// //           exercises: 7,
// //           id: 2
// //         }
// //       ]
// //     }
// //   ]

// //     return (
// //     <div>
// //       {courses.map(course => (
// //         <Course key={course.id} course={course} />
// //       ))}
// //     </div>
// //   );
// // }


// // Exercises 2.0 --> 2.5 END**********************************************

// // ****************************************  PART B  *********************************

// import { useState } from 'react'
// import Note from './components/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)

//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   ) 

//   const [showAll, setShowAll] = useState(true)

//   const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important === true)

// const addNote = (event) => {
//   event.preventDefault()
//   const noteObject = {
//     content: newNote,
//     important: Math.random() < 0.5,
//     id: notes.length + 1,
//   }

//   setNotes(notes.concat(noteObject))
//   setNewNote('')
// }

//  const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note =>
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
//           value={newNote}
//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>   
//     </div>
//   )
// }

// // ****************************************  PART B  *********************************
// export default App

// ******************************************* PART C ***********************************

import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

// ******************************************* PART E ***********************************

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}


// ******************************************* PART E ***********************************

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // PART E
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [aprobeMessage, setAprobeMessage] = useState('Added')
  // PART E 

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
        (aprobe => {
          setErrorMessage(
          ` '${note.content} changed'`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3)
        })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


    // console.log('render', notes.length, 'notes')

    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important === true)

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
    .catch(error => {
    alert(
      `the note '${note.content}' was already deleted from server`
    )
    setNotes(notes.filter(n => n.id !== id))
    })

    // axios
    //   .post('http://localhost:3001/notes', noteObject)
    //   .then(response => {
    //     setNotes(notes.concat(response.data))
    //     setNewNote('')
    //   })
  }

 const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note}
          toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <Footer />   
    </div>
  )
}


export default App