import React from 'react'
import styled from 'styled-components';
import { TimelineMax } from 'gsap'

const Wrapper = styled.div`
  height: 100vh;
  margin-bottom: 250px;
`

const Title = styled.h1`
  padding: 50px;
  text-align: center;
`

const AnimationSingle = styled.div`
  height:150px;
`

const AnimationDouble = styled.div`
  height:150px;
`

const AnimationToggle = styled.div`
  height:150px;
`

const Prot = styled.div`
  width: 120px;
  height: 120px;
  z-index: 1;
  cursor: pointer;
  border: 1px solid #00dbfe;
  display: flex;
  justify-content: center;
  align-items: center;
  float:left;
  margin: 0 50px;
  font-size: 10px;
`

const FadeOut = styled(Prot)`
  opacity: 0.1;
`

const VisibleState = styled(Prot)`
  opacity: 0.1;
`

export default class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stateVisibleBox: false,
    }
    this.myElement = null
    this.myTween = new TimelineMax()

    this.myCard = null
    this.cards = [];
    this.rotateBox = this.rotateBox.bind(this);
    this.changeVisibleBox = this.changeVisibleBox.bind(this);

  }

  componentDidMount() {
    new TimelineMax().from(this.myCard1, 3, { y: 20,  opacity: 0 })
    new TimelineMax().from(this.myCard2, 3, { border: '1px solid red'})
    new TimelineMax().from(this.myCard3, 3, { opacity: 0, transform: 'rotateY(180deg)'})
    new TimelineMax().from(this.myCard4, 3, { opacity: 0, transform: 'rotateX(180deg)'})
    new TimelineMax().from(this.myCard5, 3, { width: '40px', height: '40px'})
    new TimelineMax().from(this.myCard6, 3, { opacity: 1, rotation: 5000})
    new TimelineLite().from(this.myCard7, 1, {width: '40px', height: '40px'}).to(this.myCard7, 2, {width: '80px', height: '80px'});
    new TimelineLite().from(this.myCard8, 1, {y: 20}).to(this.myCard8, 2, {rotation: 360});
  }

  rotateBox() {
    new TimelineLite().from(this.myCard9, 0.3, {rotation: 360});
  }
 
  changeVisibleBox() {
    if (this.state.stateVisibleBox) {
      new TimelineLite().from(this.myCard10, 0, {opacity: 0}).to(this.myCard10, 0.3, {opacity: 1});
      this.setState({stateVisibleBox: false});
    } else {
      new TimelineLite().from(this.myCard10, 0, {opacity: 1}).to(this.myCard10, 0.3, {opacity: 0});
      this.setState({stateVisibleBox: true});
    }
  }


  render() {
    return (
      <Wrapper>
        <Title>Animation</Title>
        <h2>単発のアニメーション</h2>
        <AnimationSingle>
          <Prot ref={div => (this.myCard1 = div)}>
            <div>下からフェードイン</div>
          </Prot>
          <Prot ref={div => (this.myCard2 = div)}>
            <div>赤から青に</div>
          </Prot>
          <Prot ref={div => (this.myCard3 = div)}>
            <div>Y方向への回転</div>
          </Prot>
          <Prot ref={div => (this.myCard4 = div)}>
            <div>X方向への回転</div>
          </Prot>
          <Prot ref={div => (this.myCard5 = div)}>
            <div>拡大</div>
          </Prot>
          <FadeOut ref={div => (this.myCard6 = div)}>
            <div>回転しながら消える</div>
          </FadeOut>
        </AnimationSingle>
        <h2>連続のアニメーション</h2>
        <AnimationDouble>
            <Prot ref={div => (this.myCard7 = div)}>
              <div>拡大縮小</div>
            </Prot>
            <Prot ref={div => (this.myCard8 = div)}>
              <div>フェードイン回転</div>
            </Prot>
        </AnimationDouble>
        <h2>クリックアニメーション</h2>
        <AnimationToggle>
          <Prot ref={div => (this.myCard9 = div)}>
            <div>クリックで回転</div>
          </Prot>
          <button onClick={this.rotateBox}>
            click
          </button>
        </AnimationToggle>
        <h2>state管理アニメーション</h2>
        <AnimationToggle>
          <Prot ref={div => (this.myCard10 = div)}>
            <div>クリックで表示/非表示</div>
          </Prot>
          <button onClick={this.changeVisibleBox}>
            visible
          </button>
        </AnimationToggle>
      </Wrapper>
    )
  }
}
