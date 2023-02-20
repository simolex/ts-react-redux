import * as TodoActionCreators from "./todo";
import * as UserActionCreators from "./user";

export default {
    ...TodoActionCreators,
    ...UserActionCreators
}

