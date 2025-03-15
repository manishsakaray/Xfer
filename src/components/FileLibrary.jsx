import React, { useEffect, useState } from "react";
import "./Hero.css";
import FileDataTile from "./FileDataTile";

const result = [{fileName: "expenses", fileType: "xlsx", fileSize: "40Kb", uploadDate: new Date(2024-12-25)},
    {fileName: "project", fileType: "pdf", fileSize: "2Mb", uploadDate: new Date(2025-1-2)},
    {fileName: "image", fileType: "png", fileSize: "160Kb", uploadDate: new Date(2025-2-25)}];

const FileLibrary = () => {
  const [highlightBorder, setHighlightBorder] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (val) => {
    
    setHighlightBorder(val);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("endpoint");
        // console.log("manish im here");
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const result = await response.json();

        // const result = [{fileName: "expenses", fileType: "xlsx", fileSize: "40Kb", uploadDate: new Date(2024-12-25)},
        //                 {fileName: "project", fileType: "pdf", fileSize: "2Mb", uploadDate: new Date(2025-1-2)},
        //                 {fileName: "image", fileType: "png", fileSize: "160Kb", uploadDate: new Date(2025-2-25)}];

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [highlightBorder]);

  return (
    <div className="file-lib">
      <div className="file-lib-nav">
        <div
          onClick={() => handleClick(0)}
          className={highlightBorder == 0 ? "highlight-bottom-border" : ""}
        >
          <p>My Files</p>
        </div>
        <div
          onClick={() => handleClick(1)}
          className={highlightBorder == 1 ? "highlight-bottom-border" : ""}
        >
          <p>Received</p>
        </div>
        <div
          onClick={() => handleClick(2)}
          className={highlightBorder == 2 ? "highlight-bottom-border" : ""}
        >
          <p>Sent</p>
        </div>
      </div>
      <div className="file-lib-list">
        
            {
                result.map((item,index) => (
                    <FileDataTile key={index} srno={index} fileData={item}/>
                ))
            }
        
      </div>
    </div>
  );
};

export default FileLibrary;
