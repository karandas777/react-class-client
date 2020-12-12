import React, { Component } from "react";
import Jumbo from "../commons/Jumbo";
import Navbar from "../commons/Navbar";

export default class AddStudent extends Component {
  render() {
    return (
      <div>
        <Navbar Home Students/>
        <Jumbo subHead="Add a new student into system" >Add Student</Jumbo>
      </div>
    );
  }
}
