import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import './App.css';
import CourseItem from './Courseitem';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses =>{
        setCourses(courses);
    })
  },[]); // [] is for run 1 time only

  return (
    <div className="App">
      <ul>
      {courses.map(item => (
        <CourseItem key={item.id} course={item}/>
      ))}
      </ul>
    </div>
  );
}

// type AppState = {
//   message: string;
// };
// class App extends React.Component<{}, AppState> {
//   state: AppState = {
//     message: 'Default message',
//   };
  
//   componentDidMount() {
//       fetch('http://localhost:3000/courses')
//         .then(res => res.json())
//         .then(obj =>{
//           this.setState({message: obj.message});
//         })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.message}
//       </div>
//     );
//   }
// }

export default App;
