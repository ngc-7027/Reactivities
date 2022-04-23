import React from 'react';

interface Props {
    inverted?: boolean;
    content?: string;
}

function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    
    return (
        <div className={inverted ? 'inverted ui active dimmer' : 'ui active dimmer'}>
            <div className="ui text loader">
                {content}
            </div>
        </div>
    )
}

export default LoadingComponent