
export const mockCompanyInfo = {
    id: "INFY",
    symbol: "INFY",
    companyName: "Infosys Limited",
    exchange: "NSE",
    sector: "Information Technology",
    industry: "IT Services & Consulting",

    profile: {
        founded: 1981,
        headquarters: "Bengaluru, India",
        ceo: "Arjun Mehta",
        employees: 325000,
        website: "https://www.example.com",
        description:
            "Infosys Limited is a global technology services and consulting company providing digital transformation, cloud, and enterprise solutions to businesses worldwide."
    },

    stock: {
        currentPrice: 1845.60,
        previousClose: 1812.60,
        change: 33.00,
        changePercent: 1.82,
        marketCap: 7650000000000,
        peRatio: 26.8,
        eps: 68.80,
        dividendYield: 2.15,
        week52High: 2050,
        week52Low: 1520,
        volume: 4250000,
        averageVolume: 3800000
    },

    financials: {
        revenue: 172400,
        netProfit: 25600,
        revenueGrowth: 8.4,
        profitGrowth: 10.2,
        operatingMargin: 21.5,
        netProfitMargin: 14.85,
        returnOnEquity: 29.4,
        debtToEquity: 0.04,
        currency: "INR",
        unit: "Crores"
    },

    earningsHistory: [
        {
            quarter: "Q2 FY27",
            date: "2026-10-27",
            epsEstimate: 17.20,
            epsActual: 18.10,
            revenueEstimate: 42500,
            revenueActual: 43100
        },
        {
            quarter: "Q1 FY27",
            date: "2026-07-20",
            epsEstimate: 16.80,
            epsActual: 16.40,
            revenueEstimate: 41800,
            revenueActual: 41200
        },
        {
            quarter: "Q4 FY26",
            date: "2026-04-22",
            epsEstimate: 16.50,
            epsActual: 16.50,
            revenueEstimate: 41000,
            revenueActual: 41000
        },
        {
            quarter: "Q3 FY26",
            date: "2026-01-15",
            epsEstimate: 15.90,
            epsActual: 17.00,
            revenueEstimate: 40200,
            revenueActual: 41100
        },
        {
            quarter: "Q2 FY26",
            date: "2025-10-16",
            epsEstimate: 15.50,
            epsActual: 15.20,
            revenueEstimate: 39500,
            revenueActual: 39100
        }
    ],

    upcomingEarnings: {
        quarter: "Q3 FY27",
        reportingDate: "2027-01-14",
        reportingTime: "After Market",
        epsEstimate: 18.50,
        revenueEstimate: 44200
    },

    analystExpectations: {
        analystCoverage: 32,
        buy: 18,
        hold: 10,
        sell: 4,
        averageTargetPrice: 2020,
        highestTargetPrice: 2250,
        lowestTargetPrice: 1650
    }
};

