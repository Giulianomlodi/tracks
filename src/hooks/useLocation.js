import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {

  const [err, setErr] = useState(null);


  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distance: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
    startWatching();
  } else {
    if (subscriber) {
      subscriber.remove();
    }
    subscriber = null;
  }

  return () => {
    if(subscriber) {
      subscriber.remove();
    }
  };
}, [shouldTrack, callback]);

return [err]; // [convenzione generale, potrebbe essere {} o solo err]
};
