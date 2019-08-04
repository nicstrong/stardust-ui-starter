import { ComponentSlotStyle, Flex, Header, ProviderConsumer, SegmentProps } from "@stardust-ui/react";
import React from 'react';

interface AppHeaderProps {
    styles?: ComponentSlotStyle<SegmentProps, any>;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
    return <ProviderConsumer render={({ siteVariables }) => {
        return <Flex vAlign='center'
            styles={{ ...props.styles, ...{ padding: '0 2rem', backgroundColor: siteVariables.colors.brand[800], height: '48px' } }} >
            <Header as='h3' content='Stardust UI Starter' color='white' />
        </Flex>
    }} />
}


export default AppHeader
