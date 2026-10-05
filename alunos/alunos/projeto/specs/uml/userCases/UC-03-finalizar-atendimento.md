# UC-03 — Finalizar atendimento

## Objetivo

Encerrar o atendimento atual de uma senha que está sendo atendida.

## Ator principal

Atendente.

## Pré-condições

- A aplicação está aberta.
- Existe uma senha com estado `IN_SERVICE`.

## Gatilho

O atendente informa o número da senha e aciona **Finalizar**.

## Fluxo principal

1. A interface envia `finishTicket(number)` ao serviço.
2. O serviço localiza a senha informada.
3. O serviço altera o estado da senha para `FINISHED`.
4. A interface confirma a finalização para o atendente.

## Fluxos alternativos

- Se o número informado não corresponde a nenhuma senha em `IN_SERVICE`, a operação não altera o estado da fila e é informado que a senha não está em atendimento.
- Se não houver nenhuma senha em atendimento, a operação não realiza finalização e o sistema informa que não existe atendimento aberto.

## Pós-condições

- A senha informada está finalizada.
- A fila passa a refletir que o atendimento foi encerrado.

## Regras relacionadas

- RN-03.
- RN-04.
- RN-05.

