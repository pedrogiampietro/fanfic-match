import styled, { css } from '@emotion/native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { ImpactFeedbackStyle, impactAsync } from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
	SwipeableCardStack,
	type SwipeableCardStackRef,
} from 'react-native-swipeable-card-stack';
import { GoToHomeButton } from '../shared/components/GoToHomeButton';
import { type RootStackParamList } from '../shared/components/Navigator';
import { Page } from '../shared/components/Page';
import { type NerdAction } from './NerdAction';
import { NerdCard } from './NerdCard';
import { NerdEndOfStackView } from './NerdEndOfStackView';
import { nerds } from './nerds';

export const NerdSwipePage = () => {
	const ref = useRef<SwipeableCardStackRef>(null);
	const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
	const { top } = useSafeAreaInsets();

	const onAction = useCallback((action: NerdAction) => {
		if (action === 'swipe-left') {
			ref.current?.swipe('left');
		}
		if (action === 'swipe-right') {
			ref.current?.swipe('right');
		}
		if (action === 'undo') {
			ref.current?.unswipe();
		}
	}, []);

	return (
		<Page>
			<StatusBar style='light' />
			<EndOfStackContainer>
				<NerdEndOfStackView />
			</EndOfStackContainer>
			<SwipeableCardStack
				data={nerds}
				renderCard={(props) => <NerdCard {...props} onAction={onAction} />}
				ref={ref}
				onActiveCardUpdate={({ phase, direction, currentDataItem }) => {
					if (phase === 'below-threshold' || phase === 'above-threshold') {
						impactAsync(ImpactFeedbackStyle.Light).catch(console.error);
					}
					if (
						phase === 'validated' &&
						direction === 'right' &&
						currentDataItem.hasLikedMyProfile
					) {
						navigate('NerdMatch', { nerdName: currentDataItem.name });
					}
				}}
				lockedDirections={['top', 'bottom']}
			/>
			<GoToHomeButtonContainer style={css({ top: top + 16 })}>
				<GoToHomeButton />
			</GoToHomeButtonContainer>
		</Page>
	);
};

const EndOfStackContainer = styled.View({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
});

const GoToHomeButtonContainer = styled.View({
	position: 'absolute',
	left: 16,
});