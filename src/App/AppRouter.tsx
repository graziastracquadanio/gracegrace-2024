import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const AboutPage = lazy(() => import('pages/AboutPage'));
const DocPage = lazy(() => import('pages/DocPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ResumePage = lazy(() => import('pages/ResumePage'));
const StyleguidePage = lazy(() => import('pages/StyleguidePage'));

export function AppRouter() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/resume" element={<ResumePage />} />
      <Route path="/doc" element={<DocPage />} />
      <Route path="/styleguide" element={<StyleguidePage />} />
      <Route path="/" element={<Navigate replace to="/about" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
