import React from 'react'
import './FileDataTile.css'


const FileDataTile = (props) => {

    

  return (
    <div className='file-tile'>
       <p>{props.srno+1}</p>
       <p>{props.fileData.fileName}.{props.fileData.fileType}</p>
       <p>{props.fileData.fileSize}</p>
       <p>{props.fileData.uploadDate.toLocaleDateString("en-US")}</p>
       <p><i class="uil uil-trash-alt"></i></p>
       <p><i class="uil uil-share"></i></p>
    </div>
  )
}

export default FileDataTile