import {ReducerRegistry,set} from '../../../base/redux';
import {GET_MEETING} from './actionstype';

const initialstate = [];

const storename = "feature/frontend/meeting";

ReducerRegistry.register(storename,(state = initialstate,action)=>{
    switch(action.type)
    {
        case GET_MEETING:
            return action.meeting;
        default:
            return state;
    }
})