import {ReducerRegistry,set} from '../../../base/redux';
import {GET_CONFERENCE} from './actionstype';

const initialstate = [];

const storename = "feature/frontend/conference";

ReducerRegistry.register(storename,(state = initialstate,action)=>{
    switch(action.type)
    {
        case GET_CONFERENCE:
            return action.conference;
        default:
            return state;
    }
})