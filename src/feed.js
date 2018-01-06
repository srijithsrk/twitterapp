import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Image from 'material-ui-image';
export class Feed extends React.Component{
  render()

  {return(
    <div>
      <List>
        <div style={{marginTop:'-800px'}}class="text-center co l-md-4 col-md-offset-4" >
          <Paper style={{marginLeft:-50,width:565,height:100}}>
            <List>
              <ListItem style={{marginLeft:'-10px'}}

                leftAvatar={
                  <Avatar src="pinder.jpg" />
                }
              >
              </ListItem>
            </List>

            <form >
              <div class="input-group"  style={{marginTop:'-40px'}}>
                <input  type="text" class="form-control" placeholder="What's happening?"
                  style={{marginLeft:'50px',height:'45px',width:'500px',backgroundColor:'#F8F8F8', borderRadius:'7px'}}/ >
                  <div class="input-group-btn">
                    <button class="btn btn-default" style={{height:'45px',color:'#00aced',marginLeft:'-48px',paddingTop:'-120px'}}>
                      <i class="glyphicon glyphicon-picture" ></i>
                    </button>
                  </div>
                </div>
              </form>
            </Paper>
          </div>
          <div class="text-center co l-md-4 col-md-offset-4" >
            <Paper style={{width:565,height:100,marginLeft:-50,marginTop:20,textAlign:'left'}} zDepth={3} rounded={false} >
              <b style={{marginLeft:5,marginBottom:10}}>Virat Kohli&nbsp; <i style={{color:'#00aced'}}class="fa fa-check"></i>
              </b><br/>
              <h5 style={{marginLeft:5}}>Its the first international tour of the year,looking forward for a great year.<br/><br/>
                <a href="#">#India #1sttour</a>
              </h5></Paper>
            <Paper style={{height: 450,
              width: 565,
              marginLeft: -50,
              marginBottom:10,


            }}
              zDepth={3} rounded={false} ><Image loadingStyle={{color:'red'}} color='#00aced'  src="http://www.govcarrers.com/wp-content/uploads/2018/01/India-Tour-of-South-Africa-Match-Prediction.png"/></Paper>


            <Paper style={{width:565,height:150,marginLeft:-50,}} zDepth={3} rounded={false} />



            <Paper style={{width:565,height:70,marginTop:-45,marginLeft: -50}} zDepth={3} rounded={false} >
              <i  style={{marginLeft:-250,marginTop:20}} class="fa fa-lg fa-comments"></i>
              <i  style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-retweet"></i>
              <i  style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-heart"></i>
              <i  style={{marginLeft:40,marginTop:20,color:'none'}} class="fa fa-lg fa-envelope"></i>
              <Divider style={{marginTop:10}}/>
            </Paper>



            <Paper style={{width:565,height:100,marginLeft:-50,marginTop:-20,textAlign:'left'}} zDepth={3} rounded={false} >
              <b style={{marginLeft:5,marginBottom:10}}>BCCI &nbsp;
                <i style={{color:'#00aced'}}class="fa fa-check"></i>
              </b><br/>
              <h5 style={{marginLeft:5}}>our boys are practicing hard as its not an easy task to beat SA. <br/><br/>
                <a href="#">#Freedomseries #India #Southafrica</a>
              </h5></Paper>
            <Paper style={{height: 450,
              width: 565,
              marginLeft: -50,
              backgroundImage:"url('')",
              marginBottom:151,
              textAlign: 'center',
            }}
              zDepth={3} rounded={false} LeftAvatar={<Avatar src="images/ok-128.jpg" />} >
              <Image color='#00aced' src="https://s.yimg.com/ny/api/res/1.2/8mySRO3zSyh6U98MQ__yBQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2g9NjAw/http://media.zenfs.com/en-IN/homerun/Sportskeeda.in/98a5c0ebdbffd2a580de725ab0721dd8"/>
            </Paper>
            <Paper style={{width:565,height:40,marginTop:-45,marginLeft: -50}} zDepth={3} rounded={false} >
              <i style={{marginLeft:-250,marginTop:20}} class="fa fa-lg fa-comments"></i>
              <i style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-retweet"></i>
              <i style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-heart"></i>
              <i style={{marginLeft:40,marginTop:20,color:'none'}} class="fa fa-lg fa-envelope"></i></Paper>
          </div>
        </List>
      </div>
      );
      }
      }
