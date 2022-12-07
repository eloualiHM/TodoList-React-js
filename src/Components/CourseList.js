import React,{ Component, Fragment } from 'react';

class CourseList extends Component {
  state={
    isEdit:false
  }
renderCourse=()=>{
   return(
     <li>
     {this.props.detail.name}
     <div>
     <button onClick={()=>this.editToggle()}>Edit</button>
<button onClick={()=>{this.props.delete(this.props.index)}}>Delete</button>
</div>
</li>
   )
}
editToggle=()=>{
    let isEdit=this.state.isEdit
    this.setState({isEdit:!isEdit})
}
handelSubmit=(e)=>{
    e.preventDefault()
    this.props.edit(this.props.index,this.input.value)
    this.editToggle()
}
updateCourse=()=>{
    return(
      <form onSubmit={this.handelSubmit}>
      <input type="text" ref={v=>{this.input=v}} defaultValue={this.props.detail.name}/>
      <button className='btn'>Update</button>
 </form>
    )
 }
render(){
    let {isEdit}=this.state
  return (
    <Fragment>
            {isEdit ? this.updateCourse(): this.renderCourse()}
    </Fragment>
  );
  }
}

export default CourseList;