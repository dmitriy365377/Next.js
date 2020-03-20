import React from 'react'
import Gif from '../../image/loading.gif'

const DataUploadLoader = () => {
    return (
        <>
            <img src={Gif} id="pageLoading" />
            <style jsx>{`
             #pageLoading {
              margin: 20px auto;
              width: 70%;
              } 
            `}
            </style>
        </>
    )
}


export default DataUploadLoader