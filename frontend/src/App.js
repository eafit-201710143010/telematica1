import React from 'react';
import './App.css'

componentWillMount() {
  fetch('http://localhost:3002/api/registros')
    .then((response) => {
      return response.json()
    })
    .then((registros) => {
      this.setState({ registros: registros })
    })
}

export default function App(){
  return (
    <div>
      Hola mundo
    </div>
  );
}