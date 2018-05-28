import { shallow } from '@vue/test-utils';
import TicTacToe from '@/components/TicTacToe.vue';

describe('TicTacToe.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallow(TicTacToe, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
