const baseUrl = 'https://vc-api-dev.energyweb.org';

module.exports = {
    name: "Energy Web Foundation",
    issueCredentialConfiguration: [
        {
            id: "did:key:z6MksoRPRqnMWiivV4weRGGS9SiHXuqfJEYu95EiYtbvBxW6",
            endpoint: `${baseUrl}/v1/vc-api/credentials/issue`,
            proofType: "Ed25519Signature2018",
            options: {
                assertionMethod: "did:key:z6MksoRPRqnMWiivV4weRGGS9SiHXuqfJEYu95EiYtbvBxW6#z6MksoRPRqnMWiivV4weRGGS9SiHXuqfJEYu95EiYtbvBxW6"
            },
            credentialStatusesSupported: []
        }
    ],
    verifyCredentialConfiguration: {
        endpoint: `${baseUrl}/v1/vc-api/credentials/verify`,
        didMethodsSupported: ["did:key:"],
        linkedDataProofSuitesSupported: ["Ed25519Signature2018"],
        credentialStatusesSupported: []
    },
    verifyPresentationConfiguration: {
        endpoint: `${baseUrl}/v1/vc-api/presentations/verify`
    },
    credentials: require('../__fixtures__/credentials'),
    verifiableCredentials: require('../__fixtures__/verifiableCredentials'),
    verifiablePresentations: require('../__fixtures__/verifiablePresentations')
};
