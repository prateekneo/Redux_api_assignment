import React from 'react'
import Page from './Page'

class App extends React.Component {
  
  render() {

    return (
      
     <div className="page_div">{<Page />}</div>   
  
    )
  }
}

export default App