import React from 'react';
import "./Login.scss";
import { Link, withRouter } from 'react-router-dom' ;


class Login extends React.Component{
    
    goToMain = () => {
       this.props.history.push('/Main-Juyoung');
    }

    constructor(props){
      super(props);
        this.state = {
          id : '',
          pw : '',
          active : false,

        };
    }

    handleIdInput = (e) => {
      console.log(e.target.value);
      this.setState({
        id : e.target.value,
      });
    };


    handlePasswordInput = (e) => {
      console.log(e.target.value);
      this.setState({
        pw : e.target.value,        
      })
    }

    changeButton = () => {
        if (this.state.id.indexOf('@') && this.state.pw.length > 5 ) {
          this.setState({ active : true })
        } else {
          this.setState({ active : false })
        }
    };



    render(){
      console.log('id',this.state.id)
      console.log('pw',this.state.pw)
        return (
            <main className="Login">
              <div className="loginDisplay">
                <h1 className="title">westagram</h1>
                <form className="inputWrap">
                  <input type="text"
                    id="inputWrapId" 
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange = {this.handleIdInput}
                    onKeyUp = {this.changeButton}  
                   />
                  <input type="password"
                    id="inputWrapPassword"
                    placeholder="비밀번호"
                    onChange = {this.handlePasswordInput}
                    onKeyUp = {this.changeButton}  
                  />
                  <button onClick = {this.goToMain}
                   id="inputWrapButton"
                   className = {'btn' + (this.state.active ? 'Active' : 'Disabled')}
                   disabled = { this.state.id.indexOf('@') && this.state.pw.length > 5 ? false : true}
                   >로그인</button>
                </form>
                <a href="#" className="bottom">비밀번호를 잊으셨나요?</a>
              </div>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
              </style>

            </main>            
        );
    }
}


export default withRouter(Login);