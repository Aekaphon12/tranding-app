import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { dashboardStyles as styles } from '../styles/dashboardStyles';
import { sectionStyles } from '../styles/sectionStyles';
import { ProgressBar } from '../components/common/ProgressBar';
import { MetaInfo } from '../components/common/MetaInfo';
import { QuickActionGrid } from '../components/common/QuickActionGrid';

export const DashboardScreen = ({ data, onOpenPanel, onOpenDetail, copy }) => {
  const {
    quickActions,
    positions,
    tradingSignals,
    copyBots,
    calendarEvents,
    alerts,
    alphaRadar,
    smartChecklist
  } = data;

  return (
    <>
      <Hero onOpenPanel={onOpenPanel} onOpenDetail={onOpenDetail} copy={copy} />
      <QuickStats copy={copy} />
      <QuickActionGrid
        title={copy?.quickActions?.title}
        actions={quickActions}
        onOpenPanel={onOpenPanel}
        onOpenDetail={onOpenDetail}
        copy={copy}
      />
      <Portfolio />
      <Positions positions={positions} />
      <TradingSignals signals={tradingSignals} />
      <CopyTrading bots={copyBots} />
      <AlphaRadar radar={alphaRadar} copy={copy} />
      <SmartChecklist tasks={smartChecklist} copy={copy} />
      <EconomicCalendar events={calendarEvents} copy={copy} />
      <AlertsCenter alerts={alerts} copy={copy} />
    </>
  );
};

const Hero = ({ onOpenPanel, onOpenDetail, copy }) => (
  <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.hero}>
    <View>
      <Text style={styles.heroEyebrow}>{copy?.hero?.eyebrow || 'FISG Education & Alerts'}</Text>
      <Text style={styles.heroTitle}>{copy?.hero?.title || 'Learn First, Trade on MT4/MT5'}</Text>
      <Text style={styles.heroSubtitle}>{copy?.hero?.subtitle}</Text>
      <View style={styles.heroButtons}>
        <TouchableOpacity
          style={styles.heroPrimary}
          onPress={() => (onOpenDetail ? onOpenDetail('mtConnect') : onOpenPanel('mtConnect'))}
        >
          <Text style={styles.heroPrimaryText}>{copy?.hero?.primary || 'Link MT4/MT5'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heroGhost}
          onPress={() => (onOpenDetail ? onOpenDetail('demo') : onOpenPanel('demo'))}
        >
          <Text style={styles.heroGhostText}>{copy?.hero?.secondary || 'Try Demo Account'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </LinearGradient>
);

const QuickStats = ({ copy }) => (
  <View style={styles.statRow}>
    <Stat label={copy?.stats?.nav || 'NAV'} value="$128,420" />
    <Stat label={copy?.stats?.pnlToday || 'Today'} value="+$1,540" accent />
    <Stat label={copy?.stats?.buyingPower || 'Buying Power'} value="$32,000" />
  </View>
);

