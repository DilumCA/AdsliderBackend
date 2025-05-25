export const getStats = (req, res) => {
    res.json({
      users: 85000,
      pageViews: 42892,
      sessions: 45000,
      bounceRate: '51.4%'
    });
  };
  
  export const getEngagementData = (req, res) => {
    res.json([
      { name: "Mon", impressions: 1200, clicks: 400 },
      { name: "Tue", impressions: 1800, clicks: 900 },
      { name: "Wed", impressions: 2200, clicks: 1100 },
      { name: "Thu", impressions: 1600, clicks: 700 },
      { name: "Fri", impressions: 2000, clicks: 1000 },
      { name: "Sat", impressions: 1900, clicks: 850 },
      { name: "Sun", impressions: 1700, clicks: 770 },
    ]);
  };
  
  export const getTrafficSources = (req, res) => {
    res.json([
      { name: 'Search Engines', value: 30 },
      { name: 'Direct Click', value: 30 },
      { name: 'Bookmarks Click', value: 40 }
    ]);
  };
  