// TaskList.js
import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import "../Css/Taslist.css";
import EditableItem from "../Components/EditableItem";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const TaskList = ({
  tasks,
  setShowDeleteSuggestion,
  showDeleteSuggestion,
  handleCancelDelete,
  handleDeleteClick,
  ToggleSidebar,
  openbox,
  Addbox,
}) => {
  const [filters, setFilters] = useState({
    assignee: null,
    team:null,
    priority: null,
    startDateFrom: null,
    startDateTo: null,
  });

  const filteredTasks = tasks.filter((task) => {
    const { assignee, priority, startDateFrom, startDateTo } = filters;
    return (
      (!assignee || task.assignee === assignee) &&
      (!priority || task.priority === priority) &&
      (!startDateFrom || task.startDate >= startDateFrom) &&
      (!startDateTo || task.startDate <= startDateTo)
    );
  });

  const groupedData = filteredTasks.reduce((acc, obj) => {
    const { assignee } = obj;
    if (!acc[assignee]) {
      acc[assignee] = [];
    }
    acc[assignee].push(obj);
    return acc;
  }, {});

  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isEdit, setIsedit] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const EdittBox = () => {
    isEdit === true ? setIsedit(false) : setIsedit(true);
  };

  const handleEdit = (index) => {
    setEditItem(index);
    setShowDeleteSuggestion(true);
    setMenuOpen(false)
  };

  const toggleMenu = (index) => {
    setMenuOpen((prevId) => (prevId === index ? null : index));
  };

  const applyFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleSave = (updatedItem) => {
    const updatedItems = filteredTasks.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setFilters(updatedItems);
    setEditItem(null);
  };

  console.log("Tasks", filteredTasks)

  return (
    <div>
      <h2>Task Board</h2>

      <div className="main-container">
        <div className="container">
          <div className="filter-box">
            <Filters applyFilters={applyFilters} />
          </div>
          
        

        <div className="status-box">
          {Object.entries(groupedData).map(([status, group]) => (
            <div key={status} className="heading">
              <h3 className={status}>{status}</h3>
              <ul>
                {group.map((obj) => (
                  <li key={obj.id}>
                    <div className="heading2">
                      { editItem && editItem !== null ? (
                        <EditableItem
                          showDeleteSuggestion={showDeleteSuggestion}
                          handleCancelDelete={handleCancelDelete}
                          isEdit={isEdit}
                          item={obj.id}
                          onSave={handleSave}
                        />
                      ) : (
                        <div className="task-container">
                          <div className="merge">
                            <div className="tittles">{obj.title}</div>
                            <div className="priority">{obj.priority}</div>
                          </div>
                          <hr/>

                          <div className="descs">{obj.description}</div>

                          <div className="merge">
                            <div className="assign">{obj.team}</div>

                            <div className="menu">
                              <p className="menu-baar" onClick={() => toggleMenu(obj.id)}><PiDotsThreeOutlineVerticalFill /></p>

                              <div>
                                {isMenuOpen == obj.id && (
                                  <div className="menu-list">
                                    <div className="delete" onClick={ToggleSidebar}>
                                      <div
                                        onClick={() =>
                                          handleDeleteClick(obj.id)
                                        }
                                      >
                                        Delete
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="Edit" onClick={EdittBox}>
                                      <div
                                        onClick={() => handleEdit(obj.id)}
                                      >
                                        Edit
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="status">{obj.status}</div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div  onClick={Addbox}>
            <button className="Add-box" onClick={openbox}>Add new task</button>
          </div>
          </div>
    </div>
  );
};

export default TaskList;
