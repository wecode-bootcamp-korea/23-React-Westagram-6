import React from 'react';
import './Login.scss'; //sass랑 css파일은 이름을 붙여주지 않아도 된다.
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/Main-Moonsil');
  };

  render() {
    return (
      <div className="Login">
        <div className="loginContainer">
          <header>
            <h1> westagram </h1>
          </header>

          <main>
            <form className="loginForm">
              <input
                onChange={this.handleIdInput}
                id="forId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.handlePwInput}
                id="forPw"
                type="password"
                placeholder="비밀번호"
              />
              <button
                onClick={this.goToMain}
                id="loginButton"
                className="loginButton-nonactive"
              >
                로그인
              </button>
            </form>
          </main>

          <footer>
            <a className="findingPW" href="#">
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
