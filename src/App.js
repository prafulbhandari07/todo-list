// import { useState } from 'react';
import { useState } from 'react';
import './index.css';
import Header from './pages/Header';
import ListItems from './pages/ListItem';


function App() {
  const [listItem, setListItem] = useState([])
  const [inputItem, setInputItem] = useState('')
  console.log(inputItem)
  function addItem(e) {
    e.preventDefault()
    if (inputItem.length === 0) {
      return
    } else {
      setListItem([...listItem, inputItem])
      setInputItem('')
    }
  }
  function deleteItem(itemIdx) {
    const filteredItems = listItem.filter((item, idx) => {
      if (idx === itemIdx) {
        return false
      } else {
        return true
      }
    })
    setListItem(filteredItems)
  }

  return (
    <>
      <Header />
      <div className="container">
        <div id="main" className="card card-body">
          <h2 className="title">Add Items</h2>
          <form id="addForm" className="form-inline mb-3" onSubmit={addItem}>
            <input type="text" className="form-control-mr-2" id="item" value={inputItem} onChange={(e) => { setInputItem(e.target.value) }} />
            <input type="submit" className="btn btn-dark" value="Add Your Item " />
          </form>
          <h2 className="title">Items</h2>
          <ul id="items" className="list-group">
            {listItem.map((item, idx) => {
              return <ListItems name={item} deleteItem={deleteItem} idx={idx} backgroundColor="#f4f4f4" />
            })}
          </ul>

        </div>
      </div>
    </>
  )
}

//-----------UseStates----------
// const[count, setCount]=useState(4)
// const[theme, setTheme]=useState('blue')
// function decrementCount(){
//     setTheme('red')
//     setCount(count-1)

// }
// function incrementCount(){
//     setCount(count+1)
//     setTheme('green')
// }
//return(
// <>
// <div>
// <button onClick={decrementCount}>-</button>
// <span>{count}</span>
// <span>{theme}</span>
// <button onClick={incrementCount}>+</button>
// </div>)
// </>

// {/* <div className='parentContainer'>
//         <div className='container'>
//           <h2>Add Item</h2>
//           <input type='text'/>
//           <input type='submit' value={'Submit'}/>
//           <h3>Items</h3>
//           <ul>
//             <li>Item1</li>
//             <li>Item2</li>
//             <li>Item3</li>
//           </ul>

//         </div>
//       </div> */}
export default App;
