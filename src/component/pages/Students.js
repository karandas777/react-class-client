import React, { Component } from 'react'
import Jumbo from '../commons/Jumbo'
import Navbar from '../commons/Navbar'

export default class Students extends Component {
    render() {
        return (
            <div>
                <Navbar Home AddStudent/>
                <Jumbo subHead="List of all students." >Students</Jumbo>
            </div>
        )
    }
}
