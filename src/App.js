
import './App.css';
import Header from './Header.js'
import AddItemForm from './addItemForm.js'
import {Item} from './Item.js'
import { useState } from 'react';
import Persona from './img/person.png'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App() {
  const [items,setItems] = useState([])
  const addItem = (item) =>{
    setItems((prev)=> [...prev,item])
  }
  const removeItem=(itemId)=>{
    setItems((prev)=> prev.filter((item)=> item.id !== itemId))
  }
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='lista'>
            <h1>LISTA DE LA COMPRA</h1>
            <AddItemForm addItem={addItem}/>
            <div className='content'>
              <TransitionGroup>
                <div className='items'>
                  {items.map((item)=>(
                    <CSSTransition timeout={500} classNames="item-transition">
                      <Item key={item.id} item={item} removeItem={removeItem}/>
                    </CSSTransition>
                  ))}
                </div>
              </TransitionGroup>
            </div>
        </div>
        <div className='imagen'>
                  <img src={Persona}/>
        </div>
      </div>
    </div>
  );
}

export default App;
