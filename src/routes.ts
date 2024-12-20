import { lazy } from 'react';

export const routes = Array.from(Array(10)).map((_, index) => ({
  to: index === 0 ? '/' : `/example-${index + 1}`,
  text: `Example ${index + 1}`,
  activeNames: [`/example-${index + 1}`],
  Component: lazy(() => import(`./pages/Example${index + 1}`)),
}));
