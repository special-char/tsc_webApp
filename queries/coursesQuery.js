const CoursesQuery = `{
    courseBanner{
      id
      heading{
        title
        description
      }
      featuredCourse{
        title
        id
      }
      course{
        id
        courseImage{
          id
          url
          alternativeText
        }
        title
        titleDescription
      }
    }
    allCourse{
      id
      heading{
        id
        title
      }
      categoryButtons{
        id 
        buttonText
        link
      }
    }
    courses{
      id
      courseImage{
        id
        url
        alternativeText
      }
      title
      titleDescription
      aboutCourse{
        id
        title
        description
      }
      result{
        id 
        title
        description
      }
      price
      enroll{
        id
        buttonText
        link
      }
      courseMinimalDetails{
        id
        title
        description
      }
      curriculum{
        id
        title
        description
      }
    }
  }`;

export default CoursesQuery;
