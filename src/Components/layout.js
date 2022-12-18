import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Section from './section';
import Home from './home';
class Layout extends Component {

render() {

return (

<div>
<Header />
  <Section />
  <Home/>
  <Footer/>
</div>

)

}

}

export default Layout;