import './App.css'
import Card from './components/Card'
import data from './assets/data/data.json'

function App() {
  
  return (
    <div className='hero_div'>
        <h1>Users info </h1>
      <div className='container'>
        {
          data.length > 0 && data.map(function(element, index){
            return(
              <Card 
                image = {element.image}
                firstName= {element.firstName} 
                lastName={element.lastName}
                phone = {element.phone} 
                email={element.email}
                address= {element.address}
                cars= {element.cars}
                key = {index}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App