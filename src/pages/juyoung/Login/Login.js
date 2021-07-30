import React from 'react';
import "./Login.scss";



class Login extends React.Component{
    
    constructor(props){
      super(props);
        this.state = {
          id : '',
          pw : '',      

        };
    }

    goToMain = () => {
      this.props.history.push('/Main-Juyoung');
   }


    handleInput = (e) => {
      this.setState({
        [e.target.name] : e.target.value,
      });
    };

    render(){
      console.log(this.state.id.indexOf('@'))
      return (
            <main className="Login">
              <div className="loginDisplay">
                <h1 className="title">westagram</h1>
                <form className="inputWrap">
                  <input type="text"
                    id="inputWrapId" 
                    name = 'id'
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange = {this.handleInput}
                    onKeyUp = {this.changeButton}  
                   />
                  <input type="password"
                    id="inputWrapPassword"
                    name = 'pw'
                    placeholder="비밀번호"
                    onChange = {this.handleInput}
                    onKeyUp = {this.changeButton}  
                  />
                  <button onClick = {this.goToMain}
                   id="inputWrapButton"
                   className = { (this.state.id.indexOf('@') !== -1) && this.state.pw.length > 5 ? 'btnActive' : 'btnDisabled'}
                   disabled = { (this.state.id.indexOf('@') !== -1) && this.state.pw.length > 5 ? false : true }
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


export default Login;