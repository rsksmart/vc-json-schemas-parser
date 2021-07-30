import { decodeJWT } from 'did-jwt'
import { parseVerifiableCredential } from './index'
import {
  VerifiableCredentialInvalid,
  EmailVerifiableCredentialInvalid,
  EmailVerifiableCredential,
  PhoneVerifiableCredential
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

  describe('Phone Verifiable Credential', () => {
    test('errors on invalid Phone credential', () => {
      expect.assertions(1)
      const jwt = decodeJWT(EmailVerifiableCredential)
      expect(() => parseVerifiableCredential('Phone', jwt.payload)).toThrowError('Invalid Phone credential')
    })

    test('parses Phone credential', () => {
      expect.assertions(1)
      const jwt = decodeJWT(PhoneVerifiableCredential)
      expect(parseVerifiableCredential('Phone', jwt.payload.vc)).toEqual({
        'Phone': {
          text: '+5491134246919',
          prefix: {
            en: 'Phone number'
          }
        }
      })
    })
  })
})
