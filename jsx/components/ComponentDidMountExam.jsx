import React from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap'

const Wrapper=styled.div`
  width: 100%;
  padding: 10px;
`

const Content=styled.div`
  width: 200px;
  margin: 0 auto;
  border: solid 1px #00dbfe;
  padding: 10px;
`

const AnimationBox=styled.div`
  border: solid 1px red;
  width: 100px;
  height: 100px;
  margin: 20px auto 0;
`

const AnimationBoxText=styled.p`
  font-size: 10px;
  padding-top: 30px;
`

export default class ComponentLifeCycle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      remaining : 100
    };

  }

  countDown() {
    if(this.state.remaining > 0) {
      this.setState((prevState) => ({
        remaining : prevState.remaining - 1
      }));      
    }
  }

  animateBox() {
    new TimelineMax().from(this.animationBox, 0.1, { rotation: 360 })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countDown(), 1000);
    this.interval = setInterval(() => this.animateBox(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Wrapper>
        <Content>
          {this.state.remaining}
        </Content>
          <AnimationBox ref={div => (this.animationBox = div)}><AnimationBoxText>1秒ごとに回転</AnimationBoxText></AnimationBox>
      </Wrapper>
    )
  }
}
