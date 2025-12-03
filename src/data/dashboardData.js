const quickActionsTh = [
  { id: 'mtConnect', labelKey: 'mtConnect', label: 'เชื่อม MT4/MT5', icon: 'link', background: ['#46e0a0', '#0c7251'], panel: 'mtConnect' },
  { id: 'pushCenter', labelKey: 'pushCenter', label: 'เปิดแจ้งเตือน', icon: 'notifications', background: ['#e7c74a', '#c47b00'], panel: 'pushCenter' },
  { id: 'mission', labelKey: 'mission', label: 'Mission เรียนรู้', icon: 'trophy', background: ['#4da4ff', '#004b9a'], detail: 'hubMission' },
  { id: 'copyTrade', labelKey: 'copyTrade', label: 'Copy Trade', icon: 'people', background: ['#7aa0ff', '#153b9f'], detail: 'copyLab' }
];

const quickActionsEn = [
  { ...quickActionsTh[0], label: 'Link MT4/MT5' },
  { ...quickActionsTh[1], label: 'Enable Alerts' },
  { ...quickActionsTh[2], label: 'Learning Mission' },
  { ...quickActionsTh[3], label: 'Copy Trade' }
];

const positions = [
  { symbol: 'XAUUSD', type: 'BUY', pnl: '+$1,264', size: '1.20', risk: 'Low', entry: '1912.20', tp: '1918.00', sl: '1905.00' },
  { symbol: 'NAS100', type: 'SELL', pnl: '-$240', size: '0.80', risk: 'Medium', entry: '15123.50', tp: '15020.00', sl: '15210.00' }
];

const watchlistTh = [
  { symbol: 'BTCUSD', price: '36,420', change: '+4.2%' },
  { symbol: 'EURUSD', price: '1.08670', change: '-0.3%' },
  { symbol: 'USOil', price: '76.21', change: '+1.5%' }
];

const watchlistEn = watchlistTh;

const learningTh = [
  { title: 'Roadmap สู่ Pro Trader', minutes: '8 นาที', level: 'Advance' },
  { title: 'กลยุทธ์ News Breakout', minutes: '5 นาที', level: 'Intermediate' }
];

const learningEn = [
  { title: 'Roadmap to Pro Trader', minutes: '8 min', level: 'Advance' },
  { title: 'News Breakout Strategy', minutes: '5 min', level: 'Intermediate' }
];

const campaignsTh = [
  { title: 'FISG Prop Challenge', description: 'โตพอร์ต $100K ภายใน 30 วัน', cta: 'Join Challenge' },
  { title: 'Rebate สูงสุด 25%', description: 'คืนค่าคอมมิชชั่นทุกล็อต', cta: 'Activate' }
];

const campaignsEn = [
  { title: 'FISG Prop Challenge', description: 'Grow $100K account in 30 days', cta: 'Join Challenge' },
  { title: 'Rebate up to 25%', description: 'Cashback on every lot', cta: 'Activate' }
];

const tradingSignalsTh = [
  { pair: 'GBPJPY', direction: 'SELL', confidence: 92, price: '182.340', expires: 'ภายใน 1 ชม.' },
  { pair: 'ETHUSD', direction: 'BUY', confidence: 87, price: '2,048', expires: 'ภายใน 4 ชม.' }
];

const tradingSignalsEn = [
  { pair: 'GBPJPY', direction: 'SELL', confidence: 92, price: '182.340', expires: 'in 1 hr' },
  { pair: 'ETHUSD', direction: 'BUY', confidence: 87, price: '2,048', expires: 'in 4 hrs' }
];

const copyBotsTh = [
  { name: 'Quantum Alpha', returns: '+12.4% / สัปดาห์', risk: 'ต่ำ', followers: '1.2K ผู้ติดตาม', palette: ['#1f2a44', '#0e1529'] },
  { name: 'Index Sniper', returns: '+8.3% / สัปดาห์', risk: 'กลาง', followers: '845 ผู้ติดตาม', palette: ['#1a2a1d', '#0e1d12'] }
];

const copyBotsEn = [
  { name: 'Quantum Alpha', returns: '+12.4% / week', risk: 'Low', followers: '1.2K followers', palette: ['#1f2a44', '#0e1529'] },
  { name: 'Index Sniper', returns: '+8.3% / week', risk: 'Medium', followers: '845 followers', palette: ['#1a2a1d', '#0e1d12'] }
];

const calendarEventsTh = [
  { title: 'FOMC Minutes', time: 'คืนนี้ 01:00 น.', impact: 'สูง', currency: 'USD' },
  { title: 'EU CPI Flash', time: 'พรุ่งนี้ 16:00 น.', impact: 'กลาง', currency: 'EUR' }
];

const calendarEventsEn = [
  { title: 'FOMC Minutes', time: 'Tonight 01:00', impact: 'High', currency: 'USD' },
  { title: 'EU CPI Flash', time: 'Tomorrow 16:00', impact: 'Medium', currency: 'EUR' }
];

const alertsTh = [
  { id: 'margin', title: 'Margin Health 82%', description: 'สถานะพอร์ตแข็งแรงพร้อมเทรดเพิ่ม', tone: 'positive' },
  { id: 'cpi', title: 'US CPI ภายใน 18 ชม.', description: 'เตรียมลดเลเวอเรจหรือป้องกันความเสี่ยง', tone: 'warning' }
];

const alertsEn = [
  { id: 'margin', title: 'Margin Health 82%', description: 'Portfolio looks healthy for more trades', tone: 'positive' },
  { id: 'cpi', title: 'US CPI in 18 hrs', description: 'Consider reducing leverage or hedging', tone: 'warning' }
];

