import { Box } from '@stardust-ui/react';
import React from 'react';
import { IconType } from 'react-icons/lib/cjs';

const ReactIcon: React.FC<{ElementType: IconType}> = ({ ElementType }) => {
    return <Box as='span' styles={{ marginRight: '0.625rem', verticalAlign: 'middle' }}>
        <ElementType />
    </Box>
}

export default ReactIcon;