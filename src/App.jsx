import {Header} from "./components/header"
import { EarningsCalendar } from "./components/EarningsCalendar";

export function App(){
  return(
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <section className="page-content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">
                MARKET INTELLIGENCE / NSE
              </p>

              <h1>Earnings Calendar</h1>

              <p>
                Track upcoming results across Indian equities.
              </p>
            </div>
          </div>

          <EarningsCalendar/>
        </section>
      </main>
    </div>
  );
}