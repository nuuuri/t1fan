import Redis from 'ioredis';

export const redisConnect = new Redis({
  host: '127.0.0.1',
  port: 6379,
});
