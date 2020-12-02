import { helper } from '@ember/component/helper';

export default helper(function formatTime(params/*, hash*/) {
  let [s] = params;
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
});
