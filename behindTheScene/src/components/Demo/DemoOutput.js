import React from 'react';

import DemoChild from './DemoChildren';

const DemoOutput = (props) => {
    console.log('DemoOutput Running');
    return <DemoChild>{props.show ? 'This is new!' : ''}</DemoChild>;
};

export default React.memo(DemoOutput);