import { useRecoilState, atom} from 'recoil';

export const email = atom({
  key: 'formikEmail', // unique ID (with respect to other atoms/selectors)
  default: 'email@live.com', // default value (aka initial value)
});