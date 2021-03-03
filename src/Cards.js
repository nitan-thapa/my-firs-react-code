import React,{useState} from "react";

const Cards=(props)=>
{
  const [showhide, setshowhide] = useState(false)
const {im,ti}=props;
  return(
    <>
          <div onMouseLeave={()=>{setshowhide(false)}} onMouseEnter={()=>{setshowhide(true)}} style={{height:"300px"}} className="col-6 col-md-3  p-2 photo ">
            <img style={{height:"100%", width:"100%" ,borderRadius:"27px" }} src={im}  alt="movies not found"/>

{/* vvvvvvvvvvvvvvvvvvvvvviiiiiiiiiiiiiimmmmmmmmmmmmppppppppppp */} 
{/* if you  want to show or hide photodetail class element then you can hide and show it by 
by using display block and display none
but
if you apply display style property on this div(class photodetail) then the d-flex proverty might be remove */}
{/* and another thing is suppose class photodetail elemnt
does not have d-flex 
then you can apply d-none(to hide)
but in hover you are going to apply d-block(to show)
but note while hovering this element is not present
then how can you hover it and show it
thus if you want to apply d-block(show) .phododetail elemnt  then hover its one parent div which is still present
then apply d-block(show property) in that element */}


  {/* .changed div is make because we can not apply d-none d-block in photodetail class because it will overwrite */}
           {showhide? <>  <div className="photodetail d-flex flex-column justify-content-center align-items-center">
            <h1>{ti}</h1>
              <button className="p-2" style={{background:"chartreuse",borderRadius:"20px",border:"none",color:"white"}}>Download</button>
              </div>
              
              </>:null
}
              
              </div>

    </>
  )
}

export {Cards}
