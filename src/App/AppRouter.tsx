import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { lazy } from 'react';

const AboutPage = lazy(() => import('pages/AboutPage'));
const DocPage = lazy(() => import('pages/DocPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ResumePage = lazy(() => import('pages/ResumePage'));
const StyleguidePage = lazy(() => import('pages/StyleguidePage'));

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/resume" element={<ResumePage />} />
        <Route path="/doc" element={<DocPage />} />
        <Route path="/styleguide" element={<StyleguidePage />} />
        <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
