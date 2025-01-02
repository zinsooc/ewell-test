import React, { useState } from "react";
import image02 from "../../img/image02.png";
import PdfViewerDialog from "../common/PdfViewerDialog";
import {CloseOutlined } from "@ant-design/icons";
import "../../css/dialog.scss";

export default function Jobs() {  
  const width = document.body.clientWidth;
  const [modalOpen, setModalOpen] = useState(false);
  const [fileDataPath, setFileDataPath] = useState(null);

  const findFileData = (type) => {
    if (type === 1) return "1_24년_발전소_주변지역_장학금_지급관련_협조의_건(발송).pdf" ;
    else if (type === 2) return "2_24년_제5차_토평마을회_운영위원회_회의록.pdf";
    else if (type === 3) return "3_토평동마을회2024-1공문_발전소_주변지역_장학금_지급관련_협조의_건_자사_업로드.pdf";
    else if (type === 4) return "4_24년도_발전소_주변지역_장학금_지급대상자_공고.pdf"
    else return "fail to find file"
  }
  const openModal = (type) => {
    setFileDataPath(findFileData(type));
    setModalOpen(!modalOpen)
  }
    return(
    <div id="Jobs">
      <h2>
        <span>&ldquo;사람과 함께, { width < 952 && <br />} 제주를 이롭게&rdquo;</span><br />
        이웰과 함께 새로운 발전 문화를 만들어 갈 { width > 952 && <br />}      
        인재를 찾고 있습니다.        
      </h2>
      { width > 952 ? 
      <img src={image02} className="jobs-img" alt="image" />
      :
       <div className="jobs-img-box">
         <img src={image02} className="jobs-img" alt="image" />
         </div>
      }     
      <a href= "https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=VVRBY3ZlQ0VNcXJKbGNXV3YwRnFFUT09" 
         target={"_blank"} 
         title="(주)이웰 채용소식 바로가기">
        <div className="job-btn">
          (주)이웰 채용 소식
        </div>
      </a>
      <a href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=SEFlaEQ3alRDR2RqaUVEOGpnTkMrZz09"
         target={"_blank"}
         title="(주)이웰에너지 채용소식 바로가기" >
        <div className="job-btn">
          (주)이웰에너지 채용 소식
        </div>
      </a>    
      <div className="job-btn" onClick={()=>openModal(1)}>
          24년도 발전소 주변지역 장학금 지급관련 협조의 건
      </div>
      <div className="job-btn" onClick={()=>openModal(2)}>
        24년도 제5차 토평마을회 운영위원회 회의록
      </div>
      <div className="job-btn" onClick={()=>openModal(3)}>
        토평동마을회2024-1공문 발전소 주변지역 장학금 지급관련 협조의 건 자사 업로드
      </div>
      <div className="job-btn" onClick={()=>openModal(4)}>
       24년도 발전소 주변지역 장학금 지급대상자 공고
      </div>
      
      {modalOpen && 
          <div id="dialogLayer">
            <div className="pdfDialog-container">
            <div className="pdfDialog-closeBtn">
              <CloseOutlined onClick={()=>setModalOpen(false)}/>
            </div>
            <PdfViewerDialog pdfData={fileDataPath} pdfOpen={modalOpen}/>
            </div>
          </div>
          }      
      </div>
    );
}