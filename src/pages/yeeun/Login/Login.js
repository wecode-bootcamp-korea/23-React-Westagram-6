import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/main-yeeun');
  };

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pw: event.target.value,
    });
  };

  render() {
    return (
      <div className="login">
        <div className="loginContainer">
          <main className="loginBox">
            <h1 className="logo">Westagram</h1>
            <div className="loginForm">
              <input
                id="id"
                name="id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdInput}
              />
              <input
                id="pw"
                name="pw"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlePwInput}
              />
              <button id="loginBtn" onClick={this.goToMain}>
                로그인
              </button>
            </div>
            <div className="pwFindBtn">
              <a href="비밀번호 찾는 페이지">비밀번호를 잊으셨나요?</a>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
