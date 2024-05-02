import styled from '@emotion/native';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BeeIcon } from '../shared/icons/BeeIcon';
import { BackgroundGradient } from '../shared/components/BackgroundGradient';
import { HomeButton } from '../shared/components/HomeButton';
import { type RootStackParamList } from '../shared/components/Navigator';
import { Page } from '../shared/components/Page';

export const HomePage = () => {
	const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

	return (
		<StyledPage>
			<StatusBar style='light' />
			<BackgroundGradient />
			<ButtonsContainer>
				<HomeButton
					title='Nerd example'
					subTitle='A classic Tinder-like swipe application.'
					Icon={BeeIcon}
					onPress={() => {
						navigate('NerdSwipe');
					}}
				/>
				<HomeButton
					title='Interesse example'
					subTitle='A classic Tinder-like swipe application.'
					Icon={BeeIcon}
					onPress={() => {
						navigate('Interests');
					}}
				/>
				<HomeButton
					title='Match Pages example'
					subTitle='A classic Tinder-like swipe application.'
					Icon={BeeIcon}
					onPress={() => {
						navigate('MatchesPage');
					}}
				/>
				<HomeButton
					title='Login Pages example'
					subTitle='A classic Tinder-like swipe application.'
					Icon={BeeIcon}
					onPress={() => {
						navigate('LoginPage');
					}}
				/>
				<HomeButton
					title='Message Pages example'
					subTitle='A classic Tinder-like swipe application.'
					Icon={BeeIcon}
					onPress={() => {
						navigate('MessagePage');
					}}
				/>
			</ButtonsContainer>
		</StyledPage>
	);
};

const StyledPage = styled(Page)({
	paddingHorizontal: 16,
});

const ButtonsContainer = styled(SafeAreaView)({
	paddingTop: 16,
	gap: 16,
});