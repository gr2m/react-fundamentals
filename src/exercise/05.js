// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Excercise
function Excercise() {
  const smallBox = (
    <div
      className="box box--small"
      style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
    >
      small lightblue box
    </div>
  )
  const mediumBox = (
    <div
      className="box box--medium"
      style={{fontStyle: 'italic', backgroundColor: 'pink'}}
    >
      medium pink box
    </div>
  )
  const largeBox = (
    <div
      className="box box--large"
      style={{fontStyle: 'italic', backgroundColor: 'orange'}}
    >
      large orange box
    </div>
  )

  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default () => (
  <>
    <h1>Styling</h1>
    <Excercise />
  </>
)
