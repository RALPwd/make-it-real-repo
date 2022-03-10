import './App.css';
import TextArea from './components/input/input';

function App() {

  const handleChange = (e)=>{
    if(e.target.value.toLowerCase().includes("cebolla")){
      alert("ODIO LA CEBOLLA")
    };
  }

  return (
    <div className="App">
      <TextArea name='Cebolla' id='cebolla' handleChange={handleChange}></TextArea>
    </div>
  );
}

export default App;
