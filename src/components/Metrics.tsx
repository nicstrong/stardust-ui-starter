import { Text } from '@stardust-ui/react';
import React from 'react';
import { FaChartBar, FaChartPie } from "react-icons/fa";
import { Redirect, Route, Switch } from 'react-router';
import ContentPage from './ContentPage';
import MenuLeftRail from './MenuLeftRail';
import ReactIcon from './ReactIcon';


const items = [
    {
        key: 'by_meeting_type',
        content: 'By Meeting Type',
        icon: () => <ReactIcon ElementType={FaChartPie} />
    },
    {
        key: 'by_duratiuon',
        content: 'By Duration',
        icon: () => <ReactIcon ElementType={FaChartBar} />
    },
    {
        key: 'by_start_time',
        content: 'By Start Time',
        icon: () => <ReactIcon ElementType={FaChartBar} />
    },
    {
        key: 'by_room_count',
        content: 'By Room (Count)',
        icon: () => <ReactIcon ElementType={FaChartPie} />
    },
    {
        key: 'by_room_duratiuon',
        content: 'By Room (Duration)',
        icon: () => <ReactIcon ElementType={FaChartPie} />
    },
    {
        key: 'by_participant_count',
        content: 'By Participant Count',
        icon: () => <ReactIcon ElementType={FaChartBar} />
    }

]

const Metrics: React.FC<{}> = (props) => {
    return <ContentPage leftRail={<MenuLeftRail items={items} path='/metrics/{key}' />}
        title='Metrics'>

        <Switch>
            <Route path='/metrics/by_meeting_type' render={() => (<Text content='By Meeting Type' />)} />
            <Route path='/metrics/by_duratiuon' render={() => (<Text content='By Duration' />)} />
            <Route path='/metrics/by_start_time' render={() => (<Text content='Start Time' />)} />
            <Route path='/metrics/by_room_count' render={() => (<Text content='By Room Count' />)} />
            <Route path='/metrics/by_room_duratiuon' render={() => (<Text content='By Room Duration' />)} />
            <Route path='/metrics/by_participant_count' render={() => (<Text content='By Participant Count' />)} />
            <Route children={(<Redirect to="/metrics/by_meeting_type" />)} />
        </Switch>

    </ContentPage>
}



export default Metrics