import { Header } from "./components/header";
import { EarningsCalendar } from "./components/EarningsCalendar";
import { CompanyInfo } from "./components/companyInfo";
import { Watchlist } from "./components/Watchlist";
import { PageMessage } from "./components/PageMessage";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <section className="page-content">
          <Routes>
            <Route path="/" element={<EarningsCalendar />} />
            <Route path="/company/:symbol" element={<CompanyInfo />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route
              path="*"
              element={
                <PageMessage icon="?" title="Page not found">
                  The page you are looking for does not exist.
                </PageMessage>
              }
            />
          </Routes>
        </section>
      </main>
    </div>
  );
}
