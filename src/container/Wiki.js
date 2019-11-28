import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,} from 'antd-mobile';

export default class Parental extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#fff',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >
                    百科知识
                </NavBar>
            </div>
        )
    }
}
