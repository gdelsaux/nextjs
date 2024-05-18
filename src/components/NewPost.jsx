import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddpost}) {
  const [enteredBody, setEnteredBody] = useState('text 1');
  const [enteredAuthor, setEnteredAuthor] = useState('Gaetan')
  
  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value)
  }

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault();
    onAddpost({
      author: enteredAuthor,
      body: enteredBody
    })
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;