import { StyleSheet } from 'react-native';

export const walletStyles = StyleSheet.create({
  walletCard: {
    borderRadius: 20,
    padding: 18,
    marginBottom: 12
  },
  walletLabel: {
    color: '#9ea9c6'
  },
  walletBalance: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 6
  },
  walletSub: {
    color: '#c8d4ff'
  },
  shortcutsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shortcutBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1f2640',
    marginHorizontal: 4
  },
  shortcutText: {
    color: '#fff',
    marginTop: 6,
    fontWeight: '600'
  }
});
