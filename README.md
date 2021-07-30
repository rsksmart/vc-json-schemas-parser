<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>vc-json-schemas-parser</code></h3>
<p align="middle">
  A parser for <a href="https://github.com/rsksmart/vc-json-schemas">VC JSON Schemas</a> compliant credentials
</p>
<p align="middle">
  <a href="https://github.com/rsksmart/vc-json-schemas-parser/actions?query=workflow%3Atest">
    <img src="https://github.com/rsksmart/vc-json-schemas-parser/workflows/test/badge.svg" />
  </a>
  <a href="https://badge.fury.io/js/%40rsksmart%2Fvc-json-schemas-parser">
    <img src="https://badge.fury.io/js/%40rsksmart%2Fvc-json-schemas-parser.svg" alt="npm" />
  </a>
</p>

```
npm i did-jwt @rsksmart/vc-json-schemas-parser
```

This library can be used to parse credentials that are compatible with <a href="https://github.com/rsksmart/vc-json-schemas">Verifiable Credentials JSON Schemas</a>

## Quick start

To parse a credential that complies with a given schema

```ts
import { decodeJWT } from 'did-jwt'
import { parseVerifiableCredential } from '@rsksmart/vc-json-schemas-parser'

const emailVC = '...'
const decodedEmailVC = decodeJWT(emailVC)
const parsedEmailVC = parseVerifiableCredential('Email', decodedEmailVC.payload)
/*
{ Email:
       { text: 'ilan@iovlabs.org', prefix: { en: 'Email address' } } }
*/
```

Supports:
- Email
- Phone

## Run tests

```
npm test
```

## Build

```
npm run build
```

## Contribute

- Understand [`vc-json-schemas`](https://github.com/rsksmart/vc-json-schemas)
- Follow the [collaboration guidelines](https://developers.rsk.co/rif/identity/contribute/)
