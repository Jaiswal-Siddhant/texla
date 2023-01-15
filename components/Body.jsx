import { ScrollView } from 'native-base';
import React from 'react';
import Celebrations from './Celebrations';
import CheckIn from './CheckIn';
import Header from './Header';
import MyTasks from './MyTasks';
import MyTeam from './MyTeam';
import QuickLinks from './QuickLinks';
import WelcomeCard from './WelcomeCard';

const Body = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false} flex={1}>
			<Header />
			<WelcomeCard />
			<CheckIn />
			<MyTeam />
			<QuickLinks />
			<Celebrations />
			<MyTasks />
		</ScrollView>
	);
};

export default Body;
