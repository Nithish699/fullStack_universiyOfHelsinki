const Header = ({ name }) => {
  return <h2>{name}</h2>
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}
 
const Total=({total}) => {
  return (
    <p><b> total of { total} exercises </b></p>
  )
}
const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => {    
    return sum + part.exercises;
  }, 0);

  return(
    <div>
  <Header name={course.name} />
  <Content parts={course.parts} />
  <Total total ={total} />
  </div>
  )
}

export default Course;