import React from 'react';
import {TabsExampleIconText} from './TabsExampleControlled.js';
import {WhoToFollow} from './WhoToFollow.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {TrendsForYou} from './TrendsForYou.js';
import {Feed} from './feed.js';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Image from 'material-ui-image';
import {Buttons} from './Buttons.js';
import Avatar from 'material-ui/Avatar';

export class SearchPage extends React.Component{
render()
{

return(<div>
  <TabsExampleIconText/>  {/*Renders the upper Navigation bar of Twitter*/}

  <div style={{marginTop:'-17px',backgroundColor:'#00aced',width:'100%',height:'65px'}} >

    <h3 style={{color:'white', paddingTop:'20px',textAlign:'right',paddingRight:'1150px'}}>
      <b >
      Virat Kohli</b></h3>


  </div>
  <div style={{marginTop:'-1000',backgroundColor:'white',width:'100%',height:'48px'}} >
    <Tabs style={{ height:'18%',width:'45%',paddingLeft:'141px'

    }}tabItemContainerStyle={{backgroundColor:''}}
      inkBarStyle={{color:'blue',background: '#00aced'}}

    >
      <Tab  buttonStyle={{color:'black'}} label="Top" value="a"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab  buttonStyle={{color:'black'}} label="Latest" value="b"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="People" value="c">

      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Photos" value="d">

      </Tab><Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Videos" value="e">

      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="News" value="f">

      </Tab>
    </Tabs>
  </div>
  <Paper style={{width:300,height:60,marginLeft:141,marginTop:20,}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Searching Filters</b><a style={{fontSize:'12px'}} href="#">&nbsp; Show</a></h4>
  </Paper>
  <Paper style={{width:300,height:200,marginLeft:141,marginTop:20}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Related Searches</b></h4>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> Reactjs</b></a></div>
    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> Southafrica</b></a>

    <div>  <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>  code for fun </b></a></div>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> viruskha wedding</b></a></div>

    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b> India</b></a>

  </Paper>
  <div style={{marginTop:'-80px',marginLeft:'-910px'}}>
    <WhoToFollow/>   { /* Render's the WhoToFollow component*/}
  </div>

  <div style={{marginLeft:'-45px',marginTop:'620px'}}>
    <TrendsForYou />    { /*Render's the TrendsForYou component*/}
  </div>



  <Paper style={{marginTop:'-1410px',marginLeft:'450px',height:'1639px',width:'566px'}}>
    <h5 style={{paddingTop:10}}><b style={{paddingLeft:20,marginBottom:5}}>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC246fDWn3bNp7af7UARRgBTLzgaWrv3SIlQexGGR7eBQ434rryg">

      </Avatar>&nbsp;
      Cricket Is Life
    </b>
    </h5>
    <h5 style={{paddingBottom:-20,paddingLeft:20,paddingTop:'-5px '}}>No matter how many records of Sachin Tendulkar
      has been broken till date,he is the god of Cricket .

    </h5>
    <Buttons />  {/*Renders all the twitter buttons*/}
    <Divider style={{marginTop:10}}/>

    <div style={{marginLeft:20,marginTop:10}}>
      <Avatar src="http://www.govcarrers.com/wp-content/uploads/2018/01/India-Tour-of-South-Africa-Match-Prediction.png">

      </Avatar>
      <b >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virat Kohli  </b> <i style={{color:'#00aced'}}class="fa fa-check"></i>
    </div>



    <h5 style={{marginLeft:5,paddingLeft:17}}>
      Its the first international tour of the year,looking forward for a great year.
      <br/>
      <br/>
      <a href="#">#India #1sttour</a>
    </h5>
    <Paper style={{height: 450,
      width: 565,
      marginLeft: 0,
      marginBottom:10,


    }}
      zDepth={3} rounded={false} >
      <Image loadingStyle={{color:'red'}} color='#00aced'  src="http://www.govcarrers.com/wp-content/uploads/2018/01/India-Tour-of-South-Africa-Match-Prediction.png"/>
      <Buttons />  {/*Renders all the twitter buttons*/}
      <Divider />
    </Paper>
    <Paper style={{width:565,height:100,marginLeft:0,marginTop:180,textAlign:'left'}} zDepth={3} rounded={false} >
      <div style={{marginLeft:20,paddingTop:5}}><Avatar src="http://www.govcarrers.com/wp-content/uploads/2018/01/India-Tour-of-South-Africa-Match-Prediction.png">

      </Avatar>
        <b style={{marginLeft:5,marginBottom:10}}>BCCI &nbsp;
          <i style={{color:'#00aced'}}class="fa fa-check"></i>
        </b></div>

      <h5 style={{marginLeft:5}}>our boys are practicing hard as its not an easy task to beat SA. <br/><br/>
        <a href="#">#Freedomseries #India #Southafrica</a>
      </h5></Paper>
    <Paper style={{height: 450,
      width: 565,
        backgroundImage:"url('')",
      marginBottom:121,
      textAlign: 'center',
    }}
      zDepth={3} rounded={false}  >
      <Image color='#00aced' src="https://s.yimg.com/ny/api/res/1.2/8mySRO3zSyh6U98MQ__yBQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2g9NjAw/http://media.zenfs.com/en-IN/homerun/Sportskeeda.in/98a5c0ebdbffd2a580de725ab0721dd8"/>
    </Paper>
    <Buttons />
  </Paper>
</div>
  );
}
}
  //
