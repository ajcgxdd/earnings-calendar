import { mockCompanies } from "../utils/mockCompanyinfo";


export const mockEarnings = Object.values(mockCompanies).flatMap((company) => {
  const { symbol, companyName, upcomingEarnings, earningsHistory } = company;

  const upcoming = {
    id: `${symbol}-${upcomingEarnings.quarter}`,
    symbol,
    companyName,
    date: upcomingEarnings.reportingDate,
    time: upcomingEarnings.reportingTime,
    epsEstimate: upcomingEarnings.epsEstimate,
    epsActual: null,
  };

  const past = earningsHistory.map((item) => ({
    id: `${symbol}-${item.quarter}`,
    symbol,
    companyName,
    date: item.date,
    time: upcomingEarnings.reportingTime,
    epsEstimate: item.epsEstimate,
    epsActual: item.epsActual,
  }));

  return [upcoming, ...past];
});
