import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FoodBox from './components/FoodBox'
import FoodData from './components/FoodData'
import Search from './components/Search'

class App extends Component {

  constructor(props){

    super(props)

    this.state={
      search:"",
    }
  }

  handleSearch=(info)=>{
    this.setState({search:info})
  }


  render(){ 
    return(
    <>

    <Search handleSearch={this.handleSearch}/>

      {/* <div id='search'>
        <input type="text" placeholder='Enter Something' onChange={(e)=>this.setState({search:e.target.value})} />

      </div> */}

    {
      FoodData.filter((el)=>{

        if(this.state.search==""){
          return el
        }else if(el.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return el
        }
      }).map((el)=>{
        return(
          <div key={el.id}>
            <FoodBox food={el} />

          </div>
        )
      })
    }
    
    </>
    )
}
}

export default App
