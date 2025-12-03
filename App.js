import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { DashboardScreen } from './src/screens/DashboardScreen';
import { HubScreen } from './src/screens/HubScreen';
import { InsightsScreen } from './src/screens/InsightsScreen';
import { WalletScreen } from './src/screens/WalletScreen';
import { DetailScreen } from './src/components/common/DetailScreen';
import { FloatingPanel } from './src/components/common/FloatingPanel';
import { BottomTabs } from './src/components/common/BottomTabs';

import { getDashboardData, getWalletData, getInsightsData } from './src/data/dashboardData';
import { getHubContent } from './src/data/hubContent';
import { panelContent } from './src/data/panelContent';
import { detailScreens } from './src/data/detailScreens';
import { bottomTabs } from './src/data/navigation';
import { baseStyles } from './src/styles/baseStyles';
import { translations } from './src/i18n/strings';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [activePanel, setActivePanel] = React.useState(null);
  const [activeDetail, setActiveDetail] = React.useState(null);
  const [language, setLanguage] = React.useState('th');

  const copy = translations[language];
  const dashboardData = React.useMemo(() => getDashboardData(language), [language]);
  const insightsData = React.useMemo(() => getInsightsData(language), [language]);
  const walletData = React.useMemo(() => getWalletData(language), [language]);
  const hubData = React.useMemo(() => getHubContent(language), [language]);

  const openPanel = (panelKey) => setActivePanel(panelKey);
  const closePanel = () => setActivePanel(null);
  const openDetail = (screenKey) => {
    setActivePanel(null);
    setActiveDetail(screenKey);
  };
  const closeDetail = () => setActiveDetail(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'hub':
        return (
          <HubScreen
            hubContent={hubData}
            onOpenPanel={openPanel}
            onOpenDetail={openDetail}
            copy={copy}
            language={language}
          />
        );
      case 'insights':
        return <InsightsScreen data={insightsData} copy={copy} language={language} />;
      case 'wallet':
        return (
          <WalletScreen
            data={walletData}
            onOpenPanel={openPanel}
            onOpenDetail={openDetail}
            copy={copy}
            language={language}
          />
        );
      default:
        return (
          <DashboardScreen
            data={dashboardData}
            onOpenPanel={openPanel}
            onOpenDetail={openDetail}
            copy={copy}
            language={language}
          />
        );
    }
  };

  const renderCurrentView = () => {
    if (activeDetail && detailScreens[activeDetail]) {
      return <DetailScreen data={detailScreens[activeDetail]} onBack={closeDetail} />;
    }
    return renderTabContent();
  };

  return (
    <SafeAreaView style={baseStyles.safe}>
      <StatusBar style="light" />
      <LinearGradient colors={['#05080f', '#000000']} style={baseStyles.background}>
        <ScrollView contentContainerStyle={baseStyles.scroll} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <Image
              source={require('./images/Logo.png')}
              style={{ width: 120, height: 32, resizeMode: 'contain' }}
            />
            <View style={{ flexDirection: 'row', backgroundColor: '#0c1220', borderRadius: 16, padding: 4, gap: 4 }}>
              {['th', 'en'].map((lang) => (
                <TouchableOpacity
                  key={lang}
                  onPress={() => setLanguage(lang)}
                  style={{
                    backgroundColor: language === lang ? '#46e0a0' : 'transparent',
                    paddingVertical: 6,
                    paddingHorizontal: 12,
                    borderRadius: 12
                  }}
                >
                  <Text style={{ color: language === lang ? '#041b12' : '#9ea9c6', fontWeight: '600' }}>
                    {lang.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          {renderCurrentView()}
        </ScrollView>
        {!activeDetail && (
          <FloatingPanel panelKey={activePanel} panelContent={panelContent} onClose={closePanel} />
        )}
        <BottomTabs
          tabs={bottomTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          copy={copy}
          language={language}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}