const insightsPostsTh = [
  { title: 'AI Portfolio ชนะ S&P500 +4.5%', tag: 'Quant Lab', time: '5 นาทีที่แล้ว', summary: 'โมเดลเน้นพลังงานสะอาดและหุ้น AI mid-cap' },
  { title: 'ทองคำยังเป็น Safe Haven?', tag: 'Macro Watch', time: '20 นาทีที่แล้ว', summary: 'ค่าเงินดอลลาร์อ่อนลงเปิดโอกาสขาขึ้นรอบใหม่' }
];

const insightsPostsEn = [
  { title: 'AI Portfolio beats S&P500 +4.5%', tag: 'Quant Lab', time: '5 min ago', summary: 'Model favors clean energy and AI mid-caps' },
  { title: 'Is Gold still a Safe Haven?', tag: 'Macro Watch', time: '20 min ago', summary: 'Weaker USD opens a new upside window' }
];

const walletCardsTh = [
  { id: 'mt4', title: 'MT4 External Account', balance: 'อ่านสถานะพอร์ตแบบเชื่อมต่อ', sub: 'จัดการคำสั่งบน MT4/MT5 โดยตรง' },
  { id: 'demo', title: 'Demo & Model Lab', balance: 'ฝึกและทดลองแผน', sub: 'ภารกิจ + Leaderboard ภายในแอป' }
];

const walletCardsEn = [
  { id: 'mt4', title: 'MT4 External Account', balance: 'View linked portfolio status', sub: 'Execute trades directly on MT4/MT5' },
  { id: 'demo', title: 'Demo & Model Lab', balance: 'Practice and test plans', sub: 'Missions + leaderboard in-app' }
];

const paymentShortcutsTh = [
  { id: 'connect', label: 'เชื่อมบัญชี', labelKey: 'shortcutConnect', icon: 'link' },
  { id: 'alerts', label: 'แจ้งเตือน', labelKey: 'shortcutAlerts', icon: 'notifications' },
  { id: 'missions', label: 'ภารกิจ', labelKey: 'shortcutMissions', icon: 'trophy' }
];

const paymentShortcutsEn = [
  { id: 'connect', label: 'Link Account', labelKey: 'shortcutConnect', icon: 'link' },
  { id: 'alerts', label: 'Alerts', labelKey: 'shortcutAlerts', icon: 'notifications' },
  { id: 'missions', label: 'Missions', labelKey: 'shortcutMissions', icon: 'trophy' }
];

const alphaRadarTh = [
  { market: 'XAUUSD', bias: 'Bullish', strength: 82, drivers: ['Real Yield ↓', 'DXY อ่อนค่า'] },
  { market: 'NAS100', bias: 'Neutral', strength: 58, drivers: ['Earnings season', 'AI rotation'] },
  { market: 'BTCUSD', bias: 'Bullish', strength: 73, drivers: ['ETF Inflow', 'Halving play'] }
];

const alphaRadarEn = [
  { market: 'XAUUSD', bias: 'Bullish', strength: 82, drivers: ['Real yield ↓', 'DXY weakens'] },
  { market: 'NAS100', bias: 'Neutral', strength: 58, drivers: ['Earnings season', 'AI rotation'] },
  { market: 'BTCUSD', bias: 'Bullish', strength: 73, drivers: ['ETF inflow', 'Halving play'] }
];

const smartChecklistTh = [
  { title: 'อัปเดตแผนก่อนข่าว CPI', status: 'pending', description: 'ลด leverage คู่เงิน USD และตรวจ SL' },
  { title: 'Sync Copy Bot', status: 'completed', description: 'Quantum Alpha ปรับ risk ไปแล้ว' },
  { title: 'Rebalance Energy Basket', status: 'pending', description: 'เพิ่ม exposure fund 5%' }
];

const smartChecklistEn = [
  { title: 'Update plan before CPI', status: 'pending', description: 'Cut USD leverage and review SLs' },
  { title: 'Sync Copy Bot', status: 'completed', description: 'Quantum Alpha risk adjusted' },
  { title: 'Rebalance Energy Basket', status: 'pending', description: 'Increase exposure by 5%' }
];

const pick = (language, thData, enData) => (language === 'en' ? enData : thData);

export const getDashboardData = (language = 'th') => ({
  quickActions: pick(language, quickActionsTh, quickActionsEn),
  positions,
  tradingSignals: pick(language, tradingSignalsTh, tradingSignalsEn),
  copyBots: pick(language, copyBotsTh, copyBotsEn),
  calendarEvents: pick(language, calendarEventsTh, calendarEventsEn),
  alerts: pick(language, alertsTh, alertsEn),
  alphaRadar: pick(language, alphaRadarTh, alphaRadarEn),
  smartChecklist: pick(language, smartChecklistTh, smartChecklistEn),
  watchlist: pick(language, watchlistTh, watchlistEn),
  campaigns: pick(language, campaignsTh, campaignsEn),
  learning: pick(language, learningTh, learningEn),
  insightsPosts: pick(language, insightsPostsTh, insightsPostsEn)
});

export const getWalletData = (language = 'th') => ({
  walletCards: pick(language, walletCardsTh, walletCardsEn),
  paymentShortcuts: pick(language, paymentShortcutsTh, paymentShortcutsEn),
  quickActions: pick(language, quickActionsTh, quickActionsEn),
  alerts: pick(language, alertsTh, alertsEn)
});

export const getInsightsData = (language = 'th') => ({
  watchlist: pick(language, watchlistTh, watchlistEn),
  campaigns: pick(language, campaignsTh, campaignsEn),
  learning: pick(language, learningTh, learningEn),
  insightsPosts: pick(language, insightsPostsTh, insightsPostsEn)
});
