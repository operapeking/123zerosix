export interface Stop {
  station: string;
  arrival: string;
  departure: string;
}

export interface TrainClass {
  uid: string;
  name: '商务座' | '一等座' | '二等座' | '一等卧' | '二等卧' | '硬座' | '无座';
  price: number;
  remainingTickets: number;
}

export type TrainType = '动车' | '高铁' | '特快' | '直达';

export interface Train {
  id: string;
  number: string;
  types: TrainType[];
  departure: {
    station: string;
    time: string;
    icon?: string;
  };
  arrival: {
    station: string;
    time: string;
    icon?: string;
  };
  classes: TrainClass[];
  stops: Stop[];
}