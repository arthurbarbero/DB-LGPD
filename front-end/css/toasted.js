import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#toasted-container': {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    width: [{ unit: '%H', value: 1 }],
    top: [{ unit: 'px', value: 0 }]
  },
  '#toasted': {
    display: 'none',
    width: [{ unit: 'px', value: 320 }],
    height: [{ unit: 'px', value: 40 }],
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: [{ unit: 'px', value: 10 }],
    paddingLeft: [{ unit: 'px', value: 10 }],
    borderRadius: '6px',
    color: '#fff',
    fontSize: [{ unit: 'px', value: 12 }],
    fontFamily: 'Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif',
    fontWeight: 'bolder',
    marginTop: [{ unit: 'px', value: 20 }],
    transition: 'all 0.4s ease-in'
  },
  '#toasted > img': {
    width: [{ unit: 'px', value: 10 }]
  },
  error: {
    backgroundColor: 'rgb(241, 125, 125)',
    borderLeft: [{ unit: 'px', value: 10 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'red' }]
  },
  success: {
    backgroundColor: 'rgb(94, 219, 94)',
    borderLeft: [{ unit: 'px', value: 10 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'green' }]
  }
});
