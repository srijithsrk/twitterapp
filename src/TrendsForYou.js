import React from 'react';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';

export class TrendsForYou extends React.Component{
render(){

return(

<List style={{backgroundColor:'white',height:'620px',width:'300px',marginLeft:'185px',marginTop:'-610px'}}>
  <h4 style={{marginLeft:'10px'}}><b> Trends For You</b> <a style={{ fontSize:'12px'}} href="#"> &nbsp;&nbsp;Change</a></h4>
  <ListItem  style={{color:'#00aced',size:'20px'}} primaryText="#BCCI" secondaryText="103k tweets"/>

  <ListItem  style={{color:'#00aced'}} primaryText="#imviratkohli" secondaryText="100k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#Sachin" secondaryText="98.3k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#RohithSharma" secondaryText="93.2k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#GauravRaina" secondaryText="13.7k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#SouthAfrica" secondaryText="50.4k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#ICC" secondaryText="83.5k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#TanmaiG" secondaryText="21.4k tweets"/>


</List>



)


}



}
