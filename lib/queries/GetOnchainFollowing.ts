export const onchainFollowingQuery = `
query MyQuery($identity: String!, $blockchain: EveryBlockchain!, $dappNames: [SocialDappName!]) {
  SocialFollowings(
    input: {filter: {identity: {_eq: $identity}}, blockchain: $blockchain}
  ) {
    Following {
      dappName
      followingProfileId
      followingAddress {
        addresses
        socials(input: {filter: {dappName: {_in: $dappNames}}}) {
          dappName
          profileName
        }
      }
    }
  }
}
`;

export const onchainFollowingQuery2 = `query MyQuery {
    SocialFollowings(
      input: {filter: {identity: {_eq: "0x8512B8f41a6D1f2Aa0D09ae710b705498735F265"}}, blockchain: ALL}
    ) {
      Following {
        dappName
        followingProfileId
        followingAddress {
          addresses
          socials(input: {filter: {dappName: {_in: [farcaster, lens]}}}) {
            dappName
            profileName
            profileImage
            profileHandle
          }
        }
      }
    }
  }`;
