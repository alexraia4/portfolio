import Header from './components/Header'
import Home     from './components/Home'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import './css/App.css'

function App() {
      return (
            <div className="App">
                  <Header/>
                  <Home/>
                  <Projects/>
                  <Contact/>
            </div>
      );
}

export default App;
