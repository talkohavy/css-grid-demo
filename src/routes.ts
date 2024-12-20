import { lazy } from 'react';

const Example1 = lazy(() => import('./pages/Example1'));
const Example2 = lazy(() => import('./pages/Example2'));
const Example3 = lazy(() => import('./pages/Example3'));
const Example4 = lazy(() => import('./pages/Example4'));
const Example5 = lazy(() => import('./pages/Example5'));
const Example6 = lazy(() => import('./pages/Example6'));
const Example7 = lazy(() => import('./pages/Example7'));

export const routes = [
  {
    to: '/',
    text: 'Example 1',
    activeNames: ['/example-1', '/'],
    Component: Example1,
  },
  {
    to: '/example-2',
    text: 'Example 2',
    activeNames: ['/example-2'],
    Component: Example2,
  },
  {
    to: '/example-3',
    text: 'Example 3',
    activeNames: ['/example-3'],
    Component: Example3,
  },
  {
    to: '/example-4',
    text: 'Example 4',
    activeNames: ['/example-4'],
    Component: Example4,
  },
  {
    to: '/example-5',
    text: 'Example 5',
    activeNames: ['/example-5'],
    Component: Example5,
  },
  {
    to: '/example-6',
    text: 'Example 6',
    activeNames: ['/example-6'],
    Component: Example6,
  },
  {
    to: '/example-7',
    text: 'Example 7',
    activeNames: ['/example-7'],
    Component: Example7,
  },
];
