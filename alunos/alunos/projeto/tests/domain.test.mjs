import test from 'node:test';
import assert from 'node:assert/strict';

import {
  QueueManager,
  TicketStatus,
} from '../src/domain.mjs';

function createQueue() {
  return new QueueManager();
}

test('AC-01: emitir uma senha cria um número sequencial e a coloca em WAITING', () => {
  const queue = createQueue();
  const ticket = queue.createTicket();

  assert.equal(ticket.number, 1);
  assert.equal(ticket.status, TicketStatus.WAITING);
});

test('AC-02: emissões sucessivas incrementam a numeração sem saltos', () => {
  const queue = createQueue();

  const first = queue.createTicket();
  const second = queue.createTicket();
  const third = queue.createTicket();

  assert.deepEqual(
    [first.number, second.number, third.number],
    [1, 2, 3],
  );
  assert.equal(first.status, TicketStatus.WAITING);
  assert.equal(second.status, TicketStatus.WAITING);
  assert.equal(third.status, TicketStatus.WAITING);
});

test('AC-03: a próxima senha chama a mais antiga em WAITING e a move para IN_SERVICE', () => {
  const queue = createQueue();
  const first = queue.createTicket();
  const second = queue.createTicket();

  const next = queue.getNext();

  assert.equal(next.number, first.number);
  assert.equal(next.status, TicketStatus.IN_SERVICE);
  assert.equal(second.status, TicketStatus.WAITING);
});

test('AC-04: quando há múltiplas senhas aguardando, a ordem de atendimento preserva a ordem de chegada', () => {
  const queue = createQueue();
  queue.createTicket();
  queue.createTicket();
  queue.createTicket();

  const first = queue.getNext();
  queue.finishTicket(first.number);
  const second = queue.getNext();

  assert.equal(first.number, 1);
  assert.equal(second.number, 2);
  assert.equal(first.status, TicketStatus.FINISHED);
  assert.equal(second.status, TicketStatus.IN_SERVICE);
});

test('AC-05: o sistema mantém apenas uma senha em atendimento por vez', () => {
  const queue = createQueue();
  queue.createTicket();
  queue.createTicket();

  queue.getNext();
  const inServiceTickets = queue.tickets.filter((ticket) => ticket.status === TicketStatus.IN_SERVICE);

  assert.equal(inServiceTickets.length, 1);
});

test('AC-06: finalizar atendimento move a senha para FINISHED', () => {
  const queue = createQueue();
  const ticket = queue.createTicket();
  queue.getNext();

  const finished = queue.finishTicket(ticket.number);

  assert.equal(finished.number, ticket.number);
  assert.equal(finished.status, TicketStatus.FINISHED);
});

test('AC-07: a fila expõe corretamente os grupos WAITING, IN_SERVICE e FINISHED', () => {
  const queue = createQueue();
  const first = queue.createTicket();
  const second = queue.createTicket();

  queue.getNext();
  queue.finishTicket(first.number);

  const waiting = queue.tickets.filter((ticket) => ticket.status === TicketStatus.WAITING);
  const inService = queue.tickets.filter((ticket) => ticket.status === TicketStatus.IN_SERVICE);
  const finished = queue.tickets.filter((ticket) => ticket.status === TicketStatus.FINISHED);

  assert.deepEqual(waiting.map((ticket) => ticket.number), [2]);
  assert.deepEqual(inService.map((ticket) => ticket.number), []);
  assert.deepEqual(finished.map((ticket) => ticket.number), [1]);
  assert.deepEqual(
    [first.status, second.status],
    [TicketStatus.FINISHED, TicketStatus.WAITING],
  );
});
