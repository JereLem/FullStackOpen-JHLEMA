import React from "react";

const Header = ({ text }) => {
    return <h2>{text}</h2>;
  };
  
  const Part = ({ partinfo }) => {
    return (
      <p>
        {partinfo.name} {partinfo.exercises}
      </p>
    );
  };
  
  const Content = ({ parts }) => {
    return parts.map((part) => <Part key={part.id} partinfo={part} />);
  };
  
  const Total = (parts) => {
    return parts.reduce((total, part) => total + part.exercises, 0);
  };
  
  const Courseinfo = ({ course }) => {
    return (
      <>
        <h1>Web development curriculum</h1>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <h4> Total of {Total(course.parts)} exercises </h4>
      </>
    );
  };

const Course = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map((course) => <Courseinfo key={course.id} course={course} />);
};

export default Course;