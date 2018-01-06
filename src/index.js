import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {HomePage} from './HomePage';
import {TabsExampleIconText} from './TabsExampleControlled'

import {Feed} from './feed.js';
import {ExtraInfo} from './ExtraInfo.js'
import {WhoToFollow} from './WhoToFollow.js';
import {TrendsForYou} from './TrendsForYou.js';
import {SearchPage} from './SearchPage.js';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


document.body.style = 'background:rgb(210, 220, 237)';

class App extends  React.Component{

render()
{
return(
   <MuiThemeProvider >

     <SearchPage />
   </MuiThemeProvider>


);
}
}




ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
