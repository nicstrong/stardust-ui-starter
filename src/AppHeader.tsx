import { ComponentSlotStyle, Flex, Header, SegmentProps } from "@stardust-ui/react";
import React from 'react';

interface AppHeaderProps {
    styles?: ComponentSlotStyle<SegmentProps, any>;
    backgroundColor: string
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
    return <Flex vAlign='center'
        styles={{ ...props.styles, ...{ padding: '0 2rem', backgroundColor: props.backgroundColor, height: '48px' } }} >
        <Header as='h3' content='Stardust UI Starter' color='white' />
    </Flex>

}


export default AppHeader
