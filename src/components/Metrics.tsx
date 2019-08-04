import { Box, Menu, MenuProps, Text } from '@stardust-ui/react';
import React from 'react';
import { FaChartBar, FaChartPie } from "react-icons/fa";
import { IconType } from 'react-icons/lib/cjs';
import ContentPage from './ContentPage';


interface Props {
}

const iconStyles = {
    marginRight: '0.625rem'
}

const items = [
    {
        key: 'by_meeting_type',
        content: 'By Meeting Type',
        icon: () => reactIcon(FaChartPie)
    },
    {
        key: 'by_duratiuon',
        content: 'By Duration',
        icon: () => reactIcon(FaChartBar)
    },
    {
        key: 'by_start_time',
        content: 'By Start Time',
        icon: () => reactIcon(FaChartBar)
    },
    {
        key: 'by_room_count',
        content: 'By Room (Count)',
        icon: () => reactIcon(FaChartPie)
    },
    {
        key: 'by_room_duratiuon',
        content: 'By Room (Duration)',
        icon: () => reactIcon(FaChartPie)
    },
    {
        key: 'by_participant_count',
        content: 'By Participant Count',
        icon: () => reactIcon(FaChartBar)
    }

]

const Metrics: React.FC<Props> = (props) => {
    return <ContentPage leftRail={<MenuLeftRail items={items} />}
        title='Metrics'>
        <Text content='Some nice graphs' />
    </ContentPage>
}

type MenuLeftRailProps = Pick<MenuProps, 'items'> & {
}
const MenuLeftRail: React.FC<MenuLeftRailProps> = ({ items }) => {
    return <Menu defaultActiveIndex={0}
        styles={{ flexGrow: 1 }}
        items={items} vertical />
}

function reactIcon(ElementType: IconType) {
    return <Box as='span' styles={{ marginRight: '0.625rem', verticalAlign: 'middle' }}>
        <ElementType />
    </Box>
}

export default Metrics