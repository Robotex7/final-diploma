import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, TrainPage, PassengersPage, PaymentPage, ConfirmationPage, ThankYouPage } from './pages';
import { Layout } from './components/layout';

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains" element={<TrainPage />} />
          <Route path="passengers" element={<PassengersPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="order" element={<ConfirmationPage />} />
          <Route path="completion" element={<ThankYouPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}