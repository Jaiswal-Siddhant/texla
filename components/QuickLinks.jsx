import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Text } from 'native-base';
import React from 'react';

const QuickLinks = () => {
	const quickLinks = ['Holiday Calendar', 'Leave Policy', 'Payroll Manual'];
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
					height: 170,
				}}>
				<Text bold fontSize={18} marginY='5' marginLeft='4'>
					Quick Links
				</Text>
				<HStack>
					{quickLinks.map((item) => (
						<Box
							bgColor={'#def6fa'}
							alignItems='center'
							style={{
								height: 75,
								width: '27%',
								position: 'relative',
								marginHorizontal: 10,
							}}
							borderRadius='10'>
							<Text mt={2} fontSize={17} fontWeight='semibold'>
								{item}
							</Text>
							<MaterialCommunityIcons
								name='arrow-top-right'
								size={20}
								color='gray'
								style={{
									position: 'absolute',
									right: 1,
								}}></MaterialCommunityIcons>
						</Box>
					))}
				</HStack>
			</Box>
		</Box>
	);
};

export default QuickLinks;
