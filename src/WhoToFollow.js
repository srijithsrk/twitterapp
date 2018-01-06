import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

export class WhoToFollow extends React.Component{
render()
{
return (<div style={{marginLeft:'1050px',marginTop:'99px'}} >





  <List style={{height:'470px',backgroundColor:'white',width:'300px'}}>
    <h5 style={{marginLeft:'25px'}}>    <b> Who to follow </b>
      <a style={{ fontSize:'12px'}} href="#"> Refresh</a>
      <a style={{ fontSize:'12px'}} href="#">  View all </a>
    </h5>


    <ListItem
      primaryText=" Virat Kohli " secondaryText="@imviratkohli"
      leftAvatar={<Avatar src="https://static.toiimg.com/photo/msid-60880350/60880350.jpg?83560" />}
    />

    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <ListItem
      primaryText="MS Dhoni" secondaryText="@msofficial"
      leftAvatar={<Avatar src="http://i.cricketcb.com/stats/img/faceImages/265.jpg" />}

    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <ListItem
      primaryText="Sachin Tendulkar" secondaryText="@srtofficial"
      leftAvatar={<Avatar style={{height:50}}src="https://dailypost.in/wp-content/uploads/2017/12/st.jpg" />}

    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
/>
<br/><br/>
    <Divider />
    <br/>
    <a href="#"><i  style={{color:'#00aced',marginLeft:'20px'}} class="fa fa-users"></i > We can't find people you know</a>
      <br/>
      <br/>
      <Divider />
      <div style={{backgroundColor:'rgb(210, 220, 237)',height:'30px'}}></div>
    </List>
  </div>)
}
// rightIconButton={<FontIcon  color='blue' className ="material-icons">home</FontIcon>}
}
