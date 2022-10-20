const EmpCertiQurey = `{
    teams{
      data{
        attributes{
          certification{
            id
            name
            issuingOrganization
            neverExpire
            issueDate
            expireDate
            credentialID
            credentialURL
            logo{
              data{
                attributes{
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }`;
export default EmpCertiQurey;
