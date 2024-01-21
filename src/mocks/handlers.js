import { HttpResponse, http } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  // 할일 목록
  http.get('/login/:id', () => {
    return HttpResponse.json({
      id : 'Due'
    });
  }),

  // 할일 추가
  http.get('/myinfo/:id', () => {
    return HttpResponse.json({
      id : 'Due',
      bits : 5700,
      WAP : 3,
      APP : 5,
      MUT : 2,
      PKNU : 3,
      PUS : 1,
      PUFS : 0
    });
  }),

  http.get('/ranking', () => {
    return HttpResponse.json({
      ranking : [50000,40000,30000,100]
    });
  }),
];
