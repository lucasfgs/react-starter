/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';
import { BASEURL } from './config';

const routes = [
    {
        path: `${BASEURL}/`,
        exact: true,
        component: () => <Redirect to={`${BASEURL}/presentation`} />
    },
    {
        path: `${BASEURL}/auth`,
        component: AuthLayout,
        routes: [
            {
                path: `${BASEURL}/auth/login`,
                exact: true,
                component: lazy(() => import('views/Login'))
            },
            {
                path: `${BASEURL}/auth/register`,
                exact: true,
                component: lazy(() => import('views/Register'))
            },
            {
                component: () => <Redirect to={`${BASEURL}/errors/error-404`} />
            }
        ]
    },
    {
        path: `${BASEURL}/errors`,
        component: ErrorLayout,
        routes: [
            {
                path: `${BASEURL}/errors/error-401`,
                exact: true,
                component: lazy(() => import('views/Error401'))
            },
            {
                path: `${BASEURL}/errors/error-404`,
                exact: true,
                component: lazy(() => import('views/Error404'))
            },
            {
                path: `${BASEURL}/errors/error-500`,
                exact: true,
                component: lazy(() => import('views/Error500'))
            },
            {
                component: () => <Redirect to={`${BASEURL}/errors/error-404`} />
            }
        ]
    },
    {
        route: `${BASEURL}/*`,
        component: DashboardLayout,
        routes: [
            {
                path: `${BASEURL}/calendar`,
                exact: true,
                component: lazy(() => import('views/Calendar'))
            },
            {
                path: `${BASEURL}/changelog`,
                exact: true,
                component: lazy(() => import('views/Changelog'))
            },
            {
                path: `${BASEURL}/chat`,
                exact: true,
                component: lazy(() => import('views/Chat'))
            },
            {
                path: `${BASEURL}/chat/:id`,
                exact: true,
                component: lazy(() => import('views/Chat'))
            },
            {
                path: `${BASEURL}/dashboards/analytics`,
                exact: true,
                component: DashboardAnalyticsView
            },
            {
                path: `${BASEURL}/dashboards/default`,
                exact: true,
                component: DashboardDefaultView
            },
            {
                path: `${BASEURL}/invoices/:id`,
                exact: true,
                component: lazy(() => import('views/InvoiceDetails'))
            },
            {
                path: `${BASEURL}/kanban-board`,
                exact: true,
                component: lazy(() => import('views/KanbanBoard'))
            },
            {
                path: `${BASEURL}/mail`,
                exact: true,
                component: lazy(() => import('views/Mail'))
            },
            {
                path: `${BASEURL}/management/customers`,
                exact: true,
                component: lazy(() => import('views/CustomerManagementList'))
            },
            {
                path: `${BASEURL}/management/customers/:id`,
                exact: true,
                component: lazy(() => import('views/CustomerManagementDetails'))
            },
            {
                path: `${BASEURL}/management/customers/:id/:tab`,
                exact: true,
                component: lazy(() => import('views/CustomerManagementDetails'))
            },
            {
                path: `${BASEURL}/management/projects`,
                exact: true,
                component: lazy(() => import('views/ProjectManagementList'))
            },
            {
                path: `${BASEURL}/management/orders`,
                exact: true,
                component: lazy(() => import('views/OrderManagementList'))
            },
            {
                path: `${BASEURL}/management/orders/:id`,
                exact: true,
                component: lazy(() => import('views/OrderManagementDetails'))
            },
            {
                path: `${BASEURL}/overview`,
                exact: true,
                component: OverviewView
            },
            {
                path: `${BASEURL}/presentation`,
                exact: true,
                component: PresentationView
            },
            {
                path: `${BASEURL}/profile/:id`,
                exact: true,
                component: lazy(() => import('views/Profile'))
            },
            {
                path: `${BASEURL}/profile/:id/:tab`,
                exact: true,
                component: lazy(() => import('views/Profile'))
            },
            {
                path: `${BASEURL}/projects/create`,
                exact: true,
                component: lazy(() => import('views/ProjectCreate'))
            },
            {
                path: `${BASEURL}/projects/:id`,
                exact: true,
                component: lazy(() => import('views/ProjectDetails'))
            },
            {
                path: `${BASEURL}/projects/:id/:tab`,
                exact: true,
                component: lazy(() => import('views/ProjectDetails'))
            },
            {
                path: `${BASEURL}/projects`,
                exact: true,
                component: lazy(() => import('views/ProjectList'))
            },
            {
                path: `${BASEURL}/settings`,
                exact: true,
                component: lazy(() => import('views/Settings'))
            },
            {
                path: `${BASEURL}/settings/:tab`,
                exact: true,
                component: lazy(() => import('views/Settings'))
            },
            {
                path: `${BASEURL}/social-feed`,
                exact: true,
                component: lazy(() => import('views/SocialFeed'))
            },
            {
                path: `${BASEURL}/getting-started`,
                exact: true,
                component: lazy(() => import('views/GettingStarted'))
            },
            {
                component: () => <Redirect to={`${BASEURL}/errors/error-404`} />
            }
        ]
    }
];

export default routes;