const Stat = ({ label, value, accent }) => (
  <View style={[styles.statCard, accent && styles.statAccent]}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const Portfolio = () => (
  <LinearGradient colors={['#1b1f33', '#090b14']} style={styles.portfolio}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>Smart Portfolio</Text>
      <Text style={sectionStyles.sectionAction}>แสดงทั้งหมด</Text>
    </View>
    <View style={styles.portfolioRow}>
      <View>
        <Text style={styles.portfolioLabel}>Exposure</Text>
        <Text style={styles.portfolioValue}>45%</Text>
      </View>
      <View>
        <Text style={styles.portfolioLabel}>Sharpe</Text>
        <Text style={styles.portfolioValue}>2.35</Text>
      </View>
      <View>
        <Text style={styles.portfolioLabel}>VAR 95%</Text>
        <Text style={styles.portfolioValue}>$2,340</Text>
      </View>
    </View>
    <View style={styles.progressBar}>
      <View style={styles.progressFill} />
    </View>
    <Text style={styles.progressLabel}>Energy Portfolio กำลังครอง 60% ของพอร์ต</Text>
  </LinearGradient>
);

const Positions = ({ positions }) => (
  <View style={sectionStyles.section}>
    <Text style={sectionStyles.sectionTitle}>Active Positions</Text>
    {positions.map((position) => (
      <View key={position.symbol} style={styles.positionCard}>
        <View style={styles.positionHeader}>
          <View>
            <Text style={styles.symbol}>{position.symbol}</Text>
            <Text style={styles.positionMeta}>{position.type} • {position.size} lots</Text>
          </View>
          <Text style={[styles.pnl, position.pnl.startsWith('+') ? styles.positive : styles.negative]}>
            {position.pnl}
          </Text>
        </View>
        <View style={styles.positionBody}>
          <MetaInfo label="Entry" value={position.entry} />
          <MetaInfo label="TP" value={position.tp} />
          <MetaInfo label="SL" value={position.sl} />
          <MetaInfo label="Risk" value={position.risk} />
        </View>
      </View>
    ))}
  </View>
);

const TradingSignals = ({ signals }) => (
  <View style={sectionStyles.section}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>AI Signal Lab</Text>
      <Text style={sectionStyles.sectionAction}>อัปเดตสด</Text>
    </View>
    {signals.map((signal) => (
      <View key={signal.pair} style={sectionStyles.sectionCard}>
        <View style={styles.signalRow}>
          <View>
            <Text style={styles.symbol}>{signal.pair}</Text>
            <Text style={styles.signalMeta}>{signal.direction} • {signal.price}</Text>
          </View>
          <View style={styles.confidenceBadge}>
            <Text style={styles.confidenceText}>{signal.confidence}%</Text>
            <Text style={styles.confidenceLabel}>confidence</Text>
          </View>
        </View>
        <Text style={styles.signalExpire}>หมดอายุ {signal.expires}</Text>
      </View>
    ))}
  </View>
);

const CopyTrading = ({ bots }) => (
  <View style={sectionStyles.section}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>Copy Trading Hub</Text>
      <Text style={sectionStyles.sectionAction}>Leaderboard</Text>
    </View>
    {bots.map((bot) => (
      <LinearGradient key={bot.name} colors={bot.palette} style={styles.botCard}>
        <View style={styles.botHeader}>
          <Text style={styles.botName}>{bot.name}</Text>
          <View style={styles.botTag}>
            <Ionicons name="shield-checkmark" color="#46e0a0" size={14} />
            <Text style={styles.botTagText}>{bot.risk}</Text>
          </View>
        </View>
        <Text style={styles.botReturn}>{bot.returns}</Text>
        <Text style={styles.botFollowers}>{bot.followers} ผู้ติดตาม</Text>
      </LinearGradient>
    ))}
  </View>
);

const AlphaRadar = ({ radar = [], copy }) => (
  <View style={sectionStyles.section}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>{copy?.alphaRadar?.title || 'Alpha Radar'} </Text>
      <Text style={sectionStyles.sectionAction}>{copy?.alphaRadar?.action || 'Highlights'}</Text>
    </View>
    {radar.map((item) => (
      <LinearGradient key={item.market} colors={['#141e30', '#0c101b']} style={styles.radarCard}>
        <View style={styles.radarHeader}>
          <Text style={styles.radarMarket}>{item.market}</Text>
          <View
            style={[
              styles.radarBadge,
              item.bias === 'Bullish' ? styles.radarBadgeBull : styles.radarBadgeNeutral
            ]}
          >
            <Text
              style={[
                styles.radarBadgeText,
                item.bias === 'Bullish' ? styles.radarBadgeTextBull : styles.radarBadgeTextNeutral
              ]}
            >
              {item.bias}
            </Text>
          </View>
        </View>
        <View style={styles.radarStrengthRow}>
          <Text style={styles.radarStrengthLabel}>Strength</Text>
          <Text style={styles.radarStrengthValue}>{item.strength}%</Text>
        </View>
        <View style={styles.radarDrivers}>
          {item.drivers.map((driver) => (
            <View key={driver} style={styles.radarDriverPill}>
              <Text style={styles.radarDriverText}>{driver}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    ))}
  </View>
);

const SmartChecklist = ({ tasks = [], copy }) => (
  <View style={sectionStyles.section}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>{copy?.smartChecklist?.title || 'Smart Checklist'}</Text>
      <Text style={sectionStyles.sectionAction}>{copy?.smartChecklist?.action || 'Today\'s Flow'}</Text>
    </View>
    {tasks.map((task) => (
      <View key={task.title} style={styles.taskCard}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <View style={[styles.taskStatus, task.status === 'completed' ? styles.taskDone : styles.taskPending]}>
            <Text style={styles.taskStatusText}>
              {task.status === 'completed'
                ? copy?.smartChecklist?.completed || 'Done'
                : copy?.smartChecklist?.pending || 'To do'}
            </Text>
          </View>
        </View>
        <Text style={styles.taskDescription}>{task.description}</Text>
      </View>
    ))}
  </View>
);

const EconomicCalendar = ({ events, copy }) => (
  <View style={sectionStyles.section}>
    <View style={sectionStyles.sectionHeader}>
      <Text style={sectionStyles.sectionTitle}>{copy?.calendar?.title || 'Economic Calendar'}</Text>
      <Text style={sectionStyles.sectionAction}>{copy?.calendar?.action || 'View all'}</Text>
    </View>
    {events.map((event) => (
      <View key={event.title} style={styles.calendarRow}>
        <View style={styles.calendarBadge}>
          <Text style={styles.calendarBadgeText}>{event.currency}</Text>
        </View>
        <View style={styles.calendarContent}>
          <Text style={styles.calendarTitle}>{event.title}</Text>
          <Text style={styles.calendarTime}>{event.time}</Text>
        </View>
        <Text style={[styles.calendarImpact, event.impact === 'สูง' ? styles.impactHigh : styles.impactMedium]}>
          {event.impact}
        </Text>
      </View>
    ))}
  </View>
);

const AlertsCenter = ({ alerts }) => (
  <View style={sectionStyles.section}>
    <Text style={sectionStyles.sectionTitle}>แจ้งเตือนสำคัญ</Text>
    {alerts.map((alert) => (
      <View key={alert.title} style={styles.alertCard}>
        <Ionicons
          name={alert.tone === 'warning' ? 'warning' : 'shield-checkmark'}
          size={20}
          color={alert.tone === 'warning' ? '#ffb347' : '#46e0a0'}
        />
        <View style={styles.alertContent}>
          <Text style={styles.alertTitle}>{alert.title}</Text>
          <Text style={styles.alertDescription}>{alert.description}</Text>
        </View>
      </View>
    ))}
  </View>
);
