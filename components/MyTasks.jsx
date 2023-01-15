import { Box, HStack, Link, Text, VStack } from 'native-base';
import React from 'react';
import { Tasks } from '../static/data';

const MyTasks = () => {
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
				<Text padding={4} bold fontSize={17}>
					My Tasks
				</Text>
				<VStack>
					{Tasks.map((item) => (
						<HStack
							borderColor={item.color}
							borderWidth={1}
							alignItems='center'
							style={{
								height: 70,
								marginVertical: 5,
								marginHorizontal: 15,
								borderRadius: 15,
							}}
							flex='5'>
							<Box flex='3' ml='5'>
								<Text fontSize='15'>{item.task}</Text>
							</Box>
							<Text flex='1' ml='5'>
								{item.num}
							</Text>
							<Text
								underline
								flex='1'
								color='green.600'
								fontSize={15}>
								View
							</Text>
						</HStack>
					))}
				</VStack>
			</Box>
		</Box>
	);
};

export default MyTasks;
