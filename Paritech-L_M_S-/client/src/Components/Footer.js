import React, { Component } from "react";

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
            heading1:'Company',
            heading2:'Trending Courses',
            heading3:'Contact Info'
        }
    }
  render() {
    return (
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
        <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

        </div>
        <div class="col-md-3 mb-md-0 mb-3">
    <h5 class="text-uppercase">{this.state.heading1}</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
        </div>
        <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">{this.state.heading2}</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
        </div>
        </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
