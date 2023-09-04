import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, View } from 'react-native';
import { icons, images } from '../assets';
import { AppButton } from '../components/AppButton';
import { HeaderImage } from '../components/HeaderImage';
import { colorPalette, spacing, typography } from '../theme';

const SuccessScreen: React.FC = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.wrapper}>
      <HeaderImage
        source={images.notifications_background_image}
        isBackground
      />
      <View style={styles.contentWrapper}>
        <Image style={styles.bellIcon} source={icons.bell} />
        <Text style={styles.headerText}>
          {t('SUCCESS_SCREEN.GET_NOTIFICATION_TO_BOOST')}
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.skipButtonText}>{t('COMMON.SKIP')}</Text>
          <AppButton
            onPress={() => {}}
            text={t('SUCCESS_SCREEN.ALLOW_NOTIFICATIONS')}
            type="solid"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: colorPalette.WHITE,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.xxl,
  },
  headerText: {
    textAlign: 'center',
    color: colorPalette.GREYISH_BROWN,
    ...typography.HEADING,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  bellIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: spacing.l,
  },
  skipButtonText: {
    ...typography.BODY,
    alignSelf: 'center',
    marginBottom: spacing.l,
  },
});

export default SuccessScreen;
