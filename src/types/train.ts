export interface Stop {
  station: string;
  arrival: string;
  departure: string;
}

export interface TrainClass {
  name: '商务座' | '一等座' | '二等座' | '一等卧' | '二等卧' | '硬座' | '无座';
  price: number;
  remainingTickets: number;
}

export interface Train {
  id: string;
  number: string;
  departure: {
    station: string;
    time: string;
  };
  arrival: {
    station: string;
    time: string;
  };
  classes: TrainClass[];
  stops: Stop[];
}