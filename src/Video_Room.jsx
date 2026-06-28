import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Video_Room = () => {
    const {id} = useParams();


    const meeting = (element) =>{

        // generate Kit Token
      const appID = 1154740274;
      const serverSecret = "da6333bccc821f38e5ac01cb21f93335";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(),  "Avishi");

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container:element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`http://localhost:5174/${id}`
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      })


    }

  return (
    <>
    <div ref={meeting}/>
    </>
  )
}

export default Video_Room
