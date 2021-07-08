import routes from './routes'
import Header from './components/Header'
import './css/App.css'

function App() {
      return (
            <div className="App">
                  <Header/>
                  {routes}
            </div>
      );
}

export default App;
