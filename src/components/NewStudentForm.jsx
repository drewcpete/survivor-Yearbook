
import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";


function NewStudentForm(props) {
  let _name = null;
  let _startingTribe = null;
  let _age = null;
  let _place = null;
  let _photo = null;

  function handleNewStudentFormSubmission(event) {
    event.preventDefault();
    props.onNewStudentCreation({ name: _name.value, age: _age.value, startingTribe: _startingTribe.value, place: _place.value, photo: _photo.value, id: v4() });
    _name.value = "";
    _age.value = "";
    _startingTribe.value = "";
    _place.value = "";
    _photo.value = "";
  }

  return (
    <div>
      <form onSubmit={handleNewStudentFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          ref={(input) => { _name = input; }} />

        <input
          type="text"
          id="startTribe"
          placeholder="Starting tribe"
          ref={(input) => { _startingTribe = input; }} />

        <input
          type="text"
          id="age"
          placeholder="Age"
          ref={(input) => { _age = input; }} />

        <input
          type="text"
          id="place"
          placeholder="Place"
          ref={(input) => { _place = input; }} />

        <input
          type="text"
          id="photo"
          placeholder="Photo Link"
          ref={(input) => { _photo = input; }} />
        <button type="submit">save player</button>
      </form>

    </div>
  );
}

NewStudentForm.propTypes = {
  onNewStudentCreation: PropTypes.func
};
export default NewStudentForm;

