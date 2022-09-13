const {RLEEncode, RLEDecode} = require('./index');


describe('--- RLEEncode ---', () => {
  test('valid', () => {
    expect(RLEEncode('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toEqual('A4B3C2XYZD4E3F3A6B28');
    expect(RLEEncode('AAB')).toEqual('A2B');
    expect(RLEEncode('ABC')).toEqual('ABC');
    expect(RLEEncode('AB')).toEqual('AB');
  });

  test('invalid', () => {
    expect(RLEEncode('')).toEqual('invalid string');
    expect(RLEEncode('AAAABBBCCXYZDDDDEEEFFFAAAA-AABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toEqual('invalid string');
    expect(RLEEncode('1')).toEqual('invalid string');
    expect(RLEEncode('BBB*')).toEqual('invalid string');
    expect(RLEEncode('^BBB')).toEqual('invalid string');
  });
});

describe('--- RLEDecode ---', () => {
  test('valid', () => {
    expect(RLEDecode('A4B3C2XYZD4E3F3A6B28')).toEqual('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB');
    expect(RLEDecode('A2B')).toEqual('AAB');
    expect(RLEDecode('ABC')).toEqual('ABC');
    expect(RLEDecode('AB')).toEqual('AB');
  });

  test('invalid', () => {
    expect(RLEDecode('')).toEqual('invalid string');
    expect(RLEEncode('A4B3C2(XYZD4E3F3A6B28')).toEqual('invalid string');
    expect(RLEEncode('1')).toEqual('invalid string');
    expect(RLEEncode('B3*')).toEqual('invalid string');
    expect(RLEEncode('^B3')).toEqual('invalid string');
  });
});
