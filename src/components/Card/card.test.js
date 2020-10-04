import { render } from '@testing-library/react';

import Card from './Card';

const mockData = {
  name: 'MB1',
  state: 'replay',
  startDate: '2019-01-01T09:26:00.000Z',
  endDate: '2019-01-01T09:30:00.000Z',
  shareUrl: null,
  getLiveStatus: 'isPast',
  visibility: 'public',
  Tags: [
    {
      name: 'vod',
      tagType: 'category',
    },
  ],
  Challengers: [
    {
      name: 'MB2',
      pictureUrl:
        'https://d36t7dxy4sauub.cloudfront.net/teams/5bf6df21f55e8d6bea694174/logo.eb6bf635883c2ef2f9465c52ce65c420b7b7e09bd9154551-720x-1.png',
    },
    {
      name: 'HGC',
      pictureUrl:
        'https://d36t7dxy4sauub.cloudfront.net/teams/5c8373ba96093c290e66413d/logo.b703d24dee22541e785ce4409398e0a5b3a6ce905586ae88-720x-1.png',
    },
  ],
  Video: {
    poster:
      'https://onrewind.imgix.net/thumbnails/811a94fc-f027-48a6-8403-23d2c40d3c4c/default.png',
  },
};

describe('Card Component', () => {
  let expectedProps;
  beforeEach(() => {
    expectedProps = {
      ...mockData,
    };
  });

  test('should render name, poster ...', () => {
    const { getByText, getByAltText } = render(<Card event={expectedProps} />);
    const thumbnail = getByAltText('poster');
    const eventName = getByText(expectedProps.name);
    const challengerOne = getByText(expectedProps.Challengers[0].name);
    const challengerTwo = getByText(expectedProps.Challengers[1].name);
    const challengerPicOne = getByAltText('challengerOne');
    const challengerPicTwo = getByAltText('challengerTwo');

    expect(thumbnail).toBeVisible();
    expect(eventName).toBeVisible();
    expect(challengerOne).toBeVisible();
    expect(challengerTwo).toBeVisible();
    expect(challengerPicOne).toBeVisible();
    expect(challengerPicTwo).toBeVisible();
  });

  test('badge with one Tag', () => {
    const { getByText } = render(<Card event={expectedProps} />);
    const tag = getByText(`#${expectedProps.Tags[0].name}`);

    expect(tag).toBeVisible();
  });

  test('badge with multiple Tags', () => {
    expectedProps.Tags.push({
      name: 'vod1',
      tagType: 'category',
    });

    const { getByText } = render(<Card event={expectedProps} />);
    const tagOne = getByText(`#${expectedProps.Tags[0].name}`);
    const tagTwo = getByText(`#${expectedProps.Tags[1].name}`);

    expect(tagOne).toBeVisible();
    expect(tagTwo).toBeVisible();
  });
});
