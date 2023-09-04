import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { Slider } from '../components/Slider';
import { SliderDots } from '../components/SliderDots';
import { useTranslation } from 'react-i18next';
import { colorPalette, spacing, typography } from '../theme';
import { AppButton } from '../components/AppButton';
import { images } from '../assets';
import { routes } from '../navigation/routes';
import { SlideWrapper } from '../components/SlideWrapper';
import { useAppNavigation } from '../navigation/useAppNavigation';

const LOGO_SIZE = 100;

type SlideItem = {
  backgroundImage: ImageSourcePropType;
  text: string;
  logo: ImageSourcePropType | undefined;
};

const InitialScreen: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  
  const slides: SlideItem[] = [
    {
      backgroundImage: images.first_intro_image,
      text: t('INITIAL_SCREEN.FIRST_SLIDE_DESC'),
      logo: images.keleya_logo,
    },
    {
      backgroundImage: images.notifications_background_image,
      text: t('INITIAL_SCREEN.SECOND_SLIDE_DESC'),
      logo: undefined,
    },
    {
      backgroundImage: images.first_intro_image,
      text: t('INITIAL_SCREEN.THIRD_SLIDE_DESC'),
      logo: undefined,
    },
  ];

  const handleSignUp = () => {
    navigation.navigate(routes.SignUpScreen);
  };

  const handleLogin = () => {
    navigation.navigate(routes.SignInScreen);
  };

  return (
    <View style={styles.container}>
      <Slider onSlideChange={currentSlide => setActiveSlide(currentSlide)}>
        {slides.map((slideItem,index) => (
          <SlideWrapper key={`${index}`}>
            <Image
              style={styles.slideBackgroundImage}
              source={slideItem.backgroundImage}
            />
            <View style={styles.slideContentContainer}>
              {slideItem.logo && (
                <Image style={styles.logoImage} source={slideItem.logo} />
              )}
              <Text style={styles.slideText}>{slideItem.text}</Text>
            </View>
          </SlideWrapper>
        ))}
      </Slider>
      <View style={styles.buttonsContainer}>
        <AppButton onPress={handleSignUp} text={t('INITIAL_SCREEN.GET_STARTED')} testID='getStartedButton' />
        <AppButton onPress={handleLogin} text={t('INITIAL_SCREEN.OR_LOGIN')} type="textOnly" />
        <SliderDots totalSlides={slides.length} activeIndex={activeSlide} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.WHITE,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: spacing.l,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: spacing.xl,
  },
  slideBackgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  slideContentContainer: {
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },
  slideText: {
    textAlign: 'center',
    marginTop: spacing.s,
    color: colorPalette.GREYISH_BROWN,
    ...typography.BODY,
  },
  logoImage: {
    height: LOGO_SIZE,
    width: LOGO_SIZE,
    resizeMode: 'contain',
  },
});

export default InitialScreen;
