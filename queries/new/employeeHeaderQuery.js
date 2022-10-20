const EmpHeaderQuery = `{
    teams{
        data{
          attributes{
            firstName
            lastName
            resume{
              data{
                attributes{
                  name
                  url
                }
              }
            }
          }
        }
      }
    }`;

export default EmpHeaderQuery;
