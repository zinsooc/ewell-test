import React from "react";

export default function Footer() {   
    const width = document.body.clientWidth;
    return(
    <div id="Footer">
        {width > 952 ? (
            <>
            <p>본사 : 제주특별자치도 서귀포시 토평공단로 115번길 36 (토평동 3277-5)</p>
            <p style={{marginTop: 10}}>TEL : 064-738-1415</p>
            <p>&copy; 주식회사 이웰 / 이웰에너지</p>
            </>
        ):(
            <>
            <p>본사 <br/> 제주특별자치도 서귀포시 토평공단로 <br/>115번길 36 (토평동 3277-5)</p>
            <p style={{marginTop: 10}}>TEL : 064-738-1415</p>
            <p>&copy; 주식회사 이웰 / 이웰에너지</p>
            </>
        )}       
    </div>
    );
}