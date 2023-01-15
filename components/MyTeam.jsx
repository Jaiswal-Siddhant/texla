import {
	Box,
	Card,
	CircleIcon,
	HStack,
	Icon,
	Image,
	Link,
	Text,
	VStack,
} from 'native-base';
import React from 'react';
import { MyTeams } from '../static/data';

const MyTeam = () => {
	return (
		<Box alignItems={'center'} mt='5'>
			<Box
				width='100%'
				shadow='2'
				style={{
					elevation: 20,
					backgroundColor: 'white',
					borderRadius: 18,
					width: '95%',
					marginVertical: 10,
					paddingBottom: 10,
				}}>
				<VStack>
					<HStack justifyContent={'space-evenly'} mt='5'>
						<Text fontSize={'15'} fontWeight={'bold'}>
							My Team
						</Text>
						<Text
							fontSize={'15'}
							underline
							fontWeight={'bold'}
							color={'#00ab55'}>
							View All
						</Text>
					</HStack>
					{MyTeams.map((item, index) => {
						return (
							<HStack
								key={index}
								pt='3'
								alignItems={'center'}
								flex={5}>
								<Image
									size={16}
									ml='3'
									source={{ uri: item.source }}
									alt='avatar'
								/>
								<Text flex={1} ml='5' bold>
									{item.name}
								</Text>
								<Text flex={1}>{item.dept}</Text>
								<CircleIcon
									flex={1}
									size='xs'
									color='green.600'
									name='circle'
									margin='4'
								/>
								<Text flex={1}>{item.status}</Text>
							</HStack>
						);
					})}
				</VStack>
			</Box>
		</Box>
	);
};

export default MyTeam;
