import { Menu } from '@stardust-ui/react';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import template from 'url-template';
import './MenuLeftRail.css';
    
interface MenuItemType {
    key: string
    icon: () => JSX.Element
    content: string
}

type MenuLeftRailProps = {
    items: Array<MenuItemType>
    path: string
}
const MenuLeftRail: React.FC<MenuLeftRailProps> = ({ items, path }) => {

    const url = useMemo(() => template.parse(path), [path])

    return <Menu defaultActiveIndex={0}
        className='menu-left-rail'
        styles={{ flexGrow: 1 }}
        items={items!.map(item => createItem(item, url))} vertical />
}

interface Template {
    expand(parameters: any): string;
}

function createItem(item: MenuItemType, path: Template) {
    const href = path.expand({key: item.key}) as string
    return {...item, as: Link, to: href}
}

export default MenuLeftRail;