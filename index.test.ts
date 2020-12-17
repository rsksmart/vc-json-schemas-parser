import { decodeJWT } from 'did-jwt'
import { parseVerifiableCredential } from './index'
import {
  VerifiableCredentialInvalid,
  EmailVerifiableCredential,
  EmailVerifiableCredentialInvalid
} from './test-cases'

describe('parser', () => {
  test('errors on invalid credential schema', () => {
    expect.assertions(1)
    const jwt = decodeJWT(EmailVerifiableCredential)
    expect(() => parseVerifiableCredential('INVALID', jwt.payload)).toThrowError('Invalid schema')
  })

  test('errors on invalid credential', () => {
    expect.assertions(1)
    const jwt = decodeJWT(VerifiableCredentialInvalid)
    expect(() => parseVerifiableCredential('Email', jwt.payload)).toThrowError('Invalid credential')
  })

  describe('Email Verifiable Credential', () => {
    test('errors on invalid Email credential', () => {
      expect.assertions(1)
      const jwt = decodeJWT(EmailVerifiableCredentialInvalid)
      expect(() => parseVerifiableCredential('Email', jwt.payload)).toThrowError('Invalid Email credential')
    })

    test('parses Email credential', () => {
      expect.assertions(1)
      const jwt = decodeJWT(EmailVerifiableCredential)
      expect(parseVerifiableCredential('Email', jwt.payload)).toEqual({
        'Email': {
          text: 'ilan@iovlabs.org',
          prefix: {
            en: 'Email address'
          }
        }
      })
    })
  })
})
