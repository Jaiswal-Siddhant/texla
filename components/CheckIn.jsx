import {
	Box,
	Button,
	ChevronRightIcon,
	HStack,
	Image,
	Text,
	VStack,
} from 'native-base';
import React from 'react';
import { ToastAndroid } from 'react-native';

const CheckIn = () => {
	return (
		<Box alignItems='center'>
			<Box w='85%' h={20} mt='7' rounded='2xl' bgColor='#e9f8ff' p='3'>
				<HStack alignItems='center' height='100%' ml='2' flex='7'>
					<Image size='8' source={require('../assets/clock.png')} />
					<VStack ml='3' flex='4'>
						<Text fontSize='12'>03/01/2023</Text>
						<Text fontSize='12'>Clock In-hh:mm AM</Text>
						<Text fontSize='12'>Clock Out-hh:mm PM</Text>
					</VStack>
					<Button
						flex='1.8'
						rounded='8'
						ml='3'
						justifyContent='center'
						style={{ height: 35 }}
						onPress={() => {
							ToastAndroid.show('Clocked in', ToastAndroid.SHORT);
						}}
						alignItems='center'>
						<Text color='#fff' fontSize={13}>
							Clock In
						</Text>
					</Button>
					<ChevronRightIcon
						name='chevron-right'
						size='5'
						flex='1.2'
						color='gray.400'
						ml='2'
					/>
				</HStack>
			</Box>
		</Box>
	);
};

export default CheckIn;
