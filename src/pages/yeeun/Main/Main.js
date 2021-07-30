import React from 'react';
import { withRouter } from 'react-router-dom';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <header>
          <nav className="navContainer">
            <div className="navLogo">
              <img
                alt="Instagram icon to home"
                src="./images/yeeun/instagram.png"
              />
              <h1>Westagram</h1>
            </div>
            <div className="searchingBarContainer">
              <input className="searchingBar" type="text" placeholder="검색" />
              <span className="searchingIcon">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <div className="navIconContainer">
              <img
                alt="Compass icon to explore the feeds"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                alt="Heart icon to track your activies"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="Person figure icon to your own pofile"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </nav>
        </header>
        <div className="container">
          <section className="innerContainer">
            <header className="feedHeader">
              <div className="feedProfile">
                <img
                  className="profilePicture"
                  alt="feed profile icon"
                  src="./images/yeeun/instaprofilepic.jpeg"
                />
                <a
                  className="feedOwner"
                  href="https://www.instagram.com/auto__sang/"
                >
                  auto__sang
                </a>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </header>
            <div>
              <img
                className="contentImg"
                alt="contents"
                src="./images/yeeun/sunset.jpg"
              />
              <div className="feedNav">
                <div className="iconsLeft">
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment fa-flip-horizontal"></i>
                  <i className="far fa-paper-plane"></i>
                </div>
                <div>
                  <i className="far fa-bookmark"></i>
                </div>
              </div>
              <a href="링크">좋아요 80개</a>
              <span>
                <a href="https://www.instagram.com/auto__sang/">auto__sang</a>
                sunset...
              </span>
              <div>7분전</div>
              <div className="commentContainer">
                <button className="commentImojiBox">
                  <i className="far fa-smile-wink"></i>
                </button>
                <input
                  className="commentBox"
                  type="text"
                  placeholder="댓글달기..."
                />
              </div>
            </div>
          </section>
          <aside className="mainRight">
            <div className="sideProfile">
              <img
                className="profilePicture"
                alt="profile"
                src="./images/yeeun/instaprofilepic.jpeg"
              />
              <a href="https://www.instagram.com/auto__sang/">auto__sang</a>
              <span className="followBtn">전환</span>
            </div>
            <ul>
              <li className="sideProfile">
                <img
                  className="profilePicture"
                  alt="profile"
                  src="./images/yeeun/justin.png"
                />
                <a href="https://www.instagram.com/justinbieber/">
                  justinbieber
                </a>
                <div className="followBtn">팔로우</div>
              </li>
              <li className="sideProfile">
                <img
                  className="profilePicture"
                  alt="profile"
                  src="./images/yeeun/newyorkermag.png"
                />
                <a href="https://www.instagram.com/newyorkermag/">
                  newyorkermag
                </a>
                <div className="followBtn">팔로우</div>
              </li>
              <li className="sideProfile">
                <img
                  className="profilePicture"
                  alt="profile"
                  src="./images/yeeun/universal.jpeg"
                />
                <a href="https://www.instagram.com/universalmusickorea/">
                  universalmusickorea
                </a>
                <div className="followBtn">팔로우</div>
              </li>
              <li className="sideProfile">
                <img
                  className="profilePicture"
                  alt="profile"
                  src="./images/yeeun/watcha.jpeg"
                />
                <a href="https://www.instagram.com/watcha_kr/">watcha_kr</a>
                <div className="followBtn">팔로우</div>
              </li>
              <li className="sideProfile">
                <img
                  className="profilePicture"
                  alt="profile"
                  src="./images/yeeun/natgeotravel.png"
                />
                <a href="https://www.instagram.com/natgeotravel/">
                  natgeotravel
                </a>
                <div className="followBtn">팔로우</div>
              </li>
            </ul>
            <footer>
              <div className="bottomList">
                <ul>
                  <li className="bottomList">소개</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">도움말</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">홍보센터</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">API</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">채용정보</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">개인 정보 처리 방침</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">약관</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">위치</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">해시태그</li>
                  <li className="bottomList"></li>
                  <li className="bottomList">언어</li>
                  <li className="bottomList"></li>
                </ul>
              </div>
              <div className="copyright">© 2021 INSTAGRAM FROM FACEBOOK</div>
            </footer>
          </aside>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
