// @flow
import R from 'ramda';

const initialState = (): FanState => ({
  ableToJoin: false,
  fanName: '',
  fitMode: 'contain',
  status: 'disconnected',
  inPrivateCall: false,
  postProduction: R.startsWith('/post-production/', window.location.pathname),
  networkTest: {
    interval: null,
    timeout: null,
  },
  publisherMinimized: false,
});

const fan = (state: FanState = initialState(), action: FanAction): FanState => {
  switch (action.type) {
    case 'SET_FITMODE':
      return R.assoc('fitMode', action.fitMode, state);
    case 'SET_FAN_STATUS':
      return R.assoc('status', action.status, state);
    case 'SET_FAN_PRIVATE_CALL':
      return R.assoc('inPrivateCall', action.inPrivateCall, state);
    case 'SET_FAN_NAME':
      return R.assoc('fanName', action.fanName, state);
    case 'SET_ABLE_TO_JOIN':
      return R.assoc('ableToJoin', action.ableToJoin, state);
    case 'SET_NETWORK_TEST_INTERVAL':
      return R.assocPath(['networkTest', 'interval'], action.interval, state);
    case 'SET_NETWORK_TEST_TIMEOUT':
      return R.assocPath(['networkTest', 'timeout'], action.timeout, state);
    case 'SET_PUBLISHER_MINIMIZED':
      return R.assoc('publisherMinimized', action.minimized, state);
    default:
      return state;
  }
};

export default fan;
