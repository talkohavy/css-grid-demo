import { lazy } from 'react';
import { BASE_URL } from './common/constants';
import type { Route } from './common/types';
import RedirectToHome from './pages/RedirectToHome';

const Example1 = lazy(() => import('./pages/Example1'));
const Example2 = lazy(() => import('./pages/Example2'));
const Example3 = lazy(() => import('./pages/Example3'));
const Example4 = lazy(() => import('./pages/Example4'));
const Example5 = lazy(() => import('./pages/Example5'));
const Example6 = lazy(() => import('./pages/Example6'));
const Example7 = lazy(() => import('./pages/Example7'));
const Example8 = lazy(() => import('./pages/Example8'));
const Example9 = lazy(() => import('./pages/Example9'));
const Example10 = lazy(() => import('./pages/Example10'));
const Example11 = lazy(() => import('./pages/Example11'));
const Example12 = lazy(() => import('./pages/Example12'));

export const routes: Array<Route> = [
  {
    to: '/',
    hideFromSidebar: true,
    Component: RedirectToHome,
  } as Route,
  {
    to: `${BASE_URL}/`,
    text: 'Example 1',
    activeNames: ['/example-1', '/'],
    Component: Example1,
  },
  {
    to: `${BASE_URL}/example-2`,
    text: 'Example 2',
    activeNames: ['/example-2'],
    Component: Example2,
  },
  {
    to: `${BASE_URL}/example-3`,
    text: 'Example 3',
    activeNames: ['/example-3'],
    Component: Example3,
  },
  {
    to: `${BASE_URL}/example-4`,
    text: 'Example 4',
    activeNames: ['/example-4'],
    Component: Example4,
  },
  {
    to: `${BASE_URL}/example-5`,
    text: 'Example 5',
    activeNames: ['/example-5'],
    Component: Example5,
  },
  {
    to: `${BASE_URL}/example-6`,
    text: 'Example 6',
    activeNames: ['/example-6'],
    Component: Example6,
  },
  {
    to: `${BASE_URL}/example-7`,
    text: 'Example 7',
    activeNames: ['/example-7'],
    Component: Example7,
  },
  {
    to: `${BASE_URL}/example-8`,
    text: 'Example 8',
    activeNames: ['/example-8'],
    Component: Example8,
  },
  {
    to: `${BASE_URL}/example-9`,
    text: 'Example 9',
    activeNames: ['/example-9'],
    Component: Example9,
  },
  {
    to: `${BASE_URL}/example-10`,
    text: 'Example 10',
    activeNames: ['/example-10'],
    Component: Example10,
  },
  {
    to: `${BASE_URL}/example-11`,
    text: 'Example 11',
    activeNames: ['/example-11'],
    Component: Example11,
  },
  {
    to: `${BASE_URL}/example-12`,
    text: 'Example 12',
    activeNames: ['/example-12'],
    Component: Example12,
  },
];
