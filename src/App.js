import './App.css';
import {useState,useEffect} from 'react';

const URL = 'https://api.jokes.one/jod';

function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  async function getJoke(e) {
    try {
      const response = await fetch(URL);

      if (response.ok) {
        const json = await response.json();
        const joke = json.contents.jokes[0].joke;
        setTitle(joke.title);
        setText(joke.text);
      } else {
        alert('Error retrieving joke!');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div style={{margin: 50}}>
      <h1>Joke of the day</h1>
      <from onSubmit={getJoke}>
        <h3>{title}</h3>
        <p>{text}</p>
      </from>
    </div>
  );
}

export default App;
