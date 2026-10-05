export const TicketStatus = Object.freeze({
  WAITING: 'WAITING',
  IN_SERVICE: 'IN_SERVICE',
  FINISHED: 'FINISHED',
});

export class Ticket {
  constructor(number) {
    this.number = Number(number);
    this.status = TicketStatus.WAITING;
    this.createdAt = new Date();
  }

  serve() {
    if (this.status !== TicketStatus.WAITING) {
      throw new Error('Only waiting tickets can be served.');
    }

    this.status = TicketStatus.IN_SERVICE;
    return this;
  }

  finish() {
    if (this.status !== TicketStatus.IN_SERVICE) {
      throw new Error('Only tickets in service can be finished.');
    }

    this.status = TicketStatus.FINISHED;
    return this;
  }
}

export class QueueManager {
  constructor() {
    this.tickets = [];
    this.nextNumber = 1;
  }

  createTicket() {
    const ticket = new Ticket(this.nextNumber);
    this.tickets.push(ticket);
    this.nextNumber += 1;
    return ticket;
  }

  getNext() {
    const ticket = this.tickets.find((item) => item.status === TicketStatus.WAITING);

    if (!ticket) {
      return undefined;
    }

    return ticket.serve();
  }

  finishTicket(number) {
    const ticket = this.tickets.find((item) => item.number === Number(number));

    if (!ticket) {
      return undefined;
    }

    return ticket.finish();
  }

  getWaiting() {
    return this.tickets.filter((ticket) => ticket.status === TicketStatus.WAITING);
  }

  getInService() {
    return this.tickets.filter((ticket) => ticket.status === TicketStatus.IN_SERVICE);
  }

  getFinished() {
    return this.tickets.filter((ticket) => ticket.status === TicketStatus.FINISHED);
  }
}

export const QueueService = QueueManager;

export default {
  TicketStatus,
  Ticket,
  QueueManager,
  QueueService,
};
