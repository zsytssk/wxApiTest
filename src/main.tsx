import { Box, CustomRenderer } from 'customRenderer';
import { Laya } from 'Laya';
import { layaInit } from 'layaUtils';
import React, { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <Box></Box>
        </Fragment>
    );
}

layaInit().then(() => {
    CustomRenderer.render(<App />, Laya.stage);
});
