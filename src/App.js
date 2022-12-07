
import React,{ Component } from 'react';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';

class App extends Component {
  state={
    courses:[
      {name:"HTML"},
      {name:"JavaScript"},
      {name:"CSS"},
    ],
    current:""
  }
  handelChange=(e)=>{
    this.setState({
      current:e.target.value
    })
}
handeSubmit=(e)=>{
  e.preventDefault()
  if(this.state.current){
  let courses=this.state.courses
  courses.push({name:this.state.current})
  this.setState({
    courses:courses,
    current:""
  })
}
  
}
delete=(index)=>{
let courses= this.state.courses
courses.splice(index,1)
this.setState({courses})

}
edit=(index,value)=>{
 let courses= this.state.courses
 let course= courses[index]
 course["name"]=value
  this.setState({
    courses
  })
}
  render(){
   
    let items=this.state.courses.map((el,index)=>{
       
          return <CourseList edit={this.edit} detail={el} key={index} index={index} delete={this.delete}/>
 
       
      })
  return (
    <div className="App">
     <h1>Add courses</h1>
     <CourseForm  current={this.state.current} handelChange={this.handelChange} handeSubmit={this.handeSubmit}/>
     <ul>{items}</ul>
    </div>
  );
  }
}

export default App;
