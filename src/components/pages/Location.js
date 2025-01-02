import React, { useState } from "react";
export default function Location() {    
    return(
    <div id="Location">
      <h2>        
        이웰을 찾아오셨나요? <br />
        찾아오실 주소를 알려드립니다.        
      </h2>
      <div className="img-wrap">
      <a href= "http://naver.me/Ff0Y4f9I" 
         target={"_blank"} 
         title="사무실 위치 바로가기">        
        <div className="imgBox bg03">
            <div>
              본사
            </div>  
        </div>
        </a>
        </div>
      <div className="img-wrap second">  
      <a href= "https://map.naver.com/v5/search/%EC%A0%9C%EC%A3%BC%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%86%A0%ED%8F%89%EA%B3%B5%EB%8B%A8%EB%A1%9C127%EB%B2%88%EA%B8%B8%2033/address/14090867.386729013,3934034.050271835,%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%86%A0%ED%8F%89%EA%B3%B5%EB%8B%A8%EB%A1%9C127%EB%B2%88%EA%B8%B8%2033,new?c=14090837.8720317,3934004.8887084,19,0,0,0,dh&isCorrectAnswer=true" 
         target={"_blank"} 
         title="연료 Plant 위치 바로가기">
        <div className="imgBox bg01">   
           <div>
              연료 Plant
           </div>                
        </div>  
        </a>      
        <a href= "https://map.naver.com/v5/search/%EC%A0%9C%EC%A3%BC%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%86%A0%ED%8F%89%EA%B3%B5%EB%8B%A8%EB%A1%9C115%EB%B2%88%EA%B8%B8%2032/address/14090936.193306271,3933978.6097752787,%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%ED%86%A0%ED%8F%89%EA%B3%B5%EB%8B%A8%EB%A1%9C115%EB%B2%88%EA%B8%B8%2032,new?c=14090895.9210667,3933972.2823431,19,0,0,0,dh&isCorrectAnswer=true" 
         target={"_blank"} 
         title="발전소 위치 바로가기">        
        <div className="imgBox bg02">          
            <div>
              발전소
            </div>    
        </div>      
        </a>  
    </div>
    </div>
    );
}