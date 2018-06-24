import React, { Fragment } from 'react'
import socket from '../utils/socket'

class Index extends React.Component {
   state = {
      a: 'WOW',
      b: []
   }
   componentDidMount () {
      setTimeout(() => {
         this.setState({
            a: 'NOT WOWWWWW'
         })
         socket.on('news', (data) => {
            console.log(data)
         })
      }, 1000)
   }

   handleState = (params) => {
      this.setState({
         a: params
      })
   }

   // 1. เอา array ก้อนเก่า (b)
   // 2. เอา B ใส่ค่าใหม่เพิ่ม
   // 3. เอา ไปทับใน state โดยค่าใหม่คือ a

   updateList = () => {
      const { a, b } = this.state
      b.push(a)
      // เอา b ตัวเดิมไปทับใน state
      this.setState({ b })
      console.log(b)
   }
   
   render() {
      return (
         <Fragment>
            <div>HelloReact { this.state.a }</div>
            <input onChange={(event) => this.handleState(event.target.value)} />
            <button onClick={() => this.handleState('handle by button')}>
               Change State
            </button>
            <button onClick={this.updateList}> Add to List </button>
            {
               this.state.b.map((list, index) => <div key={`${list + index}`}>{list}</div>)
            }
         </Fragment>
      )
   }
}

export default Index