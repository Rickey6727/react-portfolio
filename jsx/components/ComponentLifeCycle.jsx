import React from 'react'
import styled from 'styled-components'
import GetDerivedStateFromPropsExam from './GetDerivedStateFromPropsExam.jsx'
import ComponentDidMountExam from './ComponentDidMountExam.jsx'

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 250px;
`

const Title = styled.h1`
  padding:50px;
`

const StudyContext = styled.p`
`

const GroupTitle = styled.h2`
  padding-top: 50px;
  color: #00dbfe;
`

const MethodTitle = styled.h3`
  color: #ffffff;
  padding-top: 30px;
`

const NotImportantMethodTitle = styled(MethodTitle)`
  color: #565656;
`

const ComponentLifeCycleImg = styled.img`
  width: 691px;
  height: 453px;
  background-image: url(https://camo.qiitausercontent.com/b0b63ce9cc96098de3b460d4ffbd0b5d2c5342f7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f38393534342f37613064363465342d656433302d343363372d316638342d6335636239376662663464312e706e67);
  background-size: cover;
`

const Button = styled.button`
  background-color: transparent;
  border: solid 1px red;
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  appearance: none;
  color: red;
  text-align: center;
  transition: 0.3s;
  padding: 10px 0;
  width: 100px;
  &:hover {
    color: #000000;
    background-color: red;
    transition: 0.3s;
  }
`

const Protbox = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 20px;
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
  margin: 0 auto;
  font-size: 10px;
`

export default class ComponentLifeCycle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      status: ''
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  forceUpdateHandler(){
    this.forceUpdate()
  }

  onChangeName(e){
    this.setState({name: e.target.value})
  }

  onChangeStatus(e){
    this.setState({status: e.target.value})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.status === nextState.status);
  }

  componentDidUpdate(prevProps, prevState) {
    new TimelineMax().from(this.myCard1, 0.3, { y: 40,  opacity: 0 })
  }

  render() {
    return (
      <Wrapper>
        <Title>ComponentLifeCycle</Title>
        <StudyContext>各コンポーネントライフサイクルごとのメソッドを検証していく</StudyContext>

        <ComponentLifeCycleImg/>

        <GroupTitle>Mounting</GroupTitle>
          <NotImportantMethodTitle>constructor</NotImportantMethodTitle>
          <MethodTitle>getDerivedStateFromProps</MethodTitle>
          <StudyContext>stateとpropsの値の変化を監視してみる</StudyContext>
          <StudyContext>子コンポーネントを2つ作って、それぞれ別のprops渡してみてstateの変化を楽しむか</StudyContext>
          <StudyContext>↓propsに空情報を渡す↓</StudyContext>
          <GetDerivedStateFromPropsExam message=''/>
          <StudyContext>↓propsにメッセージを入れておく↓</StudyContext>
          <GetDerivedStateFromPropsExam message='設定を変更しました' />
          <StudyContext>こんな感じに、propsの値によって挙動を変えたいときに使えるんだそうな</StudyContext>
          <NotImportantMethodTitle>render</NotImportantMethodTitle>
          <MethodTitle>componentDidMount</MethodTitle>
          タイマーをセットしてみる
          <ComponentDidMountExam />

        <GroupTitle>Updating</GroupTitle>
          <MethodTitle>props / state / forceUpdate</MethodTitle>
          <StudyContext>forceUpdateで強制的にrender()できる</StudyContext>
          <Button onClick={this.forceUpdateHandler}>Danger</Button>
          <StudyContext>{ Math.random() }</StudyContext>
          <NotImportantMethodTitle>getDerivedStateFromProps</NotImportantMethodTitle>
          <MethodTitle>shouldComponentUpdate</MethodTitle>
          <StudyContext>stateの状態を確認して、差分があればrender</StudyContext>
          <input value={this.state.name} onChange={this.onChangeName} placeholder='再描画されない'/>
          <input value={this.state.status} onChange={this.onChangeStatus} placeholder='再描画される' />
          <StudyContext>{ Math.random() }</StudyContext>
          <NotImportantMethodTitle>render</NotImportantMethodTitle>
          <MethodTitle>getSnapshotBeforeUpdate</MethodTitle>
          <StudyContext>次のcomponentDidUpdateに情報を渡すことができる</StudyContext>
          <MethodTitle>componentDidUpdate</MethodTitle>
          <StudyContext>再描画されるごとに処理を実行できる</StudyContext>
          <Button onClick={this.forceUpdateHandler}>render()</Button>
          <Protbox>
            <Prot ref={div => (this.myCard1 = div)}>
              <div>下からフェードイン</div>
            </Prot>
          </Protbox>

        <GroupTitle>Unmounting</GroupTitle>
          <MethodTitle>componentWillUnmount</MethodTitle>
          <StudyContext>ルーティングすると走るメソッドで、<br/>componentDidMount()で動かしたintervalを解除する処理を書く</StudyContext>
          <StudyContext>他のルートに遷移後に戻ると、新たなintervalが始まっている</StudyContext>

      </Wrapper>
    )
  }
}
