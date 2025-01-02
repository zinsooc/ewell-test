import React, { useEffect } from "react";
import videoSrc from "../../img/01.mp4";
import img01 from "../../img/img_0001.png"
import img02 from "../../img/img_0002.png"
import img03 from "../../img/img_0003.png"
import img04 from "../../img/img_0004.png"

import Fade from "react-reveal/Fade";

export default function About() {  

   const width = document.body.clientWidth;

    // useEffect(() => {
    //     window.addEventListener("scroll", getImgResize);
    //     return () => {
    //       window.removeEventListener("scroll", getImgResize); //clean up
    //     };
    //   }, []);
    
      const getImgResize = () => {
        if ( width > 1296 ) {
        const img01 = document.documentElement.querySelector("#img");
        const imageElem1 = document.documentElement
          .querySelector("#img01")
          .getBoundingClientRect().top;    
    
        while (imageElem1 < 0) {
          let value01 = imageElem1 / document.body.clientHeight + 1;
          value01 = value01 > 1 ? 1 : value01 < 0.65 ? 0.65 : value01;
          img01.style.transform = `scale(${value01})`;
          // console.log(value01);
          if ((value01 = 0.65)) {
            break;
          }
        }     
      }  
      };
      const ewellHistory = [
          {
              date : "2012.11.22",
              title : "(주)이웰 (Energy well) 회사 설립",
          },
          {
            date : "2013.03.12",
            title : "발전 사업 허가 취득 -  제주특별자치도지사",
          },
          {
            date : "2014.04.03",
            title : "제주토평 바이오매스 발전소 착공 신고 ",
          },
          {
            date : "2015.02.26",
            title : "발전소 계량기 봉인 / 발전량 (14,292kw) 최초 생산 ",
          },
          {
            date : "2015.03.02 - 07.31",
            title : "발전소 EW 시운전 실시",
          },
          {
            date : "2015.08.01",
            title : "상업 운전 개시 ",
          },
          {
            date : "2019.05.15",
            title : "대기/폐수시설 변경(고형연료사용시설 - 제주도청 생활환경과)",
          },
          {
            date : "2019.11.12",
            title : "고형연료제품 사용허가증 득 - 제주도청 생활환경과 ",
          },
          {
            date : "2020.04.15",
            title : "고형연료사용 ",
          },
          {
            date : "2021.09.02",
            title : "최종인수예정자 선정 법원 허가 - (주)아이윈",
          },
          {
            date : "2021.12.09",
            title : "주식양수도계약 체결 - (주)아이윈, (주)웰크론한텍 공동경영",
          },
          {
            date : "2022.01.10",
            title : "신규 임원 선임 (대표이사 서한철, 대표이사 신규진)",
          }, 
      ]

      const ewellEnergyHistory = [
        {
            date : "2019.10.01",
            title : "(주)이웰에너지 회사 설립 (대표이사 김영길)",
        },
        {
          date : "2020.01.02",
          title : "대기배출시설 설치 신고필증 교부",
        },
        {
          date : "2020.01.14 ",
          title : "폐기물 종합재활용업 허가",
        },
        {
          date : "2020.02.24",
          title : "목재생산업 등록 (목재칩, 톱밥)",
        },
        {
          date : "2020.03.27",
          title : "고형연료제품 제조 신고",
        },
        {
          date : "2020.03.31",
          title : "(주)이웰, (주)이웰에너지 연료 공급 계약 체결",
        },
        {
          date : "2020.04.01",
          title : "이웰 외 발전소 등 납품 개시",
        },
        {
          date : "2019.11.12",
          title : "이웰 발전소에 고형연료 납품 개시",
        },
        {
          date : "2021.12.09",
          title : "주식양수도계약 체결 - (주)아이윈, (주)웰크론한텍 공동경영",
        },
        {
          date : "2021.12.22",
          title : "신규 임원 선임 (대표이사 서한철, 대표이사 신규진)",
        }        
    ]
    
    return(
    <div id="About">
      <div id="img01">
        <div id="img">
          <div className="box">
            <div>
              <video muted={true} autoPlay loop={true} playsInline>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
      {/* 슬로건 */}
        <div className="aboutTxt-wrap">
            <h2>
                <span>슬로건</span><br />
                &ldquo;사람과 함께, 환경을 바르게, 제주를 이롭게&rdquo; 
            </h2>
                <p>
                &ldquo;사람과 함께, 환경을 바르게, 제주를 이롭게&rdquo; 라는 세 가지 가치를 전 임직원이 가슴에 새기며 { width > 952 && <br />}  
                창의적 솔루션으로 보다 나은 기술과 밝은 미래의 제주를 꿈꾸며 나아갑니다. { width > 952 && <br />}      
                </p>                
                <p>
                환경을 위한 효율적이고 지속 가능한 에너지 발전 방식, 제주를 위한 가치 창조와 { width > 952 && <br />}
                일자리 창출, 제주도민을 우선하는 인간존중의 경영 철학을 실천합니다.{ width > 952 && <br />}   
                </p>               
                <p>
                이웰은 제주도민과 더불어 발전하는 상생의 가치를 따라 신뢰받는 좋은 기업, { width > 952 && <br />}
                더 나아가 대한민국의 바른 에너지 브랜드의 선두로 자리매김해나갈 것입니다.{ width > 952 && <br />}      
                </p>
        </div>
        {/* CI */}
        <div className="ci-container">
            <h2>
                <span>CI 소개</span><br />
                제주의 하늘과 땅을 닮은 색을 입힌 { width > 952 && <br />}   
                이웰의 새로운 얼굴입니다.
            </h2>
            <div className="img-wrap" >
            <a href ="ewell_logo_type.pdf" download >
                <div className="img-box">          
                    <img src={img01} alt="logo-image" className="img01"/>         
                </div>
                <div className="img-box2">
                    <div>
                        <img src={img02} alt="logo-image"/>
                    </div>
                    <div>
                        <img src={img03} alt="logo-image"/>
                    </div>
                </div>     
                <div className="img-box">
                    <img src={img04} alt="logo-image" className="img02"/>
                </div>
            </a>
            </div>
            <p className="sub-txt">이미지를 클릭하면 PDF 다운로드가 시작됩니다.</p>
        </div>
        {/* 연혁 */}
        <div className="history-container">
            <h2>
                <span>연혁</span><br />
                변화하는 세상, 변화하는 가치에 맞춰 { width > 952 && <br />}
                변화하는 이웰의 역사를 소개합니다.
            </h2>
            <p className="title">(주)이웰</p>
            <p className="subContent">(주)이웰 : 제주에서 발생된 폐목재, 임목으로 만들어진 Bio-SRF(바이오 고형연료)를 연료로 사용하여 생산된 스팀을 활용하여 전기를 생산하고 판매하는 기업으로서 제주도 자원의 재활용 촉진과 자원순환에 기여하고 있습니다.</p>
            <p className="title">(주)이웰 연혁</p>
            <div>
                {ewellHistory.map((value, index)=> (
                <Fade bottom delay={100 + index}>
                <div className="history-box">
                    <p>{value.date}</p>
                    <p>{value.title}</p>
                </div>
                </Fade>
                ))}
            </div>    
            <p className="title second">(주)이웰에너지</p>
            <p className="subContent">(주)이웰에너지 : 제주에서 발생되는 폐목재, 임목 등을 파쇄. 분쇄. 선별 처리 공정을 통하여 생산된 Bio-SRF(바이오 고형연료)를 판매하는 기업으로서 관계회사인 (주)이웰에 공급하거나 기타 발전소에 납품하고 있으며, 제주의 환경을 바르고 깨끗하게 하기 위해 노력하고 있습니다. </p>
            <p className="title">(주)이웰에너지 연혁</p>
            <div>
                {ewellEnergyHistory.map((value, index)=> (
                <Fade bottom delay={200 + index}>
                <div className="history-box">
                    <p>{value.date}</p>
                    <p>{value.title}</p>
                </div>
                </Fade>
                ))}
            </div>      
        </div>
     </div>
    </div>
    );
}