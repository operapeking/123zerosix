import { Train } from '@/types/train';

export const trains: Train[] = [
  {
    id: '1',
    number: 'G1',
    types: ['高铁'],
    departure: {
      station: '北京南',
      time: '07:00',
      icon: 'https://img.icons8.com/ios/50/beijing.png',
    },
    arrival: {
      station: '南京南',
      time: '10:24',
      icon: 'https://img.icons8.com/ios/50/flower--v2.png',
    },
    classes: [
      {
        uid: '1',
        name: '商务座',
        price: 1506.0,
        remainingTickets: 8
      },
      {
        uid: '2',
        name: '一等座',
        price: 747.0,
        remainingTickets: 8
      },
      {
        uid: '3',
        name: '二等座',
        price: 445.0,
        remainingTickets: 32
      },
    ],
    stops: [
      {
        station: '北京南',
        arrival: '-',
        departure: '07:00',
      },
      {
        station: '天津南',
        arrival: '07:31',
        departure: '07:33',
      },
      {
        station: '南京南',
        arrival: '10:24',
        departure: '10:26',
      },
      {
        station: '上海',
        arrival: '11:29',
        departure: '-',
      },
    ],
  },
  {
    id: '2',
    number: 'D7',
    types: ['动车'],
    departure: {
      station: '北京',
      time: '19:22',
      icon: 'https://img.icons8.com/ios/50/beijing.png',
    },
    arrival: {
      station: '南京',
      time: '28:52', // Next day 04:52
      icon: 'https://img.icons8.com/ios/50/flower--v2.png',
    },
    classes: [
      {
        uid: '4',
        name: '二等座',
        price: 233.0,
        remainingTickets: 12
      },
      {
        uid: '5',
        name: '一等卧',
        price: 443.0,
        remainingTickets: 12
      },
      {
        uid: '6',
        name: '二等卧',
        price: 350.0,
        remainingTickets: 12
      },
    ],
    stops: [
      {
        station: '北京',
        arrival: '-',
        departure: '19:22',
      },
      {
        station: '南京',
        arrival: '28:52',
        departure: '28:58',
      },
      {
        station: '南京南',
        arrival: '34:24',
        departure: '34:26',
      },
      {
        station: '上海',
        arrival: '31:25',
        departure: '-',
      },
    ],
  },
  {
    id: '3',
    number: 'Z281',
    types: ['直达'],
    departure: {
      station: '北京丰台',
      time: '18:56',
      icon: 'https://img.icons8.com/ios/50/beijing.png',
    },
    arrival: {
      station: '南京',
      time: '29:11', // Next day 05:11
      icon: 'https://img.icons8.com/ios/50/flower--v2.png',
    },
    classes: [
      {
        uid: '7',
        name: '一等卧',
        price: 381.5,
        remainingTickets: 10
      },
      {
        uid: '8',
        name: '二等卧',
        price: 244.5,
        remainingTickets: 50
      },
      {
        uid: '9',
        name: '硬座',
        price: 141.5,
        remainingTickets: 1
      },
      {
        uid: '10',
        name: '无座',
        price: 141.5,
        remainingTickets: 0
      },
    ],
    stops: [
      {
        station: '包头',
        arrival: '-',
        departure: '08:09',
      },
      {
        station: '呼和浩特',
        arrival: '09:55',
        departure: '10:03',
      },
      {
        station: '北京丰台',
        arrival: '18:56',
        departure: '19:21',
      },
      {
        station: '徐州',
        arrival: '26:14',
        departure: '26:23',
      },
      {
        station: '南京',
        arrival: '29:11',
        departure: '29:19',
      },
      {
        station: '杭州',
        arrival: '34:57',
        departure: '-',
      },
    ],
  },
];