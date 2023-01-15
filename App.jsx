import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import Footer from './components/Footer';
import Body from './components/Body';

console.disableYellowBox = true;

export default function App() {
	return (
		<NativeBaseProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<Body />
				<Footer />
			</SafeAreaView>
		</NativeBaseProvider>
	);
}
