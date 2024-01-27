import { Box, Button, Input, Stack, Text, Image, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DEFAULT_URL } from '../constant';
import { useRecoilState } from 'recoil';
import { holdingsState, userInfoState } from '../atoms/info';
import { getMyHoldings } from '../api/getMyHoldings';
import { CoinData, CoinList, UserData } from '../type';

const CardList = () => {
  const [coins, setCoins] = useState<CoinData>([]);
  const [myHoldings, setMyHoldings] = useRecoilState(holdingsState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [images] = useState([
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2F89ece8a5-4cb7-4f1e-9732-cefc4e88143d%2F5.png?table=block&id=8154c28d-0b07-439b-ae59-b04be0da338e&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2F76aca0db-ac99-41e4-91a4-7dc234081246%2F17.png?table=block&id=c1779c4c-fb0e-48a1-a5ae-f21ccd5fcbd4&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2Fe37bbcea-6eb8-428b-836c-1354a74e0f43%2F15.png?table=block&id=4a56cd03-8aeb-4b54-81f7-7ada2d7d14e8&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2Fbcddc3c3-ffbe-4ebd-84d2-0f9f93107b8f%2Fimage_9.png?table=block&id=b07165f1-cb1d-403b-bcfd-5bd20873bf95&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2Fb8404fda-9ec2-48b9-8699-a7302f4729cd%2Fimage_11.png?table=block&id=334253dd-b86d-4487-b658-508283e82d89&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
    ' https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2cb6d644-e222-4941-af94-3c4bc006f7f7%2F2cb6010d-a455-4707-a00b-9c43822eb09c%2Fimage_8.png?table=block&id=2bf46c88-8212-4aac-abfa-20703d648567&spaceId=2cb6d644-e222-4941-af94-3c4bc006f7f7&width=1000&userId=045ecacb-745d-4b23-b5be-cdfd7e1ebe1d&cache=v2',
  ]);
  const [coininfo, setCoinInfo] = useState<UserData>(
    (localStorage.getItem('WAM_Localstorage') as UserData) ?? null
  );
  // const [coinsellinfo, setCoinSellInfo] = useState<UserData>(
  //   (localStorage.getItem("WAM_Localstorage") as UserData) ?? null
  // );
  const [id, setId] = useState(null);
  const [coinId, setCoinId] = useState(null);
  const [count, setCount] = useState(null);

  const getCoins = () => {
    fetch(`${DEFAULT_URL}/api/Coin/coin`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((coinData) => {
        setCoins(coinData);
      });
  };

  const coinBuy = () => {
    const body = {
      id,
      coinId,
      count,
    };

    fetch(`${DEFAULT_URL}/api/Coin/coin/buy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data);
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setId(data);
        setCoinId(null);
        setCount(null);
      });
  };

  const coinSell = () => {
    const body = {
      id,
      coinId,
      count,
    };

    fetch(`${DEFAULT_URL}/api/Coin/coin/sell`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data);
        localStorage.setItem('WAM_Localstorage', JSON.stringify(data));
        setId(data);
        setCoinId(null);
        setCount(null);
      });
  };

  useEffect(() => {
    setCoinInfo(
      localStorage?.getItem('WAM_Localstorage')
        ? JSON.parse(localStorage?.getItem('WAM_Localstorage') ?? '')
        : null
    );
    getCoins();
  }, []);

  useEffect(() => {
    setUserInfo(
      localStorage?.getItem('WAM_Localstorage')
        ? JSON.parse(localStorage?.getItem('WAM_Localstorage') ?? '')
        : null
    );

    getMyHoldings(userInfo)
      .then((response) => response.json())
      .then((data) => {
        setMyHoldings(data);

        // const mappedCoins = coinData.map((coin: { myHoldings: string }) => ({
        //   ...coin,
        //   coinsNumber:
        //     holdingData.myHoldings[coin.myHoldings.toUpperCase()] || 0,
        // }));

        // setCoins(mappedCoins);
      });
  }, [localStorage.getItem('WAM_Localstorage')]);

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={10}>
      {coins.map((coin, index) => {
        let currentCoin: CoinList = 'wap';

        for (let coinName in myHoldings?.[0]) {
          if (coinName === coin.coinName.toLowerCase()) {
            currentCoin = coin.coinName.toLowerCase() as CoinList;
          }
        }
        console.log(myHoldings);
        return (
          <Stack key={index} spacing='5px'>
            <Stack justify='flex-start' align='flex-start' spacing='32px'>
              <Stack
                direction='row'
                justify='space-between'
                align='flex-start'
                spacing='49px'
                // width='757px'
                maxWidth='100%'
              >
                <Stack
                  padding='16px'
                  borderRadius='8px'
                  justify='center'
                  align='flex-start'
                  spacing='12px'
                  borderColor='teal.500'
                  borderStartWidth='1px'
                  borderEndWidth='1px'
                  borderTopWidth='1px'
                  borderBottomWidth='1px'
                  width='354px'
                  maxWidth='100%'
                >
                  <Stack
                    direction='row'
                    justify='space-between'
                    align='center'
                    spacing='40px'
                    alignSelf='stretch'
                  >
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
                        {coin.coinName}
                      </Text>
                    </Stack>
                    <Text
                      fontFamily='Inter'
                      lineHeight='1.43'
                      fontWeight='semibold'
                      fontSize='14px'
                      color='#000000'
                    >
                      {myHoldings?.[0][currentCoin]}
                      {/* 보유 개수 : {coinsNum[coin.coinName.toUpperCase()]} */}
                    </Text>
                  </Stack>
                  <Stack justify='center' align='flex-start' spacing='12px'>
                    <Stack justify='center' align='flex-start'>
                      <Text
                        fontFamily='Inter'
                        lineHeight='1.33'
                        fontWeight='semibold'
                        fontSize='24px'
                        color='#000000'
                      >
                        {coin.currentPrice}
                      </Text>
                      <Stack
                        direction='row'
                        justify='flex-start'
                        align='center'
                        spacing='32px'
                      >
                        <Stack
                          direction='row'
                          justify='flex-start'
                          align='center'
                          spacing='4px'
                        >
                          <Text
                            fontFamily='Inter'
                            lineHeight='1.43'
                            fontWeight='semibold'
                            fontSize='14px'
                            color='#FF5353'
                          >
                            {coin.prevPrice}
                          </Text>
                        </Stack>
                        <Stack
                          direction='row'
                          justify='flex-start'
                          align='center'
                          spacing='4px'
                        >
                          <Text
                            fontFamily='Inter'
                            lineHeight='1.43'
                            fontWeight='semibold'
                            fontSize='14px'
                            color='#FF5353'
                          >
                            {coin.currentPrice} - {coin.prevPrice}
                          </Text>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack direction='row' justify='flex-start' align='center'>
                      <Input
                        placeholder='코인 개수'
                        size='xs'
                        // value={inputValues[coin.coinName] || ''}
                        // onChange={(e) =>
                        //   setInputValues((prevInputValues) => ({
                        //     ...prevInputValues,
                        //     [coin.coinName]: e.target.value,
                        //   }))
                        // }
                      />
                      <Button
                        size='xs'
                        variant='outline'
                        colorScheme='red'
                        onClick={coinBuy}
                      >
                        매수
                      </Button>
                      <Button
                        size='xs'
                        variant='outline'
                        colorScheme='green'
                        onClick={coinSell}
                      >
                        매도
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Grid>
  );
};

export default CardList;

// const getCoins = async () => {
//   try {
//     const response = await fetch('/coin', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const coinData = await response.json();
//     console.log(coinData);

//     const holdingResponse = await fetch('/holding/1', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const holdingData = await holdingResponse.json();
//     console.log(holdingData);

//     setCoinsNum(holdingData.coinNum);

//     const mappedCoins = coinData.map((coin) => ({
//       ...coin,
//       coinsNumber: holdingData.coinNum[coin.coinName.toUpperCase()] || 0,
//     }));

//     setCoins(mappedCoins);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// useEffect(() => {
//   getCoins();
// }, []);

// const coinBuy = (coinName) => {
//   const inputValue = inputValues[coinName] || '';

//   const amountToBuy = parseFloat(inputValue);
//   if (isNaN(amountToBuy) || amountToBuy <= 0) {
//     alert('올바른 숫자를 입력하세요.');
//     return;
//   }

//   setCoinsNum((prevCoinsNum) => ({
//     ...prevCoinsNum,
//     [coinName.toUpperCase()]:
//       prevCoinsNum[coinName.toUpperCase()] + amountToBuy,
//   }));

//   setInputValues((prevInputValues) => ({
//     ...prevInputValues,
//     [coinName]: '',
//   }));
// };

// const coinSell = (coinName) => {
//   const inputValue = inputValues[coinName] || '';

//   const amountToSell = parseFloat(inputValue);
//   if (isNaN(amountToSell) || amountToSell <= 0) {
//     alert('올바른 숫자를 입력하세요.');
//     return;
//   }

//   const currentCoinsNum = coinsNum[coinName.toUpperCase()] || 0;

//   if (amountToSell > currentCoinsNum) {
//     alert('보유한 코인의 개수보다 많이 팔 수 없습니다.');
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [coinName]: '',
//     }));
//     return;
//   } else {
//     setCoinsNum((prevCoinsNum) => ({
//       ...prevCoinsNum,
//       [coinName.toUpperCase()]:
//         prevCoinsNum[coinName.toUpperCase()] - amountToSell,
//     }));
//   }

//   setInputValues((prevInputValues) => ({
//     ...prevInputValues,
//     [coinName]: '',
//   }));
// };
