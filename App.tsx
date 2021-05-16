import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';

import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost';

import { PlantProps } from './src/libs/storage';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
      }
    );

    return () => subscription.remove();

    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    // }
    // Notifications();
  }, []);

  if (!fontsLoaded)
    return <AppLoading />


  return (
    <Routes />
  );
}
