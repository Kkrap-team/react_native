// import React, { useState, useEffect } from 'react';
// import { TutorialModel } from '../models/TutorialModel';
// import TutorialView from '../views/TutorialView';
// import HomeView from '../views/HomeView';
// import { Text } from 'react-native';

// const TutorialController = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkLaunchStatus = async () => {
//       try {
//         const isFirst = await TutorialModel.checkFirstLaunch();
//         console.log('isFirst:', isFirst);
//         setIsFirstLaunch(isFirst);
//       } catch (error) {
//         console.error('Error checking first launch status:', error);
//       }
//     };

//     checkLaunchStatus();
//   }, []);

//   const completeTutorial = async () => {
//     await TutorialModel.completeTutorial();
//     setIsFirstLaunch(true);
//   };


// //   if (isFirstLaunch === null) {
// //     return <Text>Loading...</Text>; // 상태 초기화 중 표시
// //   }

// //   if (!isFirstLaunch) {
// //     return <TutorialView onComplete={completeTutorial}/>;
// //   }

// //   return <HomeView />;

//     return (
//         <TutorialView onComplete={completeTutorial}/>
//     );
// };

// export default TutorialController;
