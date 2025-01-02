import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../css/dialog.scss";
import "core-js/full/promise/with-resolvers.js";
import "pdfjs-dist/webpack";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


// Polyfill for environments where window is not available (e.g., server-side rendering)
// @ts-expect-error This does not exist outside of polyfill which this is doing
if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== "undefined") {
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    } else {
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      global.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    }
  }
  
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
  export default function PdfViewerDialog(props) {
    const { pdfOpen, handleViewerClose, pdfData } = props;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
   
    return(
        <div className="pdfDialog-wrap" >
            <div className="pdfDialog-contents">
                { numPages > 1 && pageNumber > 1 ? (    
                    <div className="desk tab pdfDialog-pageBtn">
                    <LeftOutlined onClick={()=> pageNumber > 1 ? setPageNumber(pageNumber-1):null} />
                    </div>     
                ): (
                    <div className="desk tab pdfDialog-pageBtn">
                    <LeftOutlined style={{color:"#b9b9b9"}}/>
                    </div> 
                )}
                 
                <Document
                    className="pdfDialog"
                    file={pdfData}
                    width={50}
                    onLoadSuccess={onDocumentLoadSuccess}>                    
                    <Page pageNumber={pageNumber} />
                </Document>
                { numPages > 1 && pageNumber < numPages ? (
                    <div className="desk tab pdfDialog-pageBtn">
                    <RightOutlined onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null} />
                    </div>  
                ) : (
                    <div className="desk tab pdfDialog-pageBtn">
                    <RightOutlined style={{color:"#b9b9b9"}} />
                    </div>
                )}
                      
                </div>               
            <p className="desk tab pageNum-container">
                Page {pageNumber} of {numPages}
            </p>   
            <div className="mobile pageNum-container">
            { numPages > 1 && pageNumber > 1 ? (                       
                    <LeftOutlined onClick={()=> pageNumber > 1 ? setPageNumber(pageNumber-1):null} />                      
                ): (                  
                    <LeftOutlined style={{color:"#b9b9b9"}}/>               
                )} 
                <span style={{margin:"0 16px"}}>Page {pageNumber} of {numPages}</span>
                { numPages > 1 && pageNumber < numPages ? (                   
                    <RightOutlined onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null} />                    
                ) : (                   
                    <RightOutlined style={{color:"#b9b9b9"}} />                   
                )}
            </div>            
        </div>
    )
  }  