import { ComponentSlotStyle, Flex, Icon, Menu, ProviderConsumer, SegmentProps, Text, ToolbarMenuItemShorthandKinds } from "@stardust-ui/react";
import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { MdAddToQueue, MdHome, MdInsertChart, MdNetworkCheck, MdReport } from "react-icons/md";
import { Link } from 'react-router-dom';
import './AppBar.css';

export type KeyType = 'rooms' | 'software' | 'escalations' | 'metrics' | 'health' | 'settings'

interface AppBarProps {
    styles?: ComponentSlotStyle<SegmentProps, any>;
}

const items = [
    { key: 'rooms', iconElement: MdHome, title: 'Rooms' },
    { key: 'software', iconElement: MdAddToQueue, title: 'Software' },
    { key: 'escalations', iconElement: MdReport, title: 'Escalations' },
    { key: 'metrics', iconElement: MdInsertChart, title: 'Metrics' },
    { key: 'health', iconElement: MdNetworkCheck, title: 'Health' },
    { key: 'settings', iconName: 'settings', title: 'Settings' }
]

const AppBar: React.FC<AppBarProps> = (props) => {
    return <ProviderConsumer
        render={({siteVariables}) => {
            return <Flex
                className='appbar'
                styles={{
                    ...props.styles, ...{
                        backgroundColor: siteVariables.colors.brand[900],
                    }
                }}
            >
                <Menu
                    defaultActiveIndex={0}
                    vertical
                    pointing
                    fluid
                    items={items.map(item => createItem(item))}
                    variables={{ 
                        verticalBackgroundColor: siteVariables.colors.brand[900],
                        backgroundColorActive: siteVariables.colors.brand[800],
                        backgroundColorHover: siteVariables.colors.brand[800],
                        pointingIndicatorBackgroundColor: siteVariables.colors.brand[200]
                    }}
                />
            </Flex >
        }} />
}

interface ItemType {
    key: string
    iconName?: string,
    iconElement?: IconType
    title?: string
}

function createItem(item: ItemType) {
    return {
        key: item.key,
        id: item.key,
        as: Link,
        to: `/${item.key}`,
        kind: 'custom' as ToolbarMenuItemShorthandKinds,
        focusable: true,
        content: (
            item.iconName
                ? <AppBarMenuItem name={item.iconName!} title={item.title!} />
                : <AppBarMenuItem element={item.iconElement!} title={item.title!} />
        ),
    }
}

const AppBarMenuItem: React.FC<{ name?: string, title: string, element?: IconType }> = ({ name, title, element }) => {
    return <Flex column vAlign='center' hAlign="center" > 
        {name ? <Icon name={name} size='medium' xSpacing='none' color='white' /> : element!({ color: 'white', size: '24' })}
        <Text content={title} color='white' size='smaller' weight='light' styles={{ marginTop: '0.3rem' }} />
    </Flex>
}

export default AppBar