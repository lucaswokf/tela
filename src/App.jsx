import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <main>
        <div id="esq"></div>
        <div id="dir">
          <h1>fazer Login</h1>

          <label htmlFor="login" id='login'>login</label>
          <input type="text" name='login' />

          <label htmlFor="senha" id='senha'>senha</label>
          <input type="text" name='senha' />

        </div>
      </main>
    </>
  )
}

export default App