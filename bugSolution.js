// bugSolution.js
import React, { useState, useRef, useEffect } from 'react';
import { Camera, FlashMode } from 'expo-camera';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFlashModeChange = async () => {
    if(flashMode === FlashMode.torch){
      setFlashMode(FlashMode.off);
      setTimeout(() => {
        if(cameraRef.current){
          cameraRef.current.setFlashModeAsync(FlashMode.off);
        }
      }, 100);
    }else{
      setFlashMode(flashMode === FlashMode.off ? FlashMode.auto : FlashMode.torch);
    }
  };

  if (hasPermission === null) {
    return <View><Text>Requesting camera permission</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} flashMode={flashMode} ref={cameraRef}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0, marginBottom: 20 }}>
          <Button title={`Flash: ${flashMode}`} onPress={handleFlashModeChange} />
        </View>
      </Camera>
    </View>
  );
};
export default App;