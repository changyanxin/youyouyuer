import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel,WingBlank, WhiteSpace,SearchBar,
    Grid,Flex,} from 'antd-mobile';

// const tabs = [
//   { title: '水果' },
//   { title: '蔬菜' },
//   { title: '' },
// ];

const tabs = [
    { title: '水果' },
    { title: '蔬菜' },
    { title: '动物' },
    { title: '植物' },
    { title: '车' },
    { title: '人物' }
  ];

export default class Picture extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#fff',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >
                    识图
                </NavBar>
               <div>
                    <WhiteSpace />
                    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    </Tabs>
                    <WhiteSpace />
                </div> 
            </div>
        )
    }
}
