import React, { useState } from "react";
import TaskList from "./Pages/TaskList";
import TaskForm from "./Pages/TaskForm";
import Deletebox from "./Components/Deletebox";

const App = () => {
  // For OverLay box
  const [isOpen, setIsopen] = useState(false);
  const [isAdd, setIsadd] = useState(false);

  const [tasks, setTasks] = useState([]);
  

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setIsadd(false);
  };

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const Addbox = () => {
    isAdd === true ? setIsadd(false) : setIsadd(true);
  };

  

  const [showDeleteSuggestion, setShowDeleteSuggestion] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (index) => {
    setItemToDelete(index);
    setShowDeleteSuggestion(true);
  };

  const openbox = () => {
    setShowDeleteSuggestion(true);
  };

  const handleConfirmDelete = (taskId) => {
    // Perform delete action
    setTasks(tasks.filter((task) => task.id !== taskId));
    setShowDeleteSuggestion(false);
    setIsopen(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteSuggestion(false);
    setIsopen(false);
    setIsadd(false);
  };

  return (
    <div>
      <TaskForm
        addTask={addTask}
        showDeleteSuggestion={showDeleteSuggestion}
        isAdd={isAdd}
        handleCancelDelete={handleCancelDelete}
      />

      <Deletebox
        itemToDelete={itemToDelete}
        isOpen={isOpen}
        showDeleteSuggestion={showDeleteSuggestion}
        handleConfirmDelete={handleConfirmDelete}
        handleCancelDelete={handleCancelDelete}
      />

     
        <TaskList
         showDeleteSuggestion={showDeleteSuggestion}
        handleConfirmDelete={handleConfirmDelete}
          tasks={tasks}
          handleDeleteClick={handleDeleteClick}
          ToggleSidebar={ToggleSidebar}
          openbox={openbox}
          Addbox={Addbox}
          setShowDeleteSuggestion={setShowDeleteSuggestion}
        />
      
    </div>
  );
};

export default App;
