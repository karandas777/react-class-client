import React, { Component } from 'react'
import Jumbo from '../commons/Jumbo'
import Navbar from '../commons/Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar Students Staff Settings />
                <Jumbo subHead="An overview of all resources." >Home</Jumbo>
            </div>
        )
    }
}
