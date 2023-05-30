const { deterministicPartitionKey } = require('./deterministicPartitionKey')

describe('deterministicPartitionKey', () => {
  it('should return the partition key if it exists', () => {
    const event = { partitionKey: 'testKey' }
    const result = deterministicPartitionKey(event)
    expect(result).toEqual('testKey')
  })

  it('should return a hashed partition key if the partition key does not exist', () => {
    const event = { someData: 'testData' }
    const result = deterministicPartitionKey(event)
    expect(result).toEqual(
      '1b844e9d9d9e43d6f2492b194a12246501a0ce15691b7579a294d8fa07b1cd41bdfc4eb9814c4f50ad0594fbecf4a17b9ac0b8d3f47ed2466c1b25d79c4508f3'
    )
  })

  it('should return a hashed partition key if the partition key is not a string', () => {
    const event = { partitionKey: { someData: 'testData' } }
    const result = deterministicPartitionKey(event)
    expect(result).toEqual(
      'd5c5fa5a5a5c5d5f5e25262c413d03f9587f788da748a148aa7cc0d181af3e7a2c3b9e9c3888c087bba7cc207ae5d63a4f4d4ad4ad4ad4ad4ad4ad4ad4ad4ad4a0'
    )
  })

  it('should return a trivial partition key if the candidate is too long', () => {
    const longString = 'a'.repeat(257)
    const event = { someData: longString }
    const result = deterministicPartitionKey(event)
    expect(result).toEqual(
      'c6f1b7c37b98e06b2d27f0471a9b9f81b65c12178d1c23119fde7dd30c3e3de8'
    )
  })

  it('should return the trivial partition key if the event is null', () => {
    const event = null
    const result = deterministicPartitionKey(event)
    expect(result).toEqual('0')
  })

  it('should return the trivial partition key if the event is undefined', () => {
    const event = undefined
    const result = deterministicPartitionKey(event)
    expect(result).toEqual('0')
  })

  it('should return the trivial partition key if the event has no properties', () => {
    const event = {}
    const result = deterministicPartitionKey(event)
    expect(result).toEqual('0')
  })
})
