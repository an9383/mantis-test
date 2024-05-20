// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ChromeOutlined } from '@ant-design/icons';
import { Children } from 'react';

// icons
const icons = {
    ChromeOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const test = {
    id: 'sample-page',
    title: "1",
    type: 'group',
    icon: icons.ChromeOutlined,
    children: [
        {
            title: '메뉴1',
            type: 'collapse',
            children: [
                {
                    id: 'test1',
                    title: '메뉴2',
                    type: 'item',
                    url: '/pages/test/test'
                },
                {
                    id: 'test2',
                    title: '메뉴3',
                    type: 'item',
                    url: '/pages/test/test2'
                }
            ]
        },
    ]
};

export default test;
