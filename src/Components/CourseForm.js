import React from "react";
const CourseForm=(props)=>{
  
    return(
       <form onSubmit={props.handeSubmit}>
        <input type="text" onChange={props.handelChange} value={props.current} />
        <input type="submit" value="Add"/>
       </form>
    )
}
export default CourseForm