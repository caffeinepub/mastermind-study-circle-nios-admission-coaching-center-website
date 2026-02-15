import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import NiosStreamsSubjectsPage from './pages/NiosStreamsSubjectsPage';
import AdmissionsCoachingPage from './pages/AdmissionsCoachingPage';
import AdminPage from './pages/AdminPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const visionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/vision',
  component: VisionPage,
});

const niosStreamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/nios-streams',
  component: NiosStreamsSubjectsPage,
});

const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admissions',
  component: AdmissionsCoachingPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  visionRoute,
  niosStreamsRoute,
  admissionsRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
