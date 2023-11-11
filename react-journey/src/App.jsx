import Counter from "./Components/counter/Counter"
import Cards from "./Components/commentSection/Cards"
import { comments } from "./Components/commentSection/commentsData"
import Pswd from "./Components/PasswordGenerator/PasswordGenerator"
import ColorPicker from "./Components/colorPicker/ColorPicker"

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
    </>
  )
}

export default App
