import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';
describe('HelloWorld', () => {
  const hWrapper = mount(HelloWorld);
  it('renders the correct markup', () => {
    expect(hWrapper.html()).toContain('<span class="count">0</span>');
  });
  it('has a button', () => {
    expect(hWrapper.contains('zz')).toBe(true);
  });
  it('click btn should increase', () => {
    const button = hWrapper.find('button');
    button.trigger('click');
    const count = hWrapper.vm.count;
    expect(count).toBe(1);
  });
  it('', async () => {
    await hWrapper.setData({ age: 1 });
    expect(hWrapper.vm.age).toBe(1);
  });
});
