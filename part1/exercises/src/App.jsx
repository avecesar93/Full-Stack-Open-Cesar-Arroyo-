//******************************************************************** */
// Exercises 1.1, 1.2
//******************************************************************** */

// const Header = (props) => {
//     return (
//       <div>
//         <h1>{props.course}</h1>
//       </div>
//     )
// }

// const Part1 = () => {
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   return(
//     <div>
//       <p>
//         {part1} {exercises1}
//       </p>
//     </div>
//   )
// }

// const Part2 = () => {
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   return(
//     <div>
//       <p>
//         {part2} {exercises2}
//       </p>
//     </div>
//   )
// }

// const Part3 = () => {
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return(
//     <div>
//       <p>
//         {part3} {exercises3}
//       </p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part1 />
//       <Part2 />
//       <Part3 />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//       Number of exercises {props.total}
//       </p>
//     </div>
//   )
// }


// const App = () => {
//   const course = 'Half Stack application development'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content />
//       <Total total={exercises1 + exercises2 + exercises3} />
//     </div>
//   )
// }

//******************************************************************** */
// Exercises 1.3, 1.4
//******************************************************************** */

// const Header = (props) => {
//     return (
//       <div>
//         <h1>{props.course}</h1>
//       </div>
//     )
// }

// const Part1 = (props) => {
//   return(
//     <div>
//       <p>
//         {props.part1.name} {props.part1.exercises}
//       </p>
//     </div>
//   )
// }

// const Part2 = (props) => {
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   return(
//     <div>
//       <p>
//         {props.part2.name} {props.part2.exercises}
//       </p>
//     </div>
//   )
// }

// const Part3 = (props) => {
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return(
//     <div>
//       <p>
//         {props.part3.name} {props.part3.exercises}
//       </p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part1 part1={props.parts[0]}/>
//       <Part2 part2={props.parts[1]}/>
//       <Part3 part3={props.parts[2]}/>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//       Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

//******************************************************************** */
// Exercises 1.5
//******************************************************************** */

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part1 = (props) => {
return(
  <div>
    <p>
      {props.part1.name} {props.part1.exercises}
    </p>
  </div>
)
}

const Part2 = (props) => {
const part2 = 'Using props to pass data'
const exercises2 = 7
return(
  <div>
    <p>
      {props.part2.name} {props.part2.exercises}
    </p>
  </div>
)
}

const Part3 = (props) => {
const part3 = 'State of a component'
const exercises3 = 14
return(
  <div>
    <p>
      {props.part3.name} {props.part3.exercises}
    </p>
  </div>
)
}

const Content = (props) => {
  console.log(props)
return (
  <div>
    <Part1 part1={props.course.parts[0]}/>
    <Part2 part2={props.course.parts[1]}/>
    <Part3 part3={props.course.parts[2]}/>
  </div>
)
}

const Total = (props) => {
return (
  <div>
    <p>
    Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
  </div>
)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

return (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)
}


export default App