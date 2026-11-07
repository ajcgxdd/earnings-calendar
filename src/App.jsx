import {Header} from "./components/header"
import { EarningsCalendar } from "./components/EarningsCalendar";
import { CompanyInfo } from "./components/companyInfo";
import { Route, Routes } from "react-router-dom";

export function App(){
  return(
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <section className="page-content">

          <Routes>
            <Route path="/" element={<EarningsCalendar />} />
            <Route path="/company/:symbol" element={<CompanyInfo />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}