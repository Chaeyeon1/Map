import { Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CardContext } from '../CardList';

const CoinInfo = () => {
  const { coin, index } = useContext(CardContext);
  const [images] = useState([
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2F89ece8a5-4cb7-4f1e-9732-cefc4e88143d%2F5.png?table=block&id=8154c28d-0b07-439b-ae59-b04be0da338e&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2F76aca0db-ac99-41e4-91a4-7dc234081246%2F17.png?table=block&id=c1779c4c-fb0e-48a1-a5ae-f21ccd5fcbd4&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2Fe37bbcea-6eb8-428b-836c-1354a74e0f43%2F15.png?table=block&id=4a56cd03-8aeb-4b54-81f7-7ada2d7d14e8&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2Fbcddc3c3-ffbe-4ebd-84d2-0f9f93107b8f%2Fimage_9.png?table=block&id=b07165f1-cb1d-403b-bcfd-5bd20873bf95&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2Fb8404fda-9ec2-48b9-8699-a7302f4729cd%2Fimage_11.png?table=block&id=334253dd-b86d-4487-b658-508283e82d89&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    ' https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2F2cb6010d-a455-4707-a00b-9c43822eb09c%2Fimage_8.png?table=block&id=2bf46c88-8212-4aac-abfa-20703d648567&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
  ]);

  return (
    <Stack direction='row' justify='flex-start' align='center'>
      <Image
        borderRadius='full'
        boxSize='20px'
        src={images[index]}
        alt='My Image'
      />
      <Text
        fontFamily='Inter'
        lineHeight='1.43'
        fontWeight='semibold'
        fontSize='14px'
        color='gray.400'
      >
        {coin?.coinName}
      </Text>
    </Stack>
  );
};

export default CoinInfo;
