# Regras de negócio

## RN-01 — Numeração

As senhas recebem números em sequência conforme são emitidas pelo sistema.

## RN-02 — Escolha da próxima senha

O sistema deve escolher a próxima senha seguindo a ordem de chegada, ou seja, a senha que estiver aguardando há mais tempo.

## RN-03 — Estados

Uma senha pode estar `WAITING`, `IN_SERVICE` ou `FINISHED`.

Transições permitidas:

- `WAITING` -> `IN_SERVICE` quando a senha é chamada;
- `IN_SERVICE` -> `FINISHED` quando o atendimento é encerrado;
- `FINISHED` não retorna à fila no fluxo do sistema.

## RN-04 — Atendimento simultâneo

A aplicação deve permitir apenas uma senha em atendimento por vez, em razão de haver apenas um atendente operando a aplicação.

## RN-05 — Finalização

O atendente pode finalizar uma senha informando seu número ou selecionando a senha em atendimento atual, e a senha passa para o estado `FINISHED`.

