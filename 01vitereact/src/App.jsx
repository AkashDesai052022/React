

import Coffee from "./Coffee"

function App() {
  

  const username = "akash"
  return (

    <> // this known as fragment but jsx not allowed more than one tag
   <Coffee/>
   <h1>Chai aur code {username}</h1>
   <p>test paragraph</p>
   </>
  );
}

export default App
