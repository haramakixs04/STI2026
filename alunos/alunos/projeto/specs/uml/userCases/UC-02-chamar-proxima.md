# UC-02 — Chamar próxima senha

## Objetivo

Permitir que o atendente chame a próxima senha da fila, seguindo a ordem de chegada.

## Ator principal

Atendente.

## Pré-condições

- A aplicação está aberta.
- Existe pelo menos uma senha com estado `WAITING`.
- Há apenas um atendente operando a aplicação.

## Gatilho

O atendente aciona **Chamar próxima**.

## Fluxo principal

1. O sistema identifica a primeira senha em estado `WAITING` na ordem de chegada.
2. A senha selecionada é transferida para o estado `IN_SERVICE`.
3. A interface apresenta a senha em atendimento ao atendente.

## Fluxos alternativos

- Se não houver senha em `WAITING`, o sistema não chama nenhuma senha e informa que a fila está vazia.
- Se houver várias senhas em `WAITING`, o sistema escolhe a mais antiga, preservando a ordem de chegada.
- Se já houver uma senha em `IN_SERVICE`, a operação não seleciona outra senha até que o atendimento atual seja finalizado.

## Pós-condições

- A senha selecionada está em atendimento.
- A fila permanece ordenada pela ordem de chegada.

## Regras relacionadas

- RN-02.
- RN-03.
- RN-04.

