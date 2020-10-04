import gql from 'graphql-tag';

const EVENTS_LIST_QUERY = gql`
query EVENTS_LIST_QUERY($tags: String, $limit: Int) {
  allEvents(tags: $tags, limit: $limit) {
    items {
      id
      name
      description
      location
      refereeName
      state
      startDate
      endDate
      shareUrl
      getLiveStatus
      visibility
      Tags {
        name
        tagType
      }
      Streams {
        name
        url
      }
      Challengers {
        name
        pictureUrl
      }
      Video {
        poster
      }
      Challengers {
        name
        shortName
        pictureUrl
      }
    }
  }
}
`;
export default EVENTS_LIST_QUERY;
