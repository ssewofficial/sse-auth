import { FacebookLogin } from "../../../packages/facebook/src/index";

function App() {
  const responseFacebook = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </>
  );
}

export default App;
