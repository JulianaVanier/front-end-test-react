import './App.css'
import FormTrucks from './views/components/FormTrucks';
import Header from './views/components/Header';
import ListTrucks from './views/components/ListTrucks';
import ServicesTrucks from './views/components/ServicesTrucks';

function App() {
  
  return (
    <>
        <Header></Header>
        {/* <ServicesTrucks></ServicesTrucks>
        <ListTrucks></ListTrucks> */}
        <FormTrucks></FormTrucks>
    </>
  )
}

export default App
