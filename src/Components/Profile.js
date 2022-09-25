import React from 'react'
import me from '../Media/me.jpg'
import '../Styles/Profile.css'
function Profile() {
  return (
    <div className='row-flex'>

        

            <p style={{backgroundColor:'red'}}>Hey, I'm</p>
      
            <div className='column-flex'>
                <h1>Connor Ruff</h1>
                <img src={me} className="App-logo" alt="logo" />
            </div>
       
            <p style={{backgroundColor:'red'}}>test</p>

    </div>
  )
}

export default Profile;
