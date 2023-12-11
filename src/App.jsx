import Student from "./Student.jsx";
import "./App.css";

function App() {
  return <>
  <Student name ="Spongebob" age={30} isStudent={true}/>
  <Student name ="Patrick" age={42} isStudent={false}/>
  <Student name ="Squidward" age={50} isStudent={false}/>
  <Student name ="Sandy" age={27} isStudent={true}/>
  <Student name = "Larry"/>
  </>;
}

export default App;
