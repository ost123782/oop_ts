import { Lab8Form } from './components/Lab8Form'
import { Lab9Form } from './components/Lab9Form'
import { ResultsList } from './components/ResultsList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <h1>Lab 8 + 9</h1>
        <p>
          Microservices · NestJS · PostgreSQL · WebSockets · React/Vite
        </p>
      </header>
      <main className="layout">
        <div className="column">
          <Lab8Form />
          <Lab9Form />
        </div>
        <div className="column">
          <ResultsList />
        </div>
      </main>
    </div>
  )
}

export default App
