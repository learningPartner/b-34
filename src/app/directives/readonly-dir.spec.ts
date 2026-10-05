import { ReadonlyDir } from './readonly-dir';

describe('ReadonlyDir', () => {
  it('should create an instance', () => {
    const directive = new ReadonlyDir();
    expect(directive).toBeTruthy();
  });
});
