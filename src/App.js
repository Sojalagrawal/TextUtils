import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextFrorm"
import Alert from "./components/Alert"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";



function App() {
  const [Mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const [BackObj,setBackObj]=useState({});
 
  const toggleMode=()=>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled","success");
      setBackObj({
        backgroundColor:"grey",
        color:"white"
      });
      document.title="TextUtils-Dark Mode"; // to change title of app dynamically

    //   setInterval(()=>{
    //      document.title="TextUtils is amazing";
    //   },2000);
    //   setInterval(()=>{
    //     document.title="Install TextUtils now";
    //  },1500);     //to flash title

    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode has been enabled","success");
      
      setBackObj({
        backgroundColor:"white",
        color:"black"
      });
      document.title="TextUtils-Light Mode";


    }


    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <TextForm heading="Enter the text to analyze" showAlert={showAlert} obj={BackObj}/>,
    //   },
    //   {
    //     path: "/about",
    //     element: <About/>
    //   },
    // ]);



  }
  return (
    <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} obj={BackObj}/>}></Route>
              <Route exact path="/about" element={<About/>}></Route> 
              {/* exact /about     /about/home  same */}
          </Routes>                    
        </div>
    </>
  );
}

export default App;
