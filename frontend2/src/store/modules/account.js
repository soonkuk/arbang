// action type
const UPDATE_BALANCE = 'account/UPDATE_BALANCE';
const UPDATE_AUTHENTICATED = 'account/AUTHENTICATED';

// action creation function
export const updateBalance = value => (
  { type: UPDATE_BALANCE, balance: value }
);
export const authenticated = value => (
  { type: UPDATE_AUTHENTICATED, authenticated: value }
);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  authenticated: false,
  balance: 0,
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BALANCE:
      return { balance: action.balance };
    case UPDATE_AUTHENTICATED:
      return { balance: action.authenticated };
    default:
      return state;
  }
}
