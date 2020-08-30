// @flow

import { getBackendSafeRoomName } from '../util';

/**
 * Builds and returns the room name.
 *
 * @returns {string}
 */
export default function getRoomName(): ?string {
    const path = window.location.pathname;

    // The last non-directory component of the path (name) is the room.
    let roomName = undefined;
    alert(path);
    if(path.split('/meetyx/videocalling').length > 1)
    {
    	roomName =  path.substring(path.lastIndexOf('/') + 1) || undefined;
    }
    
    alert(roomName);

    return getBackendSafeRoomName(roomName);
}
