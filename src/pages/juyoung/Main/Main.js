import React from "react";
import "./Main.scss"
import DATA_LIST from "./DATA";
import Side from "./Side";


class Main extends React.Component{
    
  constructor() {
    super();
    this.state = {
      commentValue: '',
      commentList: [],
      ative : false,
      value : '',
    };
  }
  
  handleCommentInput = e => {
    this.setState({
      commentValue: e.target.value,
      value: e.target.value,   
    });
  };
  
  addComment = () => {
    const { commentList, commentValue } = this.state; //구조 분해 할당
    this.setState({
      commentList: commentList.concat([commentValue]),
      commentValue: '',
      value: '',
    });
  
  }
  

  changeColor = () => {
    if (this.state.commentValue.length > 1) {
      this.state.ative = true;

    } else {
      this.state.ative = false;
    } 
  }
  
    render(){
     
      return(
          <>
          <nav className="Main">
            <ul className="list">
              <li className="listLogo">westagram</li>
              <li className="listInput"><input type="text" placeholder="검색"/></li>
              <ul className="listImg">
                <li><img src="/images/explore.png" alt="compass"/></li>
                <li><img src="/images/heart.png" alt="heart"/></li>
                <li><img src="/images/profile.png" alt="profile"/></li>
              </ul>
            </ul>
          </nav>
          
          <main className="center">
            <div className="feed">
              <div className="header">
                <img src="/images/wecode.jpg" alt="wecodelog" className="circle"/>
                <span>travelholic_insta</span>
                <side />
              </div>
        
              <div className="feedImage"><img src="/images/moon.jpg" alt="mainPicture" className="picture"/> </div>
              
              <article>
                <div>
                  <ul>
                    <div className="like">
                      
                      <div className="like2">
                        <li><img src="/images/heart2.png" alt="heart" className="icon"/></li>
                        <li><img src="/images/채팅.png" alt="chatting" className="icon"/></li>
                        <li><img src="/images/비행기.png" alt="plane" className="icon"/></li>
                      </div>
                      
                      <div>
                        <li><img src="/images/책깔피.png" alt="bookmark" className="icon"/></li>
                      </div>
        
                    </div>
                  </ul>
                </div>    
                
                <div className="commentWrap">
                  <span>좋아요 869개</span><br/>
                  <ul id="commentLists">
                    <li className="add">
                      <span className="name">canon_mj</span>
                      <span>위워크에서 진행한 베이킹 클레스... 더 보기</span>
                    </li>
                    {this.state.commentList.map((commentlement, idx) => {     
                      return <li key={idx}>
                        <span className="name">canon_mj</span>
                        <span>{commentlement}</span>
                        </li>;
                    })}
                  </ul>
                  <div className="comment">
                    <span>42분 전</span>
                    <img src="/images/heart2.png" alt="heart" width="12" height="12"/>
                  </div>   
                </div> 
                
                <div className="input">
                  <input 
                  type="text" 
                  id='inputText' 
                  placeholder="댓글달기"
                  onChange= {this.handleCommentInput}
                  onKeyUp= {this.changeColor}
                  value= {this.state.value} 
                  />
                  <button className = {'btn' + (this.state.ative ? 'Ative' : 'Disabled')}
                  id='inputButton'
                  onClick={this.addComment}
                  
                  >게시</button>
                </div>
        
              </article>
            </div>
        
            <aside>
              
              <div className="side">
                <div className="change">
                    <img src="/images/wecode.jpg" alt="wecodelog" className="circle1"/>
                    <span>wecode_bootcamp</span>
                </div>
        
                <div className="recommend"><span>회원님을 위한 추천</span><a href="#">모두보기</a></div>
                
                {DATA_LIST.map(comment => { 
                  return (
                    <Side
                      name={comment.userName}
                      comment={comment.content}
                      />
                  );
                  })} 
          

                <div className="authorization">
                  <p>instagram 정보·지원·홍보 센터·API·<br/>
                  채용정보·개인정보처리방침·약관·<br/>
                  디렉터리·프로필·해시태크·언어<br/><br/>
                  2019 INSTAGRAM</p>
                </div>
        
              </div>    
            </aside>
        
          </main>
          </>
        );
    };

  }
export default Main;