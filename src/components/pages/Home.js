import React, { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

//img import
import image01 from "../../img/image01.png";
import image02 from "../../img/image02.png";
import image03 from "../../img/image03.png";
import videoSrc from "../../img/01.mp4";

// console.log("창틀뺀 내용" + window.innerHeight);
// console.log("눈에 보이는 높이"+document.body.clientHeight)
// console.log("올라간 높이" + document.documentElement.scrollTop)
// console.log("전체사이즈" + document.body.scrollHeight)

export default function Home() {

  const width = document.body.clientWidth;

  // useEffect(() => {
  //   window.addEventListener("scroll", getImgResize);
  //   return () => {
  //     window.removeEventListener("scroll", getImgResize); //clean up
  //   };
  // }, []);

  const getImgResize = () => {
    if ( width > 1296 ) {
    const img01 = document.documentElement.querySelector("#img");
    const imageElem1 = document.documentElement
      .querySelector("#img01")
      .getBoundingClientRect().top;

    const img02 = document.documentElement.querySelector("#img2");
    const imageElem2 = document.documentElement
      .querySelector("#img02")
      .getBoundingClientRect().top;

    const img03 = document.documentElement.querySelector("#img3");
    const imageElem3 = document.documentElement
      .querySelector("#img03")
      .getBoundingClientRect().top;

    const img04 = document.documentElement.querySelector("#img4");
    const imageElem4 = document.documentElement
      .querySelector("#img04")
      .getBoundingClientRect().top;

    while (imageElem1 < 0) {
      let value01 = imageElem1 / document.body.clientHeight + 1;
      value01 = value01 > 1 ? 1 : value01 < 0.6 ? 0.6 : value01;
      img01.style.transform = `scale(${value01})`;
      console.log(value01);
      if ((value01 = 0.6)) {
        break;
      }
    }
    while (imageElem2 < 0) {
      let value02 = imageElem2 / document.body.clientHeight + 1;
      value02 = value02 > 1 ? 1 : value02 < 0.6 ? 0.6 : value02;
      img02.style.transform = `scale(${value02})`;
      if ((value02 = 0.6)) {
        break;
      }
    }
    while (imageElem3 < 0) {
      let value03 = imageElem3 / document.body.clientHeight + 1;
      value03 = value03 > 1 ? 1 : value03 < 0.6 ? 0.6 : value03;
      img03.style.transform = `scale(${value03})`;
      if ((value03 = 0.6)) {
        break;
      }
    }
    while (imageElem4 < 0) {
      let value04 = imageElem4 / document.body.clientHeight + 1;
      value04 = value04 > 1 ? 1 : value04 < 0.6 ? 0.6 : value04;
      img04.style.transform = `scale(${value04})`;
      if ((value04 = 0.6)) {
        break;
      }
    }
  }
};

  return (
    <div id="Home">
      <div id="img01">
        <div id="img">
          <div className="box">
            <div>
              <video muted={true} autoPlay loop={true} playsInline={true}>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>    
      <div className="txt-wrap">
        <h1>더 나은 제주, 더 나은 세상.</h1>
          <p>          
          주식회사 이웰이 바른 발전소 문화의 선두에 서기 위해 22년 새롭게
          태어났습니다.
          { width > 952 && <br />}
          환경을 바르게, 제주를 이롭게, 사람과 함께라는 세 가지 가치를 전
          임직원이 가슴에 새기며
          { width > 952 && <br />}
          창의적 솔루션으로 보다 나은 기술과 밝은 미래의 제주를 꿈꾸며
          나아갑니다.
          </p>     
        <Button>
          <Link to="/About">이웰에 대하여</Link>
        </Button>
      </div>
      <div id="img02">
        <div id="img2">
          <div className="box">
            <div>
              <img src={image01} alt="img-01" />
            </div>
          </div>
        </div>
      </div>    
      <div className="txt-wrap">
        <h1>다함이 다시 더함으로.</h1>
          <p>
          환경을 위한 효율적이고 지속 가능한 에너지 발전 방식, 가치와 함께 하는
          기술
          { width > 952 && <br />}
          바른 에너지 브랜드의 선두로 나아갈 이웰의 새로운 목소리입니다.
        </p>     
        <Button>
          <Link to="/Value">기술과 가치</Link>
        </Button>
      </div>
      <div id="img03">
        <div id="img3">
          <div className="box">
            <div>
              <img src={image02} alt="img-02" />
            </div>
          </div>
        </div>
      </div>     
      <div className="txt-wrap">
        <h1>사람을 위해. 사람과 함께.</h1>
        <p>
          이웰은 제주도민과 더불어 발전하는 상생의 가치를 따라 신뢰받는 좋은
          기업으로서
          { width > 952 && <br />}
          일자리 창출, 제주도민을 우선하는 인간존중의 경영 철학을 실천합니다.
        </p>
        <Button>
          <Link to="/Jobs">공지사항</Link>
        </Button>
      </div>
      <div id="img04">
        <div id="img4">
          <div className="box">
            <div>
              <img src={image03} alt="img-03" />
            </div>
          </div>
        </div>
      </div>    
      <div className="txt-wrap">
        <h1>제주에서 제주를 이롭게.</h1>
        <p>
          "제주에서 바르게 만든 우리 에너지."라는 슬로건으로 제주도를 대표하는
          에너지
          { width > 952 && <br />}
          브랜드로 자리매김하기 위해 노력합니다. 지금 나의 에너지, 이웰이
          함께합니다.
        </p>
        <Button>
          <Link to="/Location">발전소 위치</Link>
        </Button>
      </div>
    </div>
  );
}
