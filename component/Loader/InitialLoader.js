import React from 'react';
import LoadingGif from '../../image/loading2.gif'

const InitialLoader = () => {
    return (
        <div>
            <img src={LoadingGif} id="pageLoading" />
            <style jsx>{`
                 div {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                } 
            `}
            </style>
        </div>
    )
}

export default InitialLoader