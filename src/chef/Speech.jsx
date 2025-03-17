import React, { useEffect } from 'react';
import useSpeechToText from 'react-hook-speech-to-text';

export default function Speech({timeout ,handleIngFromSpeech}) {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  React.useEffect(()=>{
    if (results.length > 0) {
      const lastResult = results[results.length - 1].transcript;
      handleIngFromSpeech(lastResult);
    }
  },[results])
  
  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      
    </div>
  );
}