import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sectionStyles } from '../styles/sectionStyles';
import { walletStyles as styles } from '../styles/walletStyles';
import { QuickActionGrid } from '../components/common/QuickActionGrid';

export const WalletScreen = ({ data, onOpenPanel, onOpenDetail, copy, language }) => {
  const { walletCards, paymentShortcuts, quickActions, alerts } = data;

  return (
    <>
      <WalletHub cards={walletCards} shortcuts={paymentShortcuts} onOpenPanel={onOpenPanel} copy={copy} />
      <QuickActionGrid
        title={copy?.quickActions?.title}
        actions={quickActions}
        onOpenPanel={onOpenPanel}
        onOpenDetail={onOpenDetail}
        copy={copy}
        language={language}
      />
      <View style={sectionStyles.section}>
        <Text style={sectionStyles.sectionTitle}>{copy?.wallet?.alerts || 'แจ้งเตือนสำคัญ'}</Text>
        {alerts.map((alert) => {
          const title = (copy?.alertsCopy && copy.alertsCopy[alert.titleKey]) || alert.title;
          const description = (copy?.alertsCopy && copy.alertsCopy[alert.descKey]) || alert.description;
          return (
            <View key={alert.id || title} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#0c1220', borderRadius: 16, padding: 14, marginBottom: 12, gap: 12 }}>
              <Ionicons
                name={alert.tone === 'warning' ? 'warning' : 'shield-checkmark'}
                size={20}
                color={alert.tone === 'warning' ? '#ffb347' : '#46e0a0'}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#fff', fontWeight: '600' }}>{title}</Text>
                <Text style={{ color: '#9ea9c6', marginTop: 4 }}>{description}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};

const WalletHub = ({ cards, shortcuts, onOpenPanel, copy }) => (
  <View style={sectionStyles.section}>
    <Text style={sectionStyles.sectionTitle}>{copy?.wallet?.title || 'บัญชีที่เชื่อมต่อ'}</Text>
    {cards.map((card) => (
      <View key={card.id || card.title} style={[styles.walletCard, { backgroundColor: '#1c2137' }]}>
        <Text style={styles.walletLabel}>
          {(copy?.walletCards && copy.walletCards[card.titleKey]) || card.title}
        </Text>
        <Text style={styles.walletBalance}>
          {(copy?.walletCards && copy.walletCards[card.balanceKey]) || card.balance}
        </Text>
        <Text style={styles.walletSub}>
          {(copy?.walletCards && copy.walletCards[card.subKey]) || card.sub}
        </Text>
      </View>
    ))}
    <Text style={[sectionStyles.sectionTitle, { marginTop: 18 }]}>{copy?.wallet?.shortcuts || 'ลัดไปยังศูนย์สำคัญ'}</Text>
    <View style={styles.shortcutsRow}>
      {shortcuts.map((shortcut) => (
        <TouchableOpacity
          key={shortcut.id || shortcut.label}
          style={styles.shortcutBtn}
          onPress={() => {
            if (shortcut.labelKey === 'shortcutConnect' || shortcut.id === 'connect') return onOpenPanel('mtConnect');
            if (shortcut.labelKey === 'shortcutAlerts' || shortcut.id === 'alerts') return onOpenPanel('pushCenter');
            return onOpenPanel('hubMission');
          }}
        >
          <Ionicons name={shortcut.icon} color="#46e0a0" size={20} />
          <Text style={styles.shortcutText}>
            {(copy?.wallet && copy.wallet[shortcut.labelKey]) || shortcut.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);
