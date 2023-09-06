import React, { useState } from "react"
import Card from "./components/Card/Card"
import UserForm from "./components/UserForm/UserForm"
import Container from "./components/Container/Container"

const App = () => {
  const [task, setTask] = useState([]);
  
 
  const submit = tarea => {
    setTask([...task, tarea]);
  };
 
  return (
    <div style={{ marginTop: '10%'}}>
      <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <UserForm submit={submit} />
        </div>
    </Card>
    <Card>
      <ul>
        {task.map((tarea, index) => (
          <li key={index}>
            {`Nombre: ${tarea.name}`} <br />
            {`Descripción: ${tarea.description}`}
          </li>
        ))}
      </ul>
    </Card>
      </Container>
    </div>
  );
};

export default App
