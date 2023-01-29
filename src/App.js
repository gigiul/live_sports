import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://sportsembed.su/prog.txt');
      const data = await response.text();
      setText(data);
    };
    fetchData();
  }, []);

  const array = text.split('|');
  console.log(array);

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
      setSearch(e.target.value)
  }

  const search_style = {
    'margin-top': '50px',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'flex-direction': 'column',
    'justify-content': 'center',
    width: '100%',
  }

  

  return (
    <div style={search_style}>
      <input onChange={handleSearch} type="text" placeholder="Search" />
      <ul>
      {
  search ? (array.map((item, index) => {
    if (item.toLowerCase().includes(search.toLowerCase())) {
      let link = item.split('\n')[0] // estrae il primo link dalla stringa
      console.log(link);
      return (
        <li key={index}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {item}
          </a>
        </li>
      );
    }
  })
  ) : <p>Search for a match</p>
}

      </ul>

    </div>
  );
};

export default App;
