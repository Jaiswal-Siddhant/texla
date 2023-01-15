import React from 'react';
import {
	Text,
	HStack,
	Center,
	VStack,
	Box,
	ScrollView,
	Image,
	TextArea,
	ZStack,
	Pressable,
} from 'native-base';
import SearchIcon from '../components/SearchIcon';
import { Announcements } from '../static/data';
import { ToastAndroid } from 'react-native';

/* Search and announcements component */
const Header = () => {
	return (
		<VStack
			style={{
				width: '100%',
				height: 230,
				backgroundColor: '#d9d9d9',
			}}>
			<Box
				style={{
					width: '100%',
				}}>
				<Center>
					<HStack marginTop={5} height={10}>
						<Box
							backgroundColor='#fff'
							width={'80%'}
							height={'100%'}
							rounded='sm'
							overflow='hidden'
							alignItems={'center'}>
							<ZStack width={'100%'}>
								<Box paddingLeft={11} marginTop={2}>
									<SearchIcon size={5}></SearchIcon>
								</Box>
								<TextArea
									width={'85%'}
									height={'10'}
									fontSize={15}
									marginLeft={8}
									backgroundColor='#fff'
									placeholder='Search'
									borderWidth={0}
									multiline={false}
								/>
							</ZStack>
						</Box>
						<Image
							source={require('../assets/speech-bubble-64.png')}
							size={7}
							alt='ChatImg'
							style={{
								marginTop: 5,
								marginLeft: 10,
							}}></Image>
					</HStack>
				</Center>
			</Box>
			<HStack justifyContent={'space-between'} margin={5}>
				<Text style={{ fontWeight: 'bold' }}>Announcements</Text>
				<Pressable>
					<Pressable
						onPress={() =>
							ToastAndroid.show(
								'View all screen',
								ToastAndroid.SHORT
							)
						}>
						<Text color={'green.500'} underline fontWeight={'bold'}>
							View All
						</Text>
					</Pressable>
				</Pressable>
			</HStack>
			<ScrollView
				horizontal
				snapToInterval={300}
				snapToAlignment='center'
				pagingEnabled>
				{Announcements.map((announcement, i) => {
					return (
						<Box
							key={i}
							style={{
								width: 300,
								height: 80,
								backgroundColor: announcement.color,
								marginStart: 15,
								padding: 10,
								borderRadius: 15,
							}}
							alignItems='center'
							justifyContent={'center'}
							padding='8'>
							<HStack alignItems={'center'}>
								<Image
									source={{
										uri: announcement.source,
									}}
									alt={announcement.alt}
									size={10}
									borderRadius={5}></Image>
								<Box paddingLeft={2}>
									<Text
										isTruncated={true}
										fontSize={14}
										width={220}
										fontWeight={'semibold'}>
										{announcement.notice}
									</Text>
									<Text
										isTruncated={true}
										color={'gray.500'}
										fontSize={14}>
										{announcement.time}
									</Text>
								</Box>
							</HStack>
						</Box>
					);
				})}
			</ScrollView>
		</VStack>
	);
};

export default Header;
