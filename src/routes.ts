import { lazy } from 'react';

const Example1 = lazy(() => import('./pages/Example1'));
const Example2 = lazy(() => import('./pages/Example2'));
const Example3 = lazy(() => import('./pages/Example3'));
const Example4 = lazy(() => import('./pages/Example4'));
const Example5 = lazy(() => import('./pages/Example5'));

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
];
