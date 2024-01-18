import { HttpResponse, http } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  // 할일 목록
  http.get('https://jsonplaceholder.typicode.com/posts/:id', () => {
    return HttpResponse.json({
      coin: [
        ['WAP', 'MAP'],
        ['JJJ', 'KKK'],
      ],
    });
  }),

  // 할일 추가
  http.post('/todos', (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
