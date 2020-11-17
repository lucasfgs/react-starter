/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { BASEURL } from '../../../../config';

import { Label } from 'components';

export default [
    {
        title: 'Pages',
        pages: [
            {
                title: 'Overview',
                href: `${BASEURL}/overview`,
                icon: HomeIcon
            },
            {
                title: 'Dashboards',
                href: `${BASEURL}/dashboards`,
                icon: DashboardIcon,
                children: [
                    {
                        title: 'Default',
                        href: `${BASEURL}/dashboards/default`
                    },
                    {
                        title: 'Analytics',
                        href: `${BASEURL}/dashboards/analytics`
                    }
                ]
            },
            {
                title: 'Management',
                href: `${BASEURL}/management`,
                icon: BarChartIcon,
                children: [
                    {
                        title: 'Customers',
                        href: `${BASEURL}/management/customers`
                    },
                    {
                        title: 'Customer Details',
                        href: `${BASEURL}/management/customers/1/summary`
                    },
                    {
                        title: 'Projects',
                        href: `${BASEURL}/management/projects`
                    },
                    {
                        title: 'Orders',
                        href: `${BASEURL}/management/orders`
                    },
                    {
                        title: 'Order Details',
                        href: `${BASEURL}/management/orders/1`
                    }
                ]
            },
            {
                title: 'Social Feed',
                href: `${BASEURL}/social-feed`,
                icon: PeopleIcon
            },
            {
                title: 'Profile',
                href: `${BASEURL}/profile`,
                icon: PersonIcon,
                children: [
                    {
                        title: 'Timeline',
                        href: `${BASEURL}/profile/1/timeline`
                    },
                    {
                        title: 'Connections',
                        href: `${BASEURL}/profile/1/connections`
                    },
                    {
                        title: 'Projects',
                        href: `${BASEURL}/profile/1/projects`
                    },
                    {
                        title: 'Reviews',
                        href: `${BASEURL}/profile/1/reviews`
                    }
                ]
            },
            {
                title: 'Project',
                href: `${BASEURL}/projects`,
                icon: FolderIcon,
                children: [
                    {
                        title: 'Browse',
                        href: `${BASEURL}/projects`
                    },
                    {
                        title: 'Create',
                        href: `${BASEURL}/projects/create`
                    },
                    {
                        title: 'Overview',
                        href: `${BASEURL}/projects/1/overview`
                    },
                    {
                        title: 'Files',
                        href: `${BASEURL}/projects/1/files`
                    },
                    {
                        title: 'Activity',
                        href: `${BASEURL}/projects/1/activity`
                    },
                    {
                        title: 'Subscribers',
                        href: `${BASEURL}/projects/1/subscribers`
                    }
                ]
            },
            {
                title: 'Invoice',
                href: `${BASEURL}/invoices/1`,
                icon: ReceiptIcon
            },
            {
                title: 'Kanban Board',
                href: `${BASEURL}/kanban-board`,
                icon: ListAltIcon
            },
            {
                title: 'Mail',
                href: `${BASEURL}/mail`,
                icon: MailIcon,
                label: () => (
                    <Label color={colors.red[500]} shape="rounded">
                        2
                    </Label>
                )
            },
            {
                title: 'Chat',
                href: `${BASEURL}/chat`,
                icon: ChatIcon,
                label: () => (
                    <Label color={colors.red[500]} shape="rounded">
                        4
                    </Label>
                )
            },
            {
                title: 'Calendar',
                href: `${BASEURL}/calendar`,
                icon: CalendarTodayIcon,
                label: () => <Label color={colors.green[500]}>New</Label>
            },
            {
                title: 'Settings',
                href: `${BASEURL}/settings`,
                icon: SettingsIcon,
                children: [
                    {
                        title: 'General',
                        href: `${BASEURL}/settings/general`
                    },
                    {
                        title: 'Subscription',
                        href: `${BASEURL}/settings/subscription`
                    },
                    {
                        title: 'Notifications',
                        href: `${BASEURL}/settings/notifications`
                    },
                    {
                        title: 'Security',
                        href: `${BASEURL}/settings/security`
                    }
                ]
            },
            {
                title: 'Authentication',
                href: `${BASEURL}/auth`,
                icon: LockOpenIcon,
                children: [
                    {
                        title: 'Login',
                        href: `${BASEURL}/auth/login`
                    },
                    {
                        title: 'Register',
                        href: `${BASEURL}/auth/register`
                    }
                ]
            },
            {
                title: 'Errors',
                href: `${BASEURL}/errors`,
                icon: ErrorIcon,
                children: [
                    {
                        title: 'Error 401',
                        href: `${BASEURL}/errors/error-401`
                    },
                    {
                        title: 'Error 404',
                        href: `${BASEURL}/errors/error-404`
                    },
                    {
                        title: 'Error 500',
                        href: `${BASEURL}/errors/error-500`
                    }
                ]
            }
        ]
    },
    {
        title: 'Support',
        pages: [
            {
                title: 'Presentation',
                href: `${BASEURL}/presentation`,
                icon: PresentToAllIcon
            },
            {
                title: 'Getting started',
                href: `${BASEURL}/getting-started`,
                icon: CodeIcon
            },
            {
                title: 'Changelog',
                href: `${BASEURL}/changelog`,
                icon: ViewModuleIcon,
                label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
            }
        ]
    }
];
