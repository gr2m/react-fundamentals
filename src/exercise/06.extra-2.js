// Basic Forms
// http://localhost:3000/isolated/exercise/06.extra-2.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = React.useRef(null)
  const [error, setError] = React.useState()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputEl.current.value)
  }

  function hanleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()

    if (isValid) {
      setError()
    } else {
      setError('Username must be lower case')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputEl} onChange={hanleChange} id="username" type="text" />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
      {error && <div role="alert">{error}</div>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
