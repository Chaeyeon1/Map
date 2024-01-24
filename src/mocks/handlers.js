import { HttpResponse, http } from 'msw';

export const handlers = [
  // 할일 목록
  http.get('/login/:id', () => {
    return HttpResponse.json({
      id: 'Due',
    });
  }),

  // 할일 추가
  http.get('/myinfo/:id', () => {
    return HttpResponse.json({
      id: 'Due',
      bits: 5700,
      WAP: 3,
      APP: 5,
      MUT: 2,
      PKNU: 3,
      PUS: 1,
      PUFS: 0,
    });
  }),

  http.get('/ranking', () => {
    return HttpResponse.json({
      ranking: [50000, 40000, 30000, 100],
    });
  }),

  http.get('/coin', () => {
    return HttpResponse.json([
      {
        coinName: 'APP',
        coin_price: {
          prevPrice: 150,
          currentPrice: 240,
        },
      },
      {
        coinName: 'BUFS',
        coin_price: {
          prevPrice: 50000,
          currentPrice: 55000,
        },
      },
      {
        coinName: 'MUT',
        coin_price: {
          prevPrice: 50000,
          currentPrice: 55000,
        },
      },
      {
        coinName: 'PKNU',
        coin_price: {
          prevPrice: 50000,
          currentPrice: 55000,
        },
      },
      {
        coinName: 'PNU',
        coin_price: {
          prevPrice: 50000,
          currentPrice: 55000,
        },
      },
      {
        coinName: 'WAP',
        coin_price: {
          prevPrice: 50000,
          currentPrice: 55000,
        },
      },
    ]);
  }),
  http.get('/holding/:wallet', () => {
    return HttpResponse.json({
      wallet: 1,
      coinNum: {
        PKNU: 10,
        PNU: 10,
        BUFS: 20,
        WAP: 30,
        MUT: 25,
        APP: 100,
        total: 10000,
      },
    });
  }),
];
