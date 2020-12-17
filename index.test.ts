import { decodeJWT } from 'did-jwt'
import { parseVerifiableCredential } from './'
import { EmailVerifiableCredential } from './test-cases'

describe('parser', () => {
  test('errors on invalid credential', () => {
    const jwt = decodeJWT(EmailVerifiableCredential)
    expect(() => parseVerifiableCredential('INVALID', jwt.payload)).toThrowError('Invalid schema')
  })
})
