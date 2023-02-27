import React, { Fragment, useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}


function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('');
const [task, setTask] = useState<ITask[]>([])

const handleSubmit = (e: FormElement) => {
  e.preventDefault();
  addTask(newTask);
  setNewTask('')
}

const addTask = (name: string) => {
  const newTasks: ITask[] = [...task, {name, done: false}]
  setTask(newTasks)
}


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask}/>
        <button>
          Save
        </button>
      </form>
    </Fragment>
  );
}

export default App;
