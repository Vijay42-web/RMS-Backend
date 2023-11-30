import React from 'react' ;
import {DashboardData} from './DashboardData';


function Dashboard()
{
    return(
      <div className="Dashboard">
        <ul classname="DashboardList">
        {DashboardData.map((val,key)=>{
        return(
           <li key ={key} 
           classname="row"
           id={window.location.pathname == val.link ? "active" :""}
           onClick={()=>
        {window.location.pathname =val.link}}>
          
        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
        </li>
        );
    
      })} </ul>
        </div>


    );

    


}

export default Dashboard;
