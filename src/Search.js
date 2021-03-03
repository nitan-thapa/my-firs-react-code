import { Cards } from "./Cards"

import {useState} from "react"

function Search() {
    //program is made such that
    //  it only gives jpg image
    const [imagess, setimagess] = useState("")
    const [images, setimages] = useState("")
    const [found, setfound] = useState(false)
    return (
      <>
       <div className="container">
         <div className="container-fluid">
           
           <div className="row" style={{}}>
             <div className="col-12 mx-auto">
            <label htmlFor="">
             <input class="classinput text-center" style={{border:"solid chartreuse 1px", margin:"0px 5px",boxShadow:"2px 2px 3px chartreuse"}}onChange={(e)=>{setimagess(e.currentTarget.value)}}type="text" placeholder="search"/>
             <button class="buttonsearch"onClick={()=>{setimages(`${imagess}.jpg`);setfound(true)}}>Search</button>
              </label> 
              </div>
           </div>
          
          <div className="row  justify-content-left">
  {
          found?<Cards im={images} ti="hello" ></Cards>:null
          
  }
 
          </div>
  
         </div>
  
       </div>
      </>
    );
  }

  export {Search}
  