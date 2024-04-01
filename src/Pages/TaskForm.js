// TaskForm.js
import React, { useState } from "react";
import "../Css/taskform.css";
import { FaTimes } from "react-icons/fa";

const TaskForm = ({
  addTask,
  isAdd,
  handleCancelDelete,
  showDeleteSuggestion,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team:"",
    assignee: "",
    priority: "",
    startDate: new Date().toISOString().split("T")[0],
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...formData, id: Date.now().toString() });
    setFormData({
      title: "",
      description: "",
      assignee: "",
      priority: "",
      startDate: new Date().toISOString().split("T")[0],
      status: "Pending",
    });
  };

  return (
    <div className="task-create">
      <div className={`task ${isAdd == true ? "active" : ""}`}>
        {showDeleteSuggestion && (
          <div>
          <div className="cut-btn">
          <div className="task-heading">CREATE A TASK</div>
          <div className="btn-primary" onClick={handleCancelDelete}>
             <FaTimes />
            </div>
          </div>
          <form >
              <div className="tittle-input">
                <label for="tittle">Tittle</label>
                <input
                  type="text"
                  name="title"
                  id="tittle"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              
              <div className="desc-input">
              <label for="message">Description:</label>
                <textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="ass-input">
                Team:
                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                />
              </div>
              <div className="ass-input">
                Assignee:
                <input
                  type="text"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                />
              </div>
              <div className="prio-input">
              <label for="prio">Priority</label>              
                <select
                  name="priority"
                  id="prio"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option>P1</option>
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>  
              </div>

              <div className="Add-btn">
                <button onClick={handleSubmit}>Add</button>
              </div>
          </form>
          </div>
        )}
      </div>

      <div
        className={`box-overlay ${isAdd == true ? "active" : ""}`}
        onClick={handleCancelDelete}
      ></div>
    </div>
  );
};

export default TaskForm;
