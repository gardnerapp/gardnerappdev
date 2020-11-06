// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Video from "../components/Video";
import Personal from "../components/Personal.js.erb";
import Stack from "../components/Stack";
import Changing from "../components/Changing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <div>
        <NavBar />
        <Personal/>
        <Video/>
        <Stack />
        <Changing />
        <Footer />
      </div>,
      document.body.appendChild(document.createElement('div')),
  )
})
