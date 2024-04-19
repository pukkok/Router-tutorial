import React from "react";

function Container ({maxWidth, children}) {
    

    return(
        <div style={{maxWidth: maxWidth+'px', margin: '0 auto'}}>
            {children}
        </div>
    )
}

export default Container

Container.defaultProps = {
    maxWidth: '1280px'
}