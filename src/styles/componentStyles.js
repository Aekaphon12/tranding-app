import { StyleSheet } from 'react-native';

export const componentStyles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(8, 10, 20, 0.95)',
    borderRadius: 30,
    padding: 12,
    borderWidth: 1,
    borderColor: '#12192b'
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 24
  },
  navButtonActive: {
    backgroundColor: 'rgba(70, 224, 160, 0.08)'
  },
  navLabel: {
    color: '#7c859f',
    marginTop: 4,
    fontSize: 12
  },
  navLabelActive: {
    color: '#46e0a0'
  },
  panelOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 100,
    paddingHorizontal: 20
  },
  panelCard: {
    backgroundColor: '#0c1220',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 4
  },
  panelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12
  },
  panelTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
  panelSubtitle: {
    color: '#c8d4ff',
    marginTop: 6
  },
  panelClose: {
    padding: 6,
    borderRadius: 999,
    backgroundColor: '#11162a'
  },
  panelCta: {
    marginTop: 16,
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center'
  },
  panelCtaText: {
    color: '#03190f',
    fontWeight: '700'
  },
  detailWrapper: {
    flex: 1
  },
  detailBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  detailBackText: {
    color: '#46e0a0',
    marginLeft: 6,
    fontWeight: '600'
  },
  detailHero: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 16
  },
  detailTag: {
    color: '#c8d4ff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 12
  },
  detailTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginTop: 8
  },
  detailSubtitle: {
    color: '#d0d6f7',
    marginTop: 8,
    lineHeight: 20
  },
  detailMetricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  detailMetric: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    backgroundColor: '#0c1220',
    marginHorizontal: 4
  },
  detailMetricValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
  detailMetricLabel: {
    color: '#9ea9c6',
    marginTop: 4
  },
  detailCard: {
    backgroundColor: '#0c1220',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)'
  },
  detailCardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  detailCardDesc: {
    color: '#c8d4ff',
    marginTop: 6
  },
  detailCardStats: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10
  },
  detailCardStatText: {
    color: '#46e0a0',
    fontWeight: '600'
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  stepIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#11162a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  stepIndexText: {
    color: '#46e0a0',
    fontWeight: '700'
  },
  stepText: {
    color: '#fff',
    flex: 1,
    lineHeight: 20
  },
  detailCta: {
    marginTop: 4,
    backgroundColor: '#46e0a0',
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: 'center'
  },
  detailCtaText: {
    color: '#03190f',
    fontWeight: '700'
  }
});
