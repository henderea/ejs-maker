require('./index.scss');
import $ from 'jquery';
// require('jquery-ui');
import _ from 'lodash';
// const rand = require('lodash/random');
import ace from 'ace-builds';
import ejs from 'ejs';

var viewer = ace.edit("viewer");
viewer.setTheme("ace/theme/monokai");
viewer.getSession().setMode("ace/mode/html");
viewer.setReadOnly(true);
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html_ruby");
editor.focus();
editor.getSession().on('change', function(e) {
    
})