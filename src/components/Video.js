import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import  { APP_ID, SERVER_SECRET } from '../Constants';

export const Video = () => {
    const { id } = useParams();
    const roomID = id.replace(/[^a-zA-Z0-9-_]/g, '');

    let myMeeting = async (element) => {
        try {
            const appID = APP_ID;
            const serverSecret = SERVER_SECRET;
            const kitToken = await ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "RajuSingh");
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy link',
                        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        } catch (error) {
            console.error("Error joining room:", error);
        }
    };

    return (
        <div ref={myMeeting} className="myCallContainer" style={{ width: '100vw', height: '100vh' }}>
            
        </div>
    );
};




