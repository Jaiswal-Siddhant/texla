import {
	Box,
	ChevronRightIcon,
	HStack,
	Image,
	Pressable,
	Text,
	VStack,
	ZStack,
} from 'native-base';
import React from 'react';
import { ToastAndroid } from 'react-native';
import { celebrationData } from '../static/data';

const Celebrations = () => {
	return (
		<Box alignItems={'center'}>
			<Box
				style={{
					elevation: 20,
					backgroundColor: 'white',
					borderRadius: 14,
					width: '95%',
					marginVertical: 10,
					paddingBottom: 10,
				}}>
				<Text bold p='5' fontSize={17}>
					Celebrations
				</Text>
				<VStack>
					{celebrationData.map((item) => (
						<Pressable
							onPress={() => {
								ToastAndroid.show(
									`Celebration Screen for ${item.name}`,
									ToastAndroid.SHORT
								);
							}}>
							<ZStack width={'100%'}>
								<HStack
									marginX={2}
									marginY='5'
									borderRadius='xl'
									alignItems={'center'}
									style={{ position: 'relative', height: 60 }}
									flex='4'
									padding={2}
									bgColor={item.bgColor}>
									<Box
										flex={2}
										justifyContent='center'
										zIndex={2}>
										<Text
											width={20}
											ml='3'
											textBreakStrategy='simple'
											fontWeight='semibold'>
											{item.reason}
										</Text>
									</Box>
									<Image
										source={{ uri: item.source }}
										zIndex='1'
										alt='avatar'
										rounded='full'
										style={{
											marginLeft: 90,
											width: 90,
											height: 90,
											position: 'absolute',
										}}></Image>
									<Text
										flex='1'
										alignItems={'center'}
										fontSize='17'
										color={item.color}
										bold>
										{item.name}
									</Text>
									<ChevronRightIcon size='15' flex='1' />
								</HStack>
							</ZStack>
						</Pressable>
					))}
				</VStack>
			</Box>
		</Box>
	);
};

export default Celebrations;
