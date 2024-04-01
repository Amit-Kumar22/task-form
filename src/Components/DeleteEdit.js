import React, { useState } from "react";

function DeleteEdit(
  handleCancelDelete,
  item,
  isMenuOpen,
  ToggleSidebar,
  handleDeleteClick,
  EdittBox,
  handleEdit
) {
  return (
    <div>
      <div className={`box ${isMenuOpen == true ? "active" : ""}`}>
        {isMenuOpen && (
          <div className="menu-list">
            <div onClick={ToggleSidebar}>
              <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
            </div>
            <div onClick={EdittBox}>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </div>
          </div>
        )}
      </div>
      <div
        className={`box-overlay ${isMenuOpen == true ? "active" : ""}`}
        onClick={handleCancelDelete}
      ></div>
    </div>
  );
}

export default DeleteEdit;
