import React, {  } from "react";

import icon01 from "../../img/image_07.png";
import icon02 from "../../img/image_08.png";
import icon03 from "../../img/image_09.png";
import icon04 from "../../img/image_10.png";
import image03 from "../../img/image03.png";
import image04 from "../../img/image_04.png";
import image05 from "../../img/image_05.png";
import image06 from "../../img/image_06.png";

import Fade from "react-reveal/Fade";

export default function Value() {

  const width = document.body.clientWidth;
  return (
    <div id="Value">
      {/* title */}
      {width > 952 ? 
      <h2>
        <p><span className="color">청정 제주</span>를 위한 세가지 약속 <br /></p>
        <p>2030 WFI를 위한 우리의 노력 <br /></p>
        <p>Waste Free Island Jeju</p>
      </h2>
      :
      <h2>
        <p><span className="color">청정 제주</span>를 위한 
        <br />세가지 약속 </p>
        <p>2030 WFI를 위한 
        <br />우리의 노력 <br /></p>
        <p>Waste Free 
        <br />Island Jeju</p>
      </h2>
      }
      {/* img */}
      {width > 952 ? 
        <div className="section-01">        
          <Fade bottom>
            <div className="img-bg01">
              <p>
                탄소 중립 실천 <br />
                폐열회수 극대화 <br />
                (LNG, 석유화학연료, 석탄 사용 규제)
              </p>
            </div>       
          </Fade>
          <div className="img-wrap ">
            <Fade bottom delay={300}>
              <div className="img-bg02">
                <p>
                  양질의 일자리 창출 <br />
                  제주 지역 우선 채용
                </p>
              </div>
            </Fade>
            <Fade bottom delay={500}>
              <div className="img-bg03">            
                <p>
                  지역 주민 <br />
                  지원 사업 개발
                </p>
              </div>
            </Fade>
            </div>
        </div>
      :
      <div className="section-01">        
        <Fade bottom> 
        <div className="box">
          <div className="img-box">
            <img src={image04} alt="img-04" />
          </div>         
            <p>
              탄소 중립 실천 <br />
              폐열회수 극대화 <br />
              <span>LNG, 석유화학연료, 석탄 사용 규제)</span>
            </p>
            </div>
        </Fade>
          <Fade bottom delay={50}>
          <div className="box">
            <div className="img-box">
            <img src={image05} alt="img-05" />
              </div>                  
            <p>
                양질의 일자리 창출 <br />
                제주 지역 우선 채용
              </p>
              </div>
          </Fade>
          <Fade bottom delay={100}>
          <div className="box">
            <div className="img-box A01">
              <img src={image06} alt="img-06" />
            </div>                
            <p>
                지역 주민 <br />
                지원 사업 개발
              </p>
            </div>
          </Fade>
      </div>
      }
      {/* part2 */}
      {/* <div className="section-02"> */}
      {/* {width > 952 ? 
        <h2>주변 환경 오염을 최소화하기 위한 약속</h2>
        :
        <h2>주변 환경 오염을 <br />최소화하기 위한 약속</h2>
      } */}
        {/* <div className="icon-wrap">
          <div>
            <img src={icon01} className="iconImg-01" alt="icon" />
            <p>
              생활 악취, 비산 먼지를 고려해 설비는 <br />
              건축물 내부에 배치하고 음압 시설을 <br />
              설치해 관리하고 있습니다.
            </p>
          </div>
          <div>
            <img src={icon02} className="iconImg-02" alt="icon" />
            <p>
              대기오염 방지 기술은 환경부 <br />
              통합인허가 최적 기법을 적용해 <br />
              환경 친화적입니다.
            </p>
          </div>
        </div>
        <div className="icon-wrap">
          <div>
            <img src={icon03} className="iconImg-03" alt="icon" />
            <p>
              오염물질 상시 감시 체계를 구축해 <br />
              빠짐 없이 관리, 감독합니다. <br />
              (TMS 설치 운영)
            </p>
          </div>
          <div>
            <img src={icon04} className="iconImg-04" alt="icon" />
            <p>
              폐수 배출 최소화 시스템을 구축해 <br />
              우리 환경을 보호하기 <br />
              위해 최선을 다하고 있습니다.
            </p>
          </div>
        </div>
      </div> */}
      {/* part3 */}
      {/* <div className="section-03">
        <div className="img-box">
          <img src={image03} alt="img" />
        </div>
        <h2>대기 방지시설 운영안</h2>
        <div className="text-box">
          <h3>다이옥신, 먼지 : </h3>
          <p>1차 집진시설 - Multi Cyclone <br />
          2차 집진시설 - Bag Filter 시설</p>
        </div>       
        <div className="text-box">    
        <h3>오염물질 제거 대상 : </h3>   
          <p>먼지(1ppm 이하) <br />
          다이옥신 - 0.1mg/m3 이하</p>
        </div>

        <h2>산성가스상 물질 </h2>
        <div className="text-box">        
          <h3>질소산화물 : </h3>
          <p>SNCR System - 40ppm 이하<br />
          SCR System - 20ppm 이하
          </p>
        </div>
        <div className="text-box">
        <h3>염화수소 : </h3>
          <p>1차 세정시설 - Venturi Scrubber<br />
             2차 세정시설- Wet Scrubber (1ppm 이하)
          </p>
        </div>
      </div> */}
    </div>
  );
}
