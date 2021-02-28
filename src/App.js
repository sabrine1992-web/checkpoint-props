  import React from "react";
  import { Photo, Title, Wrapper } from "./Profile";
  import "./styles.css";
  import { Welcome} from "./Welcome";
  function myfunction(value){
    alert(value)
  }
  function App() {
    return (
      <div>
      <Wrapper>
        <Photo id="img" src="image1.jpg" />

        <Title
          style={{
            color: "red"
          }}
        >
          sabrine ben saada
        </Title>

        <Title 
        style={{
        color:"blue"
        }}
        >
          etudiante
        </Title>
        <Welcome alertMyInput={myfunction}/>
      
        </Wrapper> 
      </div>
  );
  };
  export default App;
