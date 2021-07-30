// ### Mission 3) Main | 댓글 기능

// - 사용자가 댓글 입력 후 enter 를 누르거나 왼쪽의 버튼 클릭 시 댓글이 추가되도록 구현해주세요.
// - 댓글 기능을 구현하기 위해서는 배열 데이터 타입을 활용해야 합니다.
// - [Array.map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 참고해서 시도해주세요.
// - 위 순서대로 완료 후 `Add : Mission 3 - 댓글 기능 구현` commit message를 남긴 후 push 해주세요.

import React, { useState } from 'react';
import './Main.scss';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      replies: [],
    };
  }

  // 글자입력했을 시에 변하는 것 && input에 onChange로 연결 시킬 것!
  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  // input에 enter눌렀을 시에 반응 하는 것 && input에 onKeyUp이랑 연결시킬 것!
  handleKeyEvent = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleOnSubmit(); //spread로 확장할 계획
    }
  };

  // button 을 눌렀을 시 실행되는 function
  handleOnSubmit = e => {
    this.setState({
      comment: '',
      replies: [
        ...this.state.replies,
        {
          userId: 'LovelyDays',
          comment: this.state.comment,
        },
      ],
    });
  };

  goToLogin = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="Main">
        <nav>
          <div className="navContainer">
            <div className="title"> westagram </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder=" 검색 " />
            </div>
            <div className="navIcons">
              <div className="expolreIcon">
                <img
                  src="./images/moonsil/explore.png"
                  alt="돋보기"
                  width="22"
                  height="22"
                />
              </div>
              <div className="heartIcon">
                <img
                  src="./images/moonsil/heart.png"
                  alt="하트"
                  width="22"
                  height="22"
                />
              </div>
              <div className="profileIcon">
                <img
                  src="./images/moonsil/profile.png"
                  alt="사람"
                  width="22"
                  height="22"
                />
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="mainContentsWrapping">
            <div className="leftContentsWrapping">
              <article>
                <div className="updatedStory">
                  <div className="firstStory">
                    <img
                      className="storyBackground"
                      src="./images/moonsil/instagram.png"
                      alt="The first updated new story"
                      width="64px;"
                      height="64px;"
                    />
                    <img
                      className="firstPerson"
                      src="./images/moonsil/firstSuggsetion.jpeg"
                      alt="the first person updating story"
                      width="57px;"
                      height="57px;"
                    />
                  </div>
                  <div className="secondStory">
                    <img
                      className="storyBackground"
                      src="./images/moonsil/instagram.png"
                      alt="The second updatedNew new story"
                      width="64px;"
                      height="64px;"
                    />
                    <img
                      className="secondPerson"
                      src="./images/moonsil/secondSuggestion.jpeg"
                      alt="the second person updating story"
                      width="57px;"
                      height="57px;"
                    />
                  </div>
                  <div className="thirdStory">
                    <img
                      className="storyBackground"
                      src="./images/moonsil/instagram.png"
                      alt="The second updatedNew new story"
                      width="64px;"
                      height="64px;"
                    />
                    <img
                      className="thirdPerson"
                      src="./images/moonsil/thirdSuggestion.jpeg"
                      alt="The third person updating story"
                      width="57px;"
                      height="57px;"
                    />
                  </div>
                </div>
                <div className="namesOfUpdatedStory">
                  <div className="nameOfFirstStory">chris_andterry</div>
                  <div className="nameOfSecondStory">mina_1266</div>
                  <div className="nameOfThirdStory">sunmi_two</div>
                </div>
              </article>

              <div className="mainPost">
                <header>
                  <div className="postHeader">
                    <div className="userIdOnPost">
                      <img
                        src="./images/moonsil/accountpicture.jpeg"
                        alt="계정 소유자 사진"
                        width="40px"
                        height="40px"
                      />
                      mooninthesky
                    </div>

                    <div className="seeMore">
                      <img
                        src="./images/moonsil/dots.png"
                        alt="계정 소유자 사진"
                        width="20px"
                        height="20px"
                      />
                    </div>
                  </div>
                </header>
                <img
                  src="./images/moonsil/doggy.jpeg"
                  alt="귀염둥이 강아지"
                  width="100%"
                />
                <div className="commentBox">
                  <div className="responseContainer">
                    <div className="reponseFromFollowers">
                      <div className="iconsForResponse">
                        <img
                          src="./images/moonsil/heart.png"
                          alt="좋아요"
                          width="30px"
                          height="30px"
                        />
                        <img
                          src="./images/moonsil/speech-bubble.png"
                          alt="코멘트"
                          width="30px"
                          height="30px"
                        />
                        <img
                          src="./images/moonsil/paper-plane.png"
                          alt="공유하기"
                          width="30px"
                          height="30px"
                        />
                      </div>
                      <div className="savePhoto">
                        <img
                          src="./images/moonsil/bookmark.png"
                          alt="책갈피"
                          width="30px"
                          height="30px"
                        />
                      </div>
                    </div>
                    <div className="storyBox">
                      <p className="countingViews">
                        rocktheworld님 외 10명이 좋아합니다
                      </p>
                      <div>
                        <p className="postDescription">
                          <ul>
                            <li>
                              <strong>moonsil</strong>
                            </li>
                            <li style={{ paddingLeft: '10px' }}>
                              {' '}
                              귀염댕이 멍멍둥이
                            </li>
                          </ul>
                        </p>
                        <div className="wrappingCommentContainer">
                          <p className="commentContainer">
                            <ul>
                              <li>
                                <strong>jiwony</strong>
                              </li>
                              <li style={{ paddingLeft: '10px' }}>
                                댕댕이는 사랑이죠
                              </li>
                            </ul>
                          </p>
                          <div className="comment-list">
                            <ul>
                              {this.state.replies.map((element, index) => (
                                <li key={index}>
                                  <div class="newReplies">
                                    <div class="inputId">{element.userId}</div>
                                    <div
                                      style={{
                                        paddingLeft: '10px',
                                      }}
                                    >
                                      {element.comment}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p className="uploadTime">10분 전</p>
                    </div>
                    <div className="replyingCommentsBox">
                      <div className="commentsSpace">
                        <input
                          onChange={this.handleCommentChange}
                          onKeyUp={this.handleKeyEvent}
                          value={this.state.comment}
                          id="commentInput"
                          type="text"
                          placeholder="댓글 달기..."
                        />
                        <button
                          type="submit"
                          onClick={this.handleOnSubmit}
                          id="submitButton"
                        >
                          게시
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rightContentsWrapping">
              <div className="rightContentBox">
                <aside>
                  <div className="myAccountClickButton">
                    <img
                      src="./images/moonsil/accountpicture.jpeg"
                      alt="계정 소유자 사진"
                      width="50px"
                      height="50px"
                    />
                    <div className="showingMyAccount">
                      <p>mooninthesky</p>
                      <p>황문실</p>
                    </div>
                    []
                  </div>

                  <div className="suggestionForYou">
                    <div>회원님을 위한 추천</div>
                    <button className="loginBtn">모두 보기</button>
                  </div>

                  <div className="suggestionList">
                    <div className="firstSuggestion">
                      <div className="wrappingFirstSuggestion">
                        <img
                          src="./images/moonsil/firstSuggsetion.jpeg"
                          alt="influencer"
                          width="40px"
                          height="40px"
                        />
                        <div className="userNameOfFirstSuggestion">
                          <p>chris_andterry</p>
                          <p className="numberOfCommonFriends">
                            thdtkfl님 외에..
                          </p>
                        </div>
                      </div>
                      <button>팔로우</button>
                    </div>
                    <div className="secondSuggestion">
                      <div className="wrappingSecondSuggestion">
                        <img
                          src="./images/moonsil/secondSuggestion.jpeg"
                          alt="influencer"
                          width="40px"
                          height="40px"
                        />
                        <div className="userNameOfSecondSuggestion">
                          <p>mina_1266</p>
                          <p className="numberOfCommonFriends">
                            thdtkfl님 외에..
                          </p>
                        </div>
                      </div>
                      <button>팔로우</button>
                    </div>
                    <div className="thirdSuggestion">
                      <div className="wrappingThirdSuggestion">
                        <img
                          src="./images/moonsil/thirdSuggestion.jpeg"
                          alt="influencer"
                          width="40px"
                          height="40px"
                        />
                        <div className="userNameOfThirdSuggestion">
                          <p>sunmi_two</p>
                          <p className="numberOfCommonFriends">
                            thdtkfl님 외에..
                          </p>
                        </div>
                      </div>
                      <button>팔로우</button>
                    </div>
                  </div>
                </aside>

                <footer>
                  <ul>
                    <li>Instagram 정보</li>
                    <li>지원</li>
                    <li>홍보센터</li>
                    <li>API</li>
                    <li>채용정보</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>디렉터리</li>
                    <li>프로필</li>
                    <li>해시태그</li>
                    <li>언어</li>
                  </ul>
                  <p> © 2021 INSTAGRAM FROM FACEBOOK </p>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
