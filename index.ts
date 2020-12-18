import { JWTPayload } from 'did-jwt'

function parseVerifiableCredential(schema: string, payload: JWTPayload) {
  if (!payload.credentialSubject) throw new Error('Invalid credential')
  const { credentialSubject } = payload
  switch(schema) {
    case 'Email': {
      if (!credentialSubject.emailAddress) throw new Error('Invalid Email credential')
      return {
        'Email': {
          text: credentialSubject.emailAddress,
          prefix: {
            en: 'Email address'
          }
        }
      }
    }
    default: throw new Error('Invalid schema')
  }
}

export { parseVerifiableCredential }
