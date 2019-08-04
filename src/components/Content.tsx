import { Flex, ICSSInJSStyle, ProviderConsumer, SiteVariablesPrepared, Text } from '@stardust-ui/react';
import React from 'react';

interface ContentProps {
    title: string | React.ReactNode
    children?: React.ReactNode
}

const contentStyles = {
    root: (v: SiteVariablesPrepared): ICSSInJSStyle => {
        return {
            height: 'calc(100vh - 48px)',
            backgroundColor: v.colors.grey[100],
            padding: '1rem 2rem',
        }
    }
}

const Content: React.FC<ContentProps> = (props) => {
    const { title, children } = props

    return <ProviderConsumer
        render={({ siteVariables }) => {
            console.log(siteVariables)
            const styles = contentStyles.root(siteVariables)

            return <Flex column fill styles={styles}>
                {typeof title === 'string' ? <Text style={{fontSize: '1.75rem', marginBottom: '1rem'}} content={title} /> : { title }}
                <Flex className='card-content' styles={{
                    backgroundColor: siteVariables.colors.white,
                    padding: '1rem 1rem',
                    borderRadius: '.3rem .3rem 0 0'
                }}>
                    {children}
                </Flex>
            </Flex >
        }}
    />
}

export default Content