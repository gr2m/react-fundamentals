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

// Extra Credit 1
function ExtraCredit1() {
  function Box({className = '', style = {}, ...props}) {
    return (
      <div
        {...props}
        className={`box ${className}`}
        style={{fontStyle: 'italic', ...style}}
      />
    )
  }

  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large pink box
      </Box>
    </div>
  )
}

// Extra Credit 2
function ExtraCredit2() {
  function Box({size, className = '', style = {}, ...props}) {
    const sizeClassName = size ? `box--${size}` : ''
    return (
      <div
        {...props}
        className={['box', sizeClassName, className].filter(Boolean).join(' ')}
        style={{fontStyle: 'italic', ...style}}
      />
    )
  }

  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large pink box
      </Box>
    </div>
  )
}

export default () => (
  <>
    <h1>Styling</h1>
    <Excercise />
    <h2>Extra Credit 1</h2>
    <ExtraCredit1 />
    <h2>Extra Credit 2</h2>
    <ExtraCredit2 />
  </>
)
