import { FacebookLogin } from "../../../packages/facebook/src/facebook"

function App() {

  const responseFacebook = (response) => {
    console.log(response)
  }

  return (
    <>
      <FacebookLogin appId="1088597931155576"
    autoLoad={true}
    callback={responseFacebook}
    icon="fa-facebook"   />
    </>
  )
}

export default App
