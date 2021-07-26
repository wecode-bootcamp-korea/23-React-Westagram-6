import React from 'react';
import { Link } from 'react-router-dom'; // 링크 불러오는 방법
import './Login.scss'; //sass랑 css파일은 이름을 붙여주지 않아도 된다.

class Login extends React.Component {
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
                id="forId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input id="forPw" type="password" placeholder="비밀번호" />
              <Link
                to="/main"
                id="loginButton"
                className="loginButton-nonactive"
              >
                로그인
              </Link>
              {/* 내가 있는 곳의 반대 방향의  path넣기 */}
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

export default Login;
