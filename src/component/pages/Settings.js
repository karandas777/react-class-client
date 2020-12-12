import React, { Component } from 'react'
import Jumbo from '../commons/Jumbo'
import Navbar from '../commons/Navbar'

export default class Settings extends Component {
    render() {
        return (
            <div>
                <Navbar Home/>
                <Jumbo subHead="Configure the system." >Settings</Jumbo>
            </div>
        )
    }
}
