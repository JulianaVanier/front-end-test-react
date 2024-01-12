import './App.css'
import HeaderTrucks from './views/components/HeaderTrucks';
import ListTrucks from './views/components/ListTrucks';
import ServicesTrucks from './views/components/ServicesTrucks';

function App() {
  
  return (
    <>
        <HeaderTrucks></HeaderTrucks>
        <ServicesTrucks></ServicesTrucks>
        <ListTrucks></ListTrucks>        
    </>
  )
}

export default App
