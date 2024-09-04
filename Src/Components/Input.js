import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../Utlis/Color';
import ImagePaths from '../Utlis/ImagePaths';

const Input = ({
  Value,
  onChangeText,
  placeholder,
  secureTextEntry,
  isPassword,
  maxlength,
  editable = true,
}) => {
  const [hide, setHide] = useState(false);

  return (
    <View style={styles.inputViewStyle}>
      <View style={{flex: 1}}>
        <TextInput
          value={Value}
          secureTextEntry={hide}
          onChangeText={onChangeText}
          style={{marginLeft: 10}}
          placeholder={placeholder}
          placeholderTextColor={Color.gray}
          maxLength={maxlength}
          editable={editable}
        />
      </View>

      {isPassword && (
        <TouchableOpacity onPress={() => setHide(!hide)}>
          {hide ? (
            <Image source={ImagePaths.hide} style={styles.hideimage} />
          ) : (
            <Image source={ImagePaths.show} style={styles.hideimage} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hideimage: {
    height: 18,
    width: 28,
    borderRadius: 20,
    marginRight: 10,
  },
  inputViewStyle: {
    backgroundColor: Color.Secondary,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 8,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
