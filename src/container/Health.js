import React, { Component } from 'react'
import Health from './Health.css'
import { Carousel, WingBlank ,Flex,WhiteSpace} from 'antd-mobile';

export default class Dynamics extends Component {
    constructor(){    
        super();
        this.state = {
            data: ['1', '2', '3'],
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['mom_health1', 'mom_health2', 'mom_health3'],
          });
        }, 100);
     }
    render() {
        return (
            <div>
                <h4 className='header'>心理健康</h4>
                <Carousel
                autoplay={true}
                infinite
                >
                    {this.state.data.map(val => (
                        <img
                            src={`/images/${val}.jpg`}
                            alt={val}
                            style={{ width: '100%',verticalAlign: 'top' ,height:'270px'}}
                        />
                    ))}
                </Carousel>
                <div className="flex-container">
    
                    <Flex>
                        <Flex.Item>
                            <div className="item1">
                                <div className='title'>
                                    <h5>抑郁症</h5>
                                    <p className='more'>》》》更多</p>
                                </div>
                                <div className='post'>
                                    <img src="/images/depression.jpg" alt="抑郁症"/>
                                    <p className='detail'>
                                        产后抑郁形成的原因是多方面的，和产妇生产后的生理变化及心理因素相关,
                                        建议在身体允许的情况下，尽快恢复之前的生活状况...
                                    </p>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>
                            <div className="item2">
                                <div className="title">
                                    <h5>产前护理</h5>
                                    <p className='more'>》》》更多</p>
                                </div>
                                <div className="post">
                                    <img src="/images/care.jpg" alt="产前护理"/>
                                    <p className="detail">
                                        注意休息，保证足够睡眠，左侧卧位，适当活动，保持轻松愉快的心情。产前健康教育，
                                        消除孕妇对于分娩产生的紧张、恐惧心理。。。
                                    </p>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>
                            <div className="item3">
                                <div className="title">
                                    <h5>身材恢复</h5>
                                    <p className='more'>》》》更多</p>
                                </div>
                                <div className="post">
                                    <img src="/images/body_recovery.jpg" alt="身材恢复"/>
                                    <p className="detail">
                                    研究表明，产后6个月是宝妈身材恢复的黄金时期，如果宝妈在产后6个月内恢复到孕前体重，
                                    那么未来数年，产后体重增加幅度均会较小。。。
                                    </p>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}
