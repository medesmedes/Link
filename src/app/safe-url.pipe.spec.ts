import { SafeUrlPipe } from './safe-url.pipe';

describe('SafeUrlPipe', () => {
  it('create an instance', () => {
    // @ts-ignore
    let pipe = new SafeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
