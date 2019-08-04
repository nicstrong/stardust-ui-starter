import { Text } from '@stardust-ui/react';
import React from 'react';
import ContentPage from './ContentPage';


interface Props {
}

const Rooms: React.FC<Props> = (props) => {
    return <ContentPage 
        title='Rooms'>
            <Text content='Some text about the rooms'/>
        </ContentPage>
}


export default Rooms