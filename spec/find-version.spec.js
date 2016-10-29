const findVersion = require('../src/find-version.js');

describe('index', () => {
  it('finds version in commit message', () => {
    expect(findVersion(null)).toBe('');
    expect(findVersion('')).toBe('');
    expect(findVersion('Inital commit')).toBe('');
    expect(findVersion('Inital commit v')).toBe('');
    expect(findVersion('Inital commit v0.1')).toBe('');
    expect(findVersion('Inital commit 0.0.1')).toBe('');
    expect(findVersion('Inital commit v0.0.1')).toBe('0.0.1');
    expect(findVersion('Inital commit v1.2.3')).toBe('1.2.3');
    expect(findVersion('Inital commit v1.2.33')).toBe('1.2.33');
    expect(findVersion('Inital commit v111.2222.33333')).toBe('111.2222.33333');
  });
});
