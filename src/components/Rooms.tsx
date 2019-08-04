import { Flex, FlexItem, ProviderConsumer } from '@stardust-ui/react';
import React from 'react';


interface Props {
}

const Rooms: React.FC<Props> = (props) => {
    return <ProviderConsumer
        render={({ siteVariables }) => {
            console.log('colors', siteVariables.colors)
            console.log('grey', siteVariables.colors.grey[100])

            return <Flex fill>
                <LeftRail />
                <FlexItem grow>
                    <Content backgroundColor={siteVariables.colors.grey[100]} />
                </FlexItem>
            </Flex>
        }} />
}

interface ContentProps {
    backgroundColor: string
}
const Content: React.FC<ContentProps> = (props) => {
    return <Flex fill styles={{ height: 'calc(100vh - 48px)', backgroundColor: props.backgroundColor }}>
    </Flex>
}
const LeftRail: React.FC<Props> = (props) => {
    return <Flex styles={{ height: 'calc(100vh - 48px)', minWidth: '320px'}}>
    </Flex>
}


export default Rooms