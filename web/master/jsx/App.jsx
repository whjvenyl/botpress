import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, useRouterHistory, IndexRoute } from 'react-router'
import { createHistory } from 'history'

import initTranslation from './components/Common/localize'
import initLoadCss from './components/Common/load-css'

import Botskin from './components/Botskin'

initTranslation()
initLoadCss()

// Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
  options.async = true
})

ReactDOM.render(<Botskin />, document.getElementById('app'))