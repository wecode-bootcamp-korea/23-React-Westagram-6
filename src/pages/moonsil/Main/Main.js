import React, { useState } from 'react';
import './Main.scss';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
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
                          <span>
                            <strong>moonsil</strong>
                          </span>
                          <span> 귀염댕이 멍멍둥이</span>
                        </p>
                        <div className="wrappingCommentContainer">
                          <p className="commentContainer">
                            <strong>jiwony</strong>
                            <span className="content">댕댕이는 사랑이죠</span>
                          </p>
                        </div>
                      </div>
                      <p className="uploadTime">10분 전</p>
                    </div>
                    <div className="replyingCommentsBox">
                      <div className="commentsSpace">
                        <input
                          id="commentInput"
                          type="text"
                          placeholder="댓글 달기..."
                        />
                        <button id="submitButton">게시</button>
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
