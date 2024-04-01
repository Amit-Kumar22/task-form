import React, { useState } from "react";
import "../Css/Deletebox.css"
import { FaTimes } from "react-icons/fa";

function Deletebox({
  isOpen,
  showDeleteSuggestion,
  handleCancelDelete,
  handleConfirmDelete,
  itemToDelete
}) {
  return (
    <div>
      <div className={`box ${isOpen == true ? "active" : ""}`}>
        {showDeleteSuggestion && (
          <div>
          <div className="cut-btn">
          <div className="task-heading">EDIT A TASK</div>
          <div className="btn-primary" onClick={handleCancelDelete}>
             <FaTimes />
            </div>
          </div>
          <div className="delete-suggestion">
            <div className="delete-box">
              <p>Do You Wish to Delete This Task?</p>
              <button onClick={()=>handleConfirmDelete(itemToDelete)}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
          </div>
        )}
      </div>
      <div
        className={`box-overlay ${isOpen == true ? "active" : ""}`}
        onClick={handleCancelDelete}
      ></div>
    </div>
  );
}

export default Deletebox;
