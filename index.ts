import { JWTPayload } from "did-jwt";

function parseVerifiableCredential(schema: string, payload: JWTPayload) {
  if (!payload.credentialSubject) throw new Error("Invalid credential");
  const { credentialSubject } = payload;
  switch (schema) {
    case "Email": {
      if (!credentialSubject.emailAddress)
        throw new Error("Invalid Email credential");
      return {
        Email: {
          text: credentialSubject.emailAddress,
          prefix: {
            en: "Email address",
          },
        },
      };
    }
    case "Phone": {
      if (!credentialSubject.phoneNumber)
        throw new Error("Invalid Phone credential");
      return {
        Phone: {
          text: credentialSubject.phoneNumber,
          prefix: {
            en: "Phone number",
          },
        },
      };
    }
    case "DateOfBirth": {
      if (!credentialSubject.dateOfBirth)
        throw new Error("Invalid DateOfBirth credential");
      return {
        DateOfBirth: {
          text: credentialSubject.dateOfBirth,
          prefix: {
            en: "Date of birth",
          },
        },
      };
    }
    case "BHCreditScore": {
      if (!credentialSubject.creditRating || !credentialSubject.creditLimit)
        throw new Error("Invalid BHCreditScore credential");
      return {
        BHCreditScore: {
          CreditRating: {
            text: credentialSubject.creditRating,
            prefix: {
              en: "Credit Rating",
            },
            CreditLimit: {
              text: credentialSubject.creditLimit,
              prefix: {
                en: "Credit Limit",
              },
            },
          },
        },
      };
    }
    case "Dependants": {
      if (!credentialSubject.dependants || !credentialSubject.dependantsDoB)
        throw new Error("Invalid Dependants credential");
      return {
        Dependants: {
          Dependants: {
            text: credentialSubject.dependants,
            prefix: {
              en: "Dependants",
            },
            DependantsDateOfBirth: {
              text: credentialSubject.dependantsDoB,
              prefix: {
                en: "Dependants Date of Birth",
              },
            },
          },
        },
      };
    }
    case "EmploymentStatus": {
      if (!credentialSubject.employmentStatus)
        throw new Error("Invalid EmploymentStatus credential");
      return {
        EmploymentStatus: {
          text: credentialSubject.employmentStatus,
          prefix: {
            en: "Employment status",
          },
        },
      };
    }
    case "HighestEducationAttained": {
      if (!credentialSubject.highestEducationAttained)
        throw new Error("Invalid HighestEducationAttained credential");
      return {
        HighestEducationAttained: {
          text: credentialSubject.highestEducationAttained,
          prefix: {
            en: "Highest education attained",
          },
        },
      };
    }
    case "KYCStatus": {
      if (!credentialSubject.kycStatus)
        throw new Error("Invalid KYCStatus credential");
      return {
        KYCStatus: {
          text: credentialSubject.kycStatus,
          prefix: {
            en: "KYC Status",
          },
        },
      };
    }
    case "RelationshipStatus": {
      if (!credentialSubject.relationshipStatus)
        throw new Error("Invalid RelationshipStatus credential");
      return {
        RelationshipStatus: {
          text: credentialSubject.relationshipStatus,
          prefix: {
            en: "Relationship Status",
          },
        },
      };
    }
    default:
      throw new Error("Invalid schema");
  }
}

export { parseVerifiableCredential };
