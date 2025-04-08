const Header = ({ name }) => {
  return <h1>{name}</h1>
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
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}
const Course = ({course}) => {
  return(
    <div>
  <Header name={course.name} />
  <Content parts={course.parts} />
  </div>
  )
}

export default Course;