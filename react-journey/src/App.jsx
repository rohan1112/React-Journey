import Counter from "./Components/counter/Counter"
import Cards from "./Components/commentSection/Cards"
import { comments } from "./Components/commentSection/commentsData"
import Pswd from "./Components/PasswordGenerator/PasswordGenerator"
import ColorPicker from "./Components/colorPicker/ColorPicker"
import GroceryCart from "./Components/groceryCart/GroceryCart"

function App() {
  return (
    <>
      <Counter/>
      <Pswd/>
      {
        comments.map(comment=>
          <Cards commentObject={comment}/>
          )
      }
      <ColorPicker/>
      <GroceryCart/>
    </>
  )
}

export default App
