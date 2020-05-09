import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <div className='ui container' style={{ marginTop: '10px' }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
