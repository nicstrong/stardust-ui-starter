import { Flex, FlexItem, ProviderConsumer } from '@stardust-ui/react';
import React from 'react';
import Content from './Content';


interface ContentPageProps {
    title: string | React.ReactNode
    leftRail?: React.ReactNode;
    children?: React.ReactNode;
}

const ContentPage: React.FC<ContentPageProps> = (props) => {
    const { title, leftRail, children } = props

    return <ProviderConsumer
        render={({ siteVariables }) => {
            return <Flex fill>
                {(leftRail ? <LeftRail content={leftRail!} /> : null)}
                <FlexItem grow>
                    <Content title={title} children={children} />
                </FlexItem>
            </Flex>
        }} />
}


interface LeftRailProps {
    content: React.ReactNode
}
const LeftRail: React.FC<LeftRailProps> = (props) => {
    return <Flex styles={{ height: 'calc(100vh - 48px)', minWidth: '320px', maxWidth: '320px' }}>
        {props.content}
    </Flex>
}

export default ContentPage