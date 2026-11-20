import type { RouteDefinition } from '../router';
import { HomePage } from '../pages/HomePage';

/** The route table. To add a page: create it in src/pages and add one line here. */
export const routes: RouteDefinition[] = [{ path: '/', element: <HomePage /> }];
