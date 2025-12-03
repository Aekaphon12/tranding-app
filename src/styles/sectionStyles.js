import { StyleSheet } from 'react-native';

export const sectionStyles = StyleSheet.create({
  section: {
    marginBottom: 20
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  sectionAction: {
    color: '#46e0a0',
    fontSize: 12
  },
  sectionCard: {
    backgroundColor: '#0c1220',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12
  }
});
