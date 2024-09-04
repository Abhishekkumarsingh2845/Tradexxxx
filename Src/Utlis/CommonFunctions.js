import Toast from 'react-native-toast-message';

export const showToast = (msg = '', type = 'info') => {
  Toast.show({
    text1: msg,
    type: type,
    position: 'top',
    visibilityTime: 2000,
    topOffset: 50,
  });
};

export const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isEmpty = value => {
  if (value == '') return true;
  else return false;
};
