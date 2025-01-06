
 import { BrowserRouter,Routes,Route } from "react-router-dom"
 import IframeChild from "./components/IframeChild"
 import IframeParent from "./components/IframeParent"

export default function App(){
  return(

   <div style={{ margin: "0px 20px" ,color : "black"}}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<IframeParent />} />
          <Route path="/Iframe-child" element={<IframeChild />} />
        </Routes>
      </BrowserRouter> 
    </div>

  )
}