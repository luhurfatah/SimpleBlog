import React from 'react';

const RainbowText = (Wrapped) => {
    const Colors = ['red','green','blue','pink','black','grey'];
    const theChoosenOne = Colors[Math.floor(Math.random()*6)]
    const className =  theChoosenOne + '-text';

    return (props)=> (
        <div className={className}>
            <Wrapped {...props}/>
        </div>
    )

}

export default RainbowText