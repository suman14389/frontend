
import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";
import Loader from './Loader/loader.js';

function App() {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const getImage = async () => {
    const value = input;
    setInput('');
    setIsLoading(true);
    try {
      const response = await Axios.post('http://localhost:8000/getImage',  { value });
      console.log('Response:', response.data);
      setImageUrl(response.data.url);
      // Handle the response or update the component state accordingly
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
    setIsLoading(false)
  }

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div className="App">
      Welcome to my app, please enter the input.
      <div className='input-container'>
        <input value={input} onChange={handleInput}/>
        <button onClick={() => getImage()}> Submit</button>
      </div>
      <div className='img-container'>
        {
          imageUrl && !isLoading && <img src={imageUrl} />
        }
        <Loader isLoading={isLoading} />
        
      </div>
    </div>
  );
}

export default App;

