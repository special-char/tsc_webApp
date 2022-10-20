const EmpTechQuery = `{
    teams{
        data{
          attributes{
            technology{
              technology{
                data{
                  attributes{
                    name
                    link
                  }
                }
              }
              proficiency
            }
          }
        }
      }
}`;

export default EmpTechQuery;
