/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/// <reference path="./profile.d.ts" />

class Profile implements ProfileInterface {
  name: string;
};

describe('Profile', () => {
  it('should have a person\'s name', () => {
    expect(true).toBe(false);
  });
});
