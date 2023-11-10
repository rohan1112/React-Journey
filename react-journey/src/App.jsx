import Counter from "./Components/counter/Counter"
import Cards from "./Components/commentSection/Cards"
import { comments } from "./Components/commentSection/commentsData"
import Pswd from "./Components/PasswordGenerator/PasswordGenerator"

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
    </>
  )
}

export default App
