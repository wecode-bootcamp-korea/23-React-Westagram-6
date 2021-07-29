// import React from 'react';
// import { Link } from 'react-router-dom'; // 링크 불러오는 방법
// import './Login.scss'; //sass랑 css파일은 이름을 붙여주지 않아도 된다.

import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Practice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: '',
    };
  }

  idInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  pwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  //fetch는 두개의 인자를 갖는다. 첫번째는  aip주소, 두번째는 method와 body이다
  handleFetch = () => {
    //setState를 넣지 않는 이유는 아이디/비번 등 개인정보는 저장할필요가 없기 때문이다
    fetch('http://10.58.0.181:8000/users/signin', {
      //signup or singin으로 가입이나 로그인 정할 수 있다.
      method: 'POST',
      body: JSON.stringify({
        //BE에서 이메일&비번을 전달해줄테지만 우리는 그 정보를 여기에 적는게 아니다
        email: this.state.id, // 바디에서 key, value들어감
        password: this.state.pw, // 다만 바디 안에 들어갈 내용은 BE와 이야기해서 작성한다. 우리맘대로 id값을 넣는다던지하면 안됨
      }),
    }) //fetch는 이렇게 끝나고 이제 2개의 then이 와야 한다
      .then(response => response.json())
      .then(
        result => console.log('되거라')
        // if (response.token) {
        //   localStorage.setItem('token', 'response.token');
        //   this.props.history.push('/Main-Moonsil');
        // } else {
        //   alert('아이디/비밀번호를 다시 입력해 주세요!');
        // }
      );
  };
  // SignUp = e => {
  //   fetch('10.58.1.112:8000/users/signup',{
  //     method: 'POST',
  //     body: JSON.stringify({        //이 부분 주석처리한 이유: 굳이 fetch2개 만들어서 최적화에 영향끼치 않기위해!
  //       email:this.setState.id,     //왜 가입하는데 여기에 빈값으로 안들어가는지 궁금한가? 그 이유는 여기에 입력한 값이
  //       password: this.setState.pw, // 로그인이 되지 않는 값이라면 , 가입이 되도록 바로 만들었기 때문이다.
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {console.log('signup success')})

  // }

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
                onChange={this.setState.idInput}
                id="forId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.setState.pwInput}
                id="forPw"
                type="password"
                placeholder="비밀번호"
              />
              <button
                type="button"
                onClick={this.handleFetch} //중요!
                // to="/Main-Moonsil"
                id="loginButton"
                className="loginButton-nonactive"
              >
                로그인
              </button>
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

export default Practice;
