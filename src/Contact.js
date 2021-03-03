
import {Formik,Form,ErrorMessage,Field,FieldArray} from "formik"

function Contact() {
    const initialValues={
        username:"",paddress:"",taddress:"",
       haveproblem:false, radio:"",
     choose:"",
     comment:"",
     phnumbers:[""]}
     
       const onSubmit=(value)=>{
         console.log(value)
     
       }
     
       const validate =(value)=>{
         const error={
           username:"",paddress:"",taddress:"",
          haveproblem:"", radio:"",
        choose:"",
        comment:""}
         
         if(!value.username)
         {
           error.username="*required"
         }
         if(!value.paddress)
         {
           error.paddress="*required"
         }
         if(!value.taddress)
         {
           error.taddress="*required"
         }
         if(!value.radio)
         {
           error.radio="*required"
         }
         if(!value.choose)
         {
           error.choose="*required"
         }
         if(!value.comment)
         {
           error.comment="*required"
         }
     
     
         return(error)
     
       }
     
    return (
      <div style={{textAlign:"left",backgroundColor:"black",color:"white" }}>
     <Formik
     initialValues={initialValues}
     onSubmit={onSubmit}
     validate={validate}>
       <Form>
         <label htmlFor="id1">Name</label>
         <br/>
         <Field className="classinput" type="text" id="id1" name="username"  ></Field>
         <ErrorMessage name="username">
        {(errmes)=>{
  
             return(<div style={{color:"red",display:"inline-block"}}>{errmes}</div>)
           }
          }
         </ErrorMessage>
         <br/>
         <br/>
  
         <label htmlFor="id2">Permanent address</label>
         <br/>
         <Field className="classinput" type="text" id="id2" name="paddress"  ></Field>
         <ErrorMessage name="paddress">
        {(errmes)=>{
  
             return(<div style={{color:"red",display:"inline-block"}}>{errmes}</div>)
           }
          }
         </ErrorMessage>
         <br/>
         <br/>
  
         <label htmlFor="id3">Temporary address</label>
         <br/>
         <Field type="text" id="id3" name="taddress" className="classinput"  ></Field>
         <ErrorMessage name="taddress">
        {(errmes)=>{
  
             return(<div style={{color:"red",display:"inline-block"}}>{errmes}</div>)
           }
          }
         </ErrorMessage>
         <br/>
         <br/>
  
         <label htmlFor="id4">male</label>
         <Field   type="radio" id="id4" name="radio" value="male" ></Field>
         <label htmlFor="id5">female</label>
         <Field  type="radio" id="id5" name="radio" value="female" ></Field>
         
         <label  htmlFor="id6">other</label>
         <Field type="radio" id="id6" name="radio" value="other" ></Field>
         <ErrorMessage name="radio">
        {(errmes)=>{
  
             return(<div style={{color:"red",display:"inline-block"}}>{errmes}</div>)
           }
          }
         </ErrorMessage>
         <br/>
         <br/>
  
         <Field name="haveproblem" type="checkbox" id="id7"></Field>
         <label htmlFor="id7"> is there any problem while downloding</label>
         <br/>
         <br/>
  
  
         <Field component="select" name="choose" placeholder="choose">
  
           <option disabled hidden>choosecountry</option>
           <option value="nepal">Nepal</option>
           <option value="india">India</option>
           <option value="china">China</option>
           <option value="bangladesh">Bangladesh</option>
         </Field>
         <ErrorMessage name="choose">
        {(errmes)=>{
  
             return(<div style={{color:"red",display:"inline-block"}}>{errmes}</div>)
           }
          }
         </ErrorMessage>
         <br/>
         <br/>
  
         <label htmlFor="com">comment</label>
         <Field as="textarea"  id="com" name="comment"></Field>
         <ErrorMessage name="comment">
        {(errmes)=>{
  
             return(<div style={{color:"red",display:"inline-block"}}>{errmes}</div>)
           }
          }
         </ErrorMessage>    
          <br/>
          
          <FieldArray name="phnumbers">
            {
              (props)=>{
                const {push,remove,form}=props
                const {values}=form
                const {phnumbers}=values
                
  
                return( 
                  <>
                  <label htmlFor="">Add phone numbers</label>
                  {
  
                  
                  phnumbers.map((v,i)=>{
  
                    return(
                      <div style={{display:"inline-block"}}key={i}>
                      <Field type="text" name={`phnumbers[${i}]`}></Field>
                      <button type="button" onClick={()=>{push("")}}>+</button>
                      {
                        i!=0&&<button type="button" onClick={()=>{remove(i)}}>-</button>
                      }
                      
                      </div>
                    )
                    
    
    
                  })
                }
                  </>
  
                )
  
               
  
  
  
  
  
                
  
              }
            }
  
          </FieldArray>
  
          <div className="leftbuttonsearch">
  
         <button  className="buttonsearch" type="submit">submit</button>
          </div>
  
          
  
       </Form>
     </Formik>
     </div>
    );
    
  }

  export {Contact}