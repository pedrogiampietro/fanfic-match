import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NerdMatchPage, type MatchPageParams } from '../../nerds/NerdMatchPage';
import { NerdSwipePage } from '../../nerds/NerdSwipePage';
import { HomePage } from '../../views/HomePage';
import { InterestsPage } from '../../views/InterestsPage';
import { ConnectionOptions } from './ConnectionOptionPage';
import { LoginScreen } from '../../views/LoginPage';
import { MatchesPage } from '../../views/MatchesPage';
import { ProfileMatchPage } from '../../views/ProfileMatchPage';
import { MessagePage } from '../../views/MessagesPage';
import { ChatPage } from '../../views/ChatPage';

export type RootStackParamList = {
	Home: undefined;
	NerdSwipe: undefined;
	NerdMatch: MatchPageParams;
	Interests: undefined;
	ConnectionOption: undefined;
	LoginPage: undefined;
	MatchesPage: undefined;
	ProfileMatchPage: undefined;
	MessagePage: undefined;
	ChatPage: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => (
	<NavigationContainer>
		<RootStack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}
		>
			<RootStack.Screen name='Home' component={HomePage} />
			<RootStack.Screen name='NerdSwipe' component={NerdSwipePage} />
			<RootStack.Screen
				name='NerdMatch'
				component={NerdMatchPage}
				options={{ presentation: 'fullScreenModal' }}
			/>
			<RootStack.Screen name='Interests' component={InterestsPage} />
			<RootStack.Screen name='ConnectionOption' component={ConnectionOptions} />
			<RootStack.Screen name='LoginPage' component={LoginScreen} />
			<RootStack.Screen name='MatchesPage' component={MatchesPage} />
			<RootStack.Screen name='ProfileMatchPage' component={ProfileMatchPage} />
			<RootStack.Screen name='MessagePage' component={MessagePage} />
			<RootStack.Screen name='ChatPage' component={ChatPage} />
		</RootStack.Navigator>
	</NavigationContainer>
);
