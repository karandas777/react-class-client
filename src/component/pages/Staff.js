import React, { Component } from 'react'
import Jumbo from '../commons/Jumbo'
import Navbar from '../commons/Navbar'

export default class Staff extends Component {
    render() {
        return (
            <div>
                <Navbar Home AddStaff/>
                <Jumbo subHead="List of all staff members" >Staff</Jumbo>
            </div>
        )
    }
}
