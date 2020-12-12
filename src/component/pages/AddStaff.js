import React, { Component } from 'react'
import Jumbo from '../commons/Jumbo'
import Navbar from '../commons/Navbar'

export default class AddStaff extends Component {
    render() {
        return (
            <div>
                <Navbar Home Staff/>
                <Jumbo subHead="Add a new staff member into system">Add Staff</Jumbo>
            </div>
        )
    }
}
