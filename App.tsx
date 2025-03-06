// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TutorialModel } from './src/models/TutorialModel';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/views/HomeView';
import TutorialView from './src/views/TutorialView';
import LoginView from './src/views/LoginView';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    const checkLaunchStatus = async () => {
      try {
        const isFirst = await TutorialModel.checkFirstLaunch();
        console.log('isFirst:', isFirst);
        setIsFirstLaunch(isFirst);
      } catch (error) {
        console.error('Error checking first launch status:', error);
      }
    };
    checkLaunchStatus();
  }, []);

  const completeTutorial = async () => {
    await TutorialModel.completeTutorial();
    setIsFirstLaunch(true);
  };


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstLaunch ? 'Home' : 'Tutorial'}>
        <Stack.Screen
          name="Tutorial"
          options={{ headerShown: false }}>
          {(props) => <TutorialView {...props} onComplete={completeTutorial} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
