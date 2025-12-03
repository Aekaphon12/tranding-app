import { StyleSheet } from 'react-native';

export const utilityStyles = StyleSheet.create({
  bulletList: {
    marginTop: 4
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#46e0a0',
    marginTop: 6,
    marginRight: 8
  },
  bulletDotCompact: {
    width: 5,
    height: 5,
    marginTop: 6
  },
  bulletText: {
    color: '#fff',
    flex: 1,
    lineHeight: 20
  },
  bulletTextCompact: {
    color: '#c8d4ff',
    fontSize: 13,
    lineHeight: 18
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#15192a',
    borderRadius: 20,
    marginTop: 12
  },
  progressValue: {
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#46e0a0'
  },
  meta: {
    width: '50%',
    marginBottom: 8
  },
  metaLabel: {
    color: '#9ea9c6',
    fontSize: 12
  },
  metaValue: {
    color: '#fff',
    fontWeight: '600'
  }
});
