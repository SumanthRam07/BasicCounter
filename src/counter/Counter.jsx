import { useContext, useState } from "react"
import {Proptypes} from 'prop-types'

import './Counter.css'

export default function Counter()

{

   const[sum , SumAdder] = useState(0)

   function ParentIncrememt2(by)
   {

        SumAdder(sum+by) 

     
      


   }
   function ParentDecrememt(by)
   {

        SumAdder(sum-by) 


   }

   function Reset()
   {
    SumAdder(0)

   }



    return(

    <div>
      <span className="button">{sum}</span>
      {sum <= 0 && <div style={{ color: 'red' }}>Warning: The sum has gone below 0</div>}

      
    <BasicCounter  by = {10}  ParentIncrememt1= {ParentIncrememt2} ParentDecrememt= {ParentDecrememt} > </BasicCounter>
    <BasicCounter  by = {20} ParentIncrememt1= {ParentIncrememt2} ParentDecrememt= {ParentDecrememt}> </BasicCounter>
    <BasicCounter  by = {30}  ParentIncrememt1= {ParentIncrememt2} ParentDecrememt= {ParentDecrememt}> </BasicCounter>
    <BasicCounter  by = {40}  ParentIncrememt1= {ParentIncrememt2} ParentDecrememt= {ParentDecrememt} ></BasicCounter>
    <BasicCounter  by = {50} ParentIncrememt1= {ParentIncrememt2} ParentDecrememt= {ParentDecrememt}> </BasicCounter>

    <div>

             <button className="Button" onClick={Reset}>RESET </button>

             </div>



    </div>


    )
}



    export  function  BasicCounter({by , ParentIncrememt1 , ParentDecrememt})
{


     
    return( 


         <div  className="Login"> 
         
         <div>
         
         </div>
      
         <div className="Increment Button "> 

           <div>
             

            
             <div>
               
   
             <button className="Button" onClick={ ()=> ParentIncrememt1(by)} >+{by}</button>
             <button className="Button" onClick={()=>  ParentDecrememt(by)} >-{by}</button>

    
             

             </div>
             




           
           </div>



         </div>
         
         
         
         
         
             </div>
    )

     


 
    


}

