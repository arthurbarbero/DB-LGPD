import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ':root': {
    ColorHeader: '#C2A7C2'
  },
  '*': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  html: {
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }]
  },
  body: {
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    minHeight: [{ unit: '%V', value: 1 }]
  },
  header: {
    backgroundColor: 'var(--color-header)',
    height: [{ unit: 'vh', value: 15 }],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: [{ unit: 'px', value: 600 }],
    padding: [{ unit: 'px', value: 7 }, { unit: 'px', value: 45 }, { unit: 'px', value: 20 }, { unit: 'px', value: 15 }],
    height: [{ unit: 'px', value: 20 }],
    borderRadius: '3px',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }]
  },
  input_pesq: {
    borderRadius: '2px',
    backgroundColor: '#fff',
    border: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0,0,0,.2)' }],
    width: [{ unit: 'px', value: 527 }],
    height: [{ unit: 'px', value: 20 }],
    fontSize: [{ unit: 'px', value: 16 }],
    marginLeft: [{ unit: 'px', value: 40 }]
  },
  '#icon_search': {
    width: [{ unit: 'px', value: 25 }],
    height: [{ unit: 'px', value: 25 }],
    backgroundColor: '#fff',
    outline: '0px'
  },
  button: {
    border: [{ unit: 'string', value: 'none' }]
  },
  '#btn-login': {
    width: [{ unit: 'px', value: 125 }],
    height: [{ unit: 'px', value: 40 }],
    backgroundColor: '#D8CEDF',
    color: '#4D4D65',
    borderRadius: '3px',
    border: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 16 }],
    marginLeft: [{ unit: 'px', value: 40 }],
    boxShadow: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }]
  },
  '#btn-cadastre-se': {
    width: [{ unit: 'px', value: 125 }],
    height: [{ unit: 'px', value: 40 }],
    backgroundColor: '#4D4D65',
    color: '#fff',
    borderRadius: '3px',
    border: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 16 }],
    boxShadow: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }]
  },
  'nav-menu': {
    display: 'flex',
    width: [{ unit: 'px', value: 350 }],
    justifyContent: 'space-around'
  },
  'nav-footer': {
    backgroundColor: '#4D4D65',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 100 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    display: 'flex',
    color: '#fff',
    marginTop: [{ unit: 'px', value: 50 }],
    'max-with 846p': {
      backgroundColor: '#4D4D65',
      width: [{ unit: '%H', value: 1 }],
      height: [{ unit: 'px', value: 100 }],
      margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
      bottom: [{ unit: 'px', value: 0 }],
      display: 'flex',
      color: '#fff',
      marginTop: [{ unit: 'px', value: 50 }]
    }
  },
  'info-footer': {
    display: 'flex',
    justifyContent: 'space-around',
    width: [{ unit: '%H', value: 0.7 }],
    alignItems: 'flex-end',
    marginBottom: [{ unit: 'px', value: 25 }],
    marginLeft: [{ unit: 'px', value: 150 }]
  },
  '#chat': {
    width: [{ unit: '%H', value: 0.1 }],
    marginTop: [{ unit: 'px', value: 30 }],
    paddingLeft: [{ unit: 'px', value: 150 }],
    // margin-left: 30px;
  },
  '#icon-footer': {
    width: [{ unit: 'px', value: 40 }],
    height: [{ unit: 'px', value: 40 }]
  },
  'flex-conteiner': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'white',
    borderRadius: '5px',
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }, { unit: 'px', value: 30 }],
    height: [{ unit: 'vh', value: 80 }],
    width: [{ unit: 'px', value: 488 }],
    margin: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 20 }, { unit: 'string', value: 'auto' }],
    boxShadow: [{ unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'px', value: 4 }, { unit: 'px', value: 1 }, { unit: 'string', value: 'black' }],
    paddingTop: [{ unit: 'px', value: 15 }]
  },
  dados: {
    display: 'flex',
    // flex-wrap: wrap;
    flexDirection: 'row',
    overflow: 'hidden',
    width: [{ unit: '%H', value: 1 }],
    justifyContent: 'space-around'
  },
  input_email: {
    width: [{ unit: '%H', value: 0.9 }],
    height: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 10 }],
    borderStyle: 'none',
    borderBottom: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#BBB5B5' }],
    fontSize: [{ unit: 'string', value: 'medium' }]
  },
  input_cadas: {
    fontSize: [{ unit: 'string', value: 'medium' }],
    width: [{ unit: '%H', value: 0.4 }],
    height: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 10 }],
    borderStyle: 'none',
    borderBottom: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#BBB5B5' }]
  },
  input_ddd: {
    fontSize: [{ unit: 'string', value: 'medium' }],
    width: [{ unit: '%H', value: 0.1 }],
    height: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 10 }],
    borderStyle: 'none',
    borderBottom: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#BBB5B5' }],
    textAlign: 'center'
  },
  '#cel': {
    fontSize: [{ unit: 'string', value: 'medium' }],
    width: [{ unit: '%H', value: 0.7 }],
    height: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 10 }],
    borderStyle: 'none',
    borderBottom: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#BBB5B5' }]
  },
  'textarea:focus': {
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    outline: '0'
  },
  'input:focus': {
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    outline: '0'
  },
  input_nasc: {
    fontSize: [{ unit: 'string', value: 'medium' }],
    height: [{ unit: 'px', value: 30 }],
    marginTop: [{ unit: 'px', value: 10 }],
    borderStyle: 'none',
    borderBottom: [{ unit: 'string', value: 'solid' }, { unit: 'px', value: 1 }, { unit: 'string', value: '#BBB5B5' }]
  },
  '#dianasc': {
    width: [{ unit: '%H', value: 0.1 }]
  },
  '#mesnasc': {
    width: [{ unit: '%H', value: 0.45 }]
  },
  '#anonasc': {
    width: [{ unit: '%H', value: 0.15 }]
  },
  '#cpf': {
    width: [{ unit: '%H', value: 0.9 }]
  },
  '#cep': {
    width: [{ unit: '%H', value: 0.45 }]
  },
  '#numeros': {
    width: [{ unit: '%H', value: 0.15 }]
  },
  '#estado': {
    width: [{ unit: '%H', value: 0.1 }]
  },
  '#btn-cadas': {
    width: [{ unit: 'px', value: 125 }],
    height: [{ unit: 'px', value: 40 }],
    backgroundColor: '#4D4D65',
    color: '#fff',
    borderRadius: '3px',
    border: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 16 }],
    boxShadow: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.25)' }]
  },
  'btn-cadas': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: [{ unit: 'px', value: 20 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 20 }, { unit: 'string', value: 'auto' }]
  }
});
