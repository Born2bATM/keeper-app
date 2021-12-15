import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          value={props.value.title}
          onChange={props.onChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={props.value.content}
          onChange={props.onChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.onClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
