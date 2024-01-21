import { HttpResponse, http } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  // 할일 목록
  http.get('https://jsonplaceholder.typicode.com/posts/:id', () => {
    return HttpResponse.json({
      id : 'due'
    });
  }),

  // 할일 추가
  http.get('getMyCoin/:id', () => {
    return HttpResponse.json({
      WAP : 3,
      APP : 5,
      MUT : 2,
      PKNU : 3,
      PUS : 1,
      PUFS : 0
    });
  }),
];
