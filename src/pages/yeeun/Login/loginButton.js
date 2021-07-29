import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import (withRouter) from 'react-router-dom';

class LoginButton extends Component {
goToMain = ()=> {
  fetch("http://10.58.0.189:8000/users/signup", {method: "POST", body: JSON.stringify{email: this.state.id, password: this.state.pw,}),

)
  .then((response) => response.json());
  .then((result) => console.log("결과: ", result));

}

}