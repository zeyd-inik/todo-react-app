import { useState } from 'react';

const ListItem = ({ completed, text, id, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="list-item-comp">
      <div className="section-A">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <p className="text">{text}</p>
      </div>
      <button
        onClick={() => {
          deleteItem(id);
        }}
        type="button"
        className="btn"
      >
        Delete
      </button>
    </div>
  );
};
export default ListItem;
