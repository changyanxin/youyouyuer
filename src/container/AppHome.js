import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,} from 'antd-mobile';
import Picture from './home/Picture';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                
                <Picture/>
            </div>
        )
    }
}
