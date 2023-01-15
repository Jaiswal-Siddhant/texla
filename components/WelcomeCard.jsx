import { Box, HStack, Image, ScrollView, Text } from 'native-base';
import React from 'react';
import { Animated, Dimensions, useWindowDimensions } from 'react-native';
import { Dev } from '../static/data';
import { useFonts } from 'expo-font';

const WelcomeCard = () => {
	const [posX, setPosX] = React.useState(0);
	const width = Dimensions.get('window').width;
	const scrollX = new Animated.Value(0);
	const { width: windowWidth } = useWindowDimensions();
	const [fontsLoaded] = useFonts({
		GreatVibes: require('../assets/GreatVibes-Regular.ttf'),
	});
	if (!fontsLoaded) {
		return null;
	}

	return (
		<Box
			width={'100%'}
			height={260}
			mt='1'
			borderBottomRadius={30}
			backgroundColor={'#d9d9d9'}>
			<Box alignItems='center' mt='2'>
				<Text
					fontSize={35}
					fontFamily={'GreatVibes'}
					color='#ffc091'
					fontWeight={'400'}>
					Welcome
				</Text>
			</Box>
			<Box>
				<ScrollView
					horizontal={true}
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					onScroll={Animated.event([
						{
							nativeEvent: {
								contentOffset: {
									x: scrollX,
								},
							},
						},
					])}
					bounces={false}
					snapToAlignment='center'>
					{Dev.map((item, index) => {
						return (
							<Box
								height={150}
								width={130}
								alignItems={'center'}
								rounded='xl'
								marginX={30}
								justifyContent='center'
								borderWidth={1}
								borderColor={item.color}
								style={{
									backgroundColor: item.bgColor,
								}}>
								<Box alignItems={'center'}>
									<Image
										source={{
											uri: item.source,
										}}
										size={60}
										alt={item.alt}></Image>
									<Text
										color={item.fontColor}
										mt='2'
										bold
										fontWeight={'extrabold'}>
										{item.name}
									</Text>
									<Text paddingLeft={'15'}>
										{item.description}
									</Text>
								</Box>
							</Box>
						);
					})}
				</ScrollView>
			</Box>
			<HStack
				width={'40%'}
				rounded='full'
				h={2}
				mt='5'
				bgColor={'#aed0bf'}
				left={'45%'}>
				{Dev.map((img, imageIndex) => {
					const width = scrollX.interpolate({
						inputRange: [0, windowWidth],
						outputRange: [0, 65 * 3],
						extrapolate: 'clamp',
					});
					if (imageIndex === 0) {
						return (
							<Animated.View
								key={imageIndex}
								style={[
									{
										height: 8,
										width: 30,
										borderRadius: 4,
										backgroundColor: '#00ab55',
										transform: [{ translateX: width }],
									},
								]}
							/>
						);
					}
					return null;
				})}
			</HStack>
		</Box>
	);
};

export default WelcomeCard;
