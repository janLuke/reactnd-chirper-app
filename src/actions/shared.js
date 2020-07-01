import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => async (dispatch) => {
  dispatch(setAuthedUser(AUTHED_ID));
  let { users, tweets } =  await getInitialData();
  dispatch(receiveTweets(tweets));
  dispatch(receiveUsers(users));
};