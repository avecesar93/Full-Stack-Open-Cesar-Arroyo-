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

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course.name}</h1>
//     </div>
//   )
// }

// const Part1 = (props) => {
// return(
//   <div>
//     <p>
//       {props.part1.name} {props.part1.exercises}
//     </p>
//   </div>
// )
// }

// const Part2 = (props) => {
// const part2 = 'Using props to pass data'
// const exercises2 = 7
// return(
//   <div>
//     <p>
//       {props.part2.name} {props.part2.exercises}
//     </p>
//   </div>
// )
// }

// const Part3 = (props) => {
// const part3 = 'State of a component'
// const exercises3 = 14
// return(
//   <div>
//     <p>
//       {props.part3.name} {props.part3.exercises}
//     </p>
//   </div>
// )
// }

// const Content = (props) => {
//   console.log(props)
// return (
//   <div>
//     <Part1 part1={props.course.parts[0]}/>
//     <Part2 part2={props.course.parts[1]}/>
//     <Part3 part3={props.course.parts[2]}/>
//   </div>
// )
// }

// const Total = (props) => {
// return (
//   <div>
//     <p>
//     Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
//     </p>
//   </div>
// )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

// return (
//   <div>
//     <Header course={course} />
//     <Content course={course} />
//     <Total course={course} />
//   </div>
// )
// }

//******************************************************************** */
// Exercises 1.6 to 1.14 UNICAFE
//******************************************************************** */

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Intro = ({ name }) => {
  return <h1>Give feedback</h1>
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td><td> {value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <Intro />
      </div>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App