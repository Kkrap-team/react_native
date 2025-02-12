// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TutorialModel } from './src/models/TutorialModel';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/views/HomeView';
import TutorialView from './src/views/TutorialView';

const TutorialStack = createStackNavigator();
const MainStack = createStackNavigator();

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
      {!isFirstLaunch ? (
        <TutorialStack.Navigator>
          <TutorialStack.Screen
            name="Tutorial"
            options={{
              headerTitle: '사용방법',
              headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTitleStyle: {
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                fontFamily: 'NotoSansKR-Bold',
              },
              headerTitleAlign: 'center',
            }}
          >
            {(props) => <TutorialView {...props} onComplete={completeTutorial} />}
          </TutorialStack.Screen>

        </TutorialStack.Navigator>
      ) : (
        <MainStack.Navigator>
          <MainStack.Screen
            name="Home"
            component={HomeView}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
