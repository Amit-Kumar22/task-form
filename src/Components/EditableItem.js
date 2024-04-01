import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditableItem = ({
  item,
  showDeleteSuggestion,
  onSave,
  isEdit,
  handleCancelDelete,
}) => {
  const [assignee, setAssignee] = useState(item.assignee);
  const [priority, setPriority] = useState(item.priority);

  const handleSave = () => {
    onSave({ ...item, assignee, priority });
  };


  return (
    <div className="Edit-Task">
      <div className={`task ${isEdit == true ? "active" : ""}`}>
      
        {showDeleteSuggestion && (
          <div>
          <div className="cut-btn">
          <div className="task-heading">EDIT A TASK</div>
          <div className="btn-primary" onClick={handleCancelDelete}>
             <FaTimes />
            </div>
          </div>
           <form>
           <div className="tittle-input">
                <label for="tittle">Status</label>
              <input
                type="text"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
              />
              </div>

              <div className="prio-input">
              <label for="prio">Priority</label>              
              <select
                name="priority"
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
              >
                <option value="">Select Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select> 
              </div>
              <div className="tittle-input">
                <label for="tittle">Tittle</label>
                <input
                  type="text"
                  name="title"
                  id="tittle"
                />
              </div>
              <div className="desc-input">
              <label for="message">Description:</label>
                <textarea
                  type="text"
                  name="description"
                />
              </div>
              <div className="ass-input">
                Team:
                <input
                  type="text"
                  name="team"
                />
              </div>
            <div><button onClick={handleSave}>Submit</button> </div>
            <div><button onClick={handleCancelDelete}>Reset</button> </div>
          </form> 
          </div> 
        )}
      </div>

      <div
        className={`box-overlay ${isEdit == true ? "active" : ""}`}
        onClick={handleCancelDelete}
      ></div>
    </div>
  );
};
export default EditableItem;
