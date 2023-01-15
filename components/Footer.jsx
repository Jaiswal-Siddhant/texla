import React from 'react';
import {
	Text,
	HStack,
	Center,
	NativeBaseProvider,
	VStack,
	Box,
	ScrollView,
	Image,
	TextArea,
	ZStack,
	Pressable,
	Icon,
	Button,
	ChevronRightIcon,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function Footer() {
	const [selected, setSelected] = React.useState(0);
	return (
		<Box bg='white' width='100%' alignSelf='center'>
			<HStack bg='#fff' alignItems='center' shadow={6}>
				<Pressable
					cursor='pointer'
					opacity={selected === 0 ? 1 : 0.5}
					py='1'
					flex={1}
					onPress={() => {
						ToastAndroid.show('Home Screen', ToastAndroid.SHORT);
						setSelected(0);
					}}>
					<Center>
						<Icon
							mb='1'
							as={
								<MaterialCommunityIcons
									name={
										selected === 0 ? 'home' : 'home-outline'
									}
								/>
							}
							color='#00ab55'
							size='xl'
						/>
						<Text
							color={selected == 0 ? '#00ab55' : 'gray.600'}
							fontSize='12'>
							Home
						</Text>
					</Center>
				</Pressable>
				<Pressable
					cursor='pointer'
					opacity={selected === 1 ? 1 : 0.5}
					py='1'
					flex={1}
					onPress={() => {
						ToastAndroid.show('MY Space', ToastAndroid.SHORT);
						setSelected(1);
					}}>
					<Center>
						<Icon
							mb='1'
							as={
								<Image
									source={require('../assets/myIcon.png')}
								/>
							}
							color='#00ab55'
							size='3xl'
						/>
						<Text
							color={selected == 1 ? '#00ab55' : 'gray.600'}
							fontSize='14'>
							My Space
						</Text>
					</Center>
				</Pressable>
				<Pressable
					cursor='pointer'
					opacity={selected === 2 ? 1 : 0.5}
					py='1'
					flex={1}
					onPress={() => {
						ToastAndroid.show(
							'Notifications Screen',
							ToastAndroid.SHORT
						);
						setSelected(2);
					}}>
					<Center>
						<Icon
							mb='1'
							as={
								<MaterialCommunityIcons
									name={
										selected === 2 ? 'bell' : 'bell-outline'
									}
								/>
							}
							color='#00ab55'
							size='xl'
						/>
						<Text
							color={selected == 2 ? '#00ab55' : 'gray.600'}
							fontSize='14'>
							Notifications
						</Text>
					</Center>
				</Pressable>
			</HStack>
		</Box>
	);
}
export default Footer;
