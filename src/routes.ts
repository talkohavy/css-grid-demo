import { lazy } from 'react';

const Example1 = lazy(() => import('./pages/Example1'));

export const routes = [
  {
    to: '/',
    text: 'Example 1',
    activeNames: ['/example-1', '/'],
    Component: Example1,
  },
];
