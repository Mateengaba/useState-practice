import { useState } from 'react'
import './App.css'

function App() {
  // initial variable  , re-initial value kar ka ma initial variable ma set kar deta hai.
  const [useName, setUserName] = useState("Mateen")
  const [inputValue, setInputValue] = useState()
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(true);
  const [isRemamber, setIsRemamber] = useState(false);
  // Yeh line ek state variable form aur ek function setForm ko define karti hai.
  const [form, setForm] = useState({
    firstName: 'Mateen',
    lastName: 'Gaba',
    email: 'mateen@sculpture.com',
  });


  // use name update karna ka lia
  const handleUserName = () => {
    setUserName("Mateen Gaba")
  }
  //  console.log(useName);

  //set input value
  const inputHandle = (e) => {
    setInputValue(e.target.value);
  }


  // set counter
  const plushandle = () => {
    setCount(count + 1);
    //console.log(count);  
  }
  const lesshandle = () => {
    setCount(count - 1);
    //console.log(count);
  }

  // check box function
  function handleChange(e) {
    console.log(e.target.checked);
    setLiked(e.target.checked);

  }

  //2nd check box function
  function isRemamberChange(e) {
    console.log(e.target.checked);
    setIsRemamber(!isRemamber);

  }

// formHandle
  function formHandle(newFormData) {
    setForm(newFormData)
    };


  return (
    <>
      <h1>useState</h1>

      <h1>{useName}</h1>
      <button onClick={handleUserName}>Click me</button>
      <br />
      <br />
      <br />

      <input type="text" onChange={(e) => inputHandle(e)} />
      <h1>{inputValue}</h1>
      <br />
      <br />

      <button onClick={plushandle}>+</button>
      <span>{count}</span>
      <button onClick={lesshandle}>-</button>

      <br />
      <br />
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={liked}

        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
      <br />
      <br />
      <br />
      <label>
        <input type="checkbox" onChange={isRemamberChange} checked={isRemamber} />
      </label>Remamber
      <p>You {isRemamber ? 'Remamber' : 'did not Remamber'} this.</p>
      <br />
      <br />
      <br />



      {/* formHandle */}
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            formHandle({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>      <br />

      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            formHandle({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>      <br />

      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            formHandle({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{'    '}
        {form.lastName}{'    '}
        ({form.email})
      </p>

    </>
  )
}

export default App
