import React from "react";
import { useState, useRef, useEffect } from "react";
import { Text, View,  } from "react-native";
import Title from "../../components/title/title";
import { Camera, useCameraDevice,useCameraDevices, useCameraPermission } from 'react-native-vision-camera';
 


function PhotoLogScreen() {
    // const { hasPermission, requestPermission } = useCameraPermission()
    const [cameraPermission, setCameraPermission] = useState(null);
    const device = useCameraDevice('back'); // Set the initial camera device
    const camera = useRef<Camera>(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [retakeNumber, setRetakeNumber] = useState(0);

  const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    console.log('status',status);
    
    if (status === 'granted') {
      setCameraPermission(true);
    } else if (status === 'notDetermined') {
      const permission = await Camera.requestCameraPermission();
      setCameraPermission(permission === 'authorized');
    } else {
      setCameraPermission(false);
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  if (cameraPermission === null) {
    return <Text>Checking camera permission...</Text>;
  } else if (!cameraPermission) {
    return <Text>Camera permission not granted</Text>;
  }

  if (!device) {
    return <Text>No camera device available</Text>;
  }

  // const camera = useRef<Camera>(null);
  // const camera = useRef(null);

  const takePhoto = async () => {
    try {
      if (!camera.current) {
        console.error('Camera reference not available.', camera);
        return;
      }

      const photo = await camera.current.takePhoto();
      console.log(photo);
      
      if (photo) {
        setCapturedPhoto(`file://${photo.path}`);
        setShowPreview(true);
      } else {
        console.error('Photo captured is undefined or empty.');
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  const confirmPhoto = () => {
    // User confirmed, further actions with the captured photo
    // For example, save the photo to storage, etc.
    console.log('Photo confirmed:', capturedPhoto);
    setShowPreview(false); // Hide the preview after confirmation
  };

  const retakePhoto = () => {
    // User wants to retake the photo
    setCapturedPhoto(null); // Clear the captured photo
    setShowPreview(false); // Hide the preview
  };

  const onCameraReady = (ref) => {
    // Camera component is ready, set the camera reference
    camera.current = ref;// Reference to the Camera component (e.g., obtained from ref prop)
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={true}
        ref={(ref) => onCameraReady(ref)} 
        photo={true}
        video={true}
      />
       {showPreview && capturedPhoto ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: capturedPhoto }} // Assuming the photo is a valid URI
            style={{ width: 300, height: 300, marginBottom: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button title="Retake" onPress={retakePhoto} />
            <Button title="Confirm" onPress={confirmPhoto} />
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button title="Take Photo" onPress={takePhoto} />
      </View>

      )}
      
    </View>
  );

    return null;
}

export default PhotoLogScreen;