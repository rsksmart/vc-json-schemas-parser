import { JWTPayload } from 'did-jwt'

function parseVerifiableCredential(schema: string, jwtDecoded: JWTPayload) {
  switch(schema) {
    default: throw new Error('Invalid schema')
  }
}

export { parseVerifiableCredential }
