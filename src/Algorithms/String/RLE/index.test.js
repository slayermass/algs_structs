const {RLEEncode, RLEDecode} = require('./index');


describe('--- RLEEncode ---', () => {
  test('valid', () => {
    expect(RLEEncode('AABBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDGH')).toEqual('A2B20C100DGH');
    expect(RLEEncode('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toEqual('A4B3C2XYZD4E3F3A6B28');
    expect(RLEEncode('AAB')).toEqual('A2B');
    expect(RLEEncode('ABB')).toEqual('AB2');
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
    expect(RLEDecode('A2B20C100DGH')).toEqual('AABBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDGH');
    expect(RLEDecode('A4B3C2XYZD4E3F3A6B28')).toEqual('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB');
    expect(RLEDecode('A2B')).toEqual('AAB');
    expect(RLEDecode('ABC')).toEqual('ABC');
    expect(RLEDecode('AB2')).toEqual('ABB');
    expect(RLEDecode('AB')).toEqual('AB');
  });

  test('invalid', () => {
    expect(RLEDecode('')).toEqual('invalid string');
    expect(RLEDecode('A4B3C2(XYZD4E3F3A6B28')).toEqual('invalid string');
    expect(RLEDecode('1')).toEqual('invalid string');
    expect(RLEDecode('B3*')).toEqual('invalid string');
    expect(RLEDecode('^B3')).toEqual('invalid string');
    expect(RLEDecode('2B3')).toEqual('invalid string');
  });
});
