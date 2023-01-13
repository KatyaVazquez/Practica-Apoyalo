import './App.css';
import Componentes from './Componentes';

const  App = () => {
  return (
    <div className='App'>
     <Componentes  lastName= "Done, " firstName="Jane"  Age={45}  haircolor= "Hair color: Black"/>
     <Componentes  lastName= "Smith, " firstName="John"  Age={88}  haircolor= "Hair color: Brown"/>
     <Componentes  lastName= "Fillmore, " firstName="Millard"  Age={50}  haircolor= "Hair color: Brown"/>
     <Componentes  lastName= "Smith, " firstName="Maria"  Age={62}   haircolor= "Hair color: Brown"/>
    </div>
  )
}

export default App;
