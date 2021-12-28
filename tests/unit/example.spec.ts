import { shallowMount } from '@vue/test-utils'
import TimerInput from '@/components/TimerInput.vue'

describe('TimerInput.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TimerInput, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
