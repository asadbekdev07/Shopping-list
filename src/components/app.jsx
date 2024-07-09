import Filter from './filter'
import Information from './information'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'

function App() {

  const data = [
    {
      id: 1,
      size: 14,
      title: "Buy Banana",
      active: false,
    },
    {
      id: 2,
      size: 10,
      title: "Buy Ananas",
      active: true,
    },
    {
      item: 3,
      size: 8,
      title: "Buy Milk",
      active: false,
    },
  ]

  return (
    <div className='app'>
      <div className='wrapper'>
        <div className="card">
          <Information />

          <ShoppingAddForm />

          <ShoppingList data={data}/>

          <Filter />
        </div>
        <img src='/earth.svg' />
      </div>
    </div>
  )
}

export default App
