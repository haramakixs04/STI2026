# UC-04 — Consultar fila

## Objetivo

Permitir que o usuário visualize a situação atual da fila e o estado das senhas.

## Ator principal

Atendente.

## Pré-condições

- A aplicação está aberta.
- A fila foi inicializada e pode conter senhas em diferentes estados.

## Gatilho

O atendente acessa a tela da fila ou a view do sistema atualiza o estado da fila.

## Fluxo principal

1. O sistema reúne as senhas atualmente registradas.
2. O sistema separa as senhas em `WAITING`, `IN_SERVICE` e `FINISHED`.
3. A interface exibe a senha em atendimento, as senhas aguardando e as senhas finalizadas.

## Fluxos alternativos

- Se não houver senhas em espera, a área de espera aparece vazia.
- Se não houver senha em atendimento, a interface mostra que não há atendimento em andamento.
- Se não houver senhas finalizadas, a seção correspondente aparece vazia.

## Pós-condições

- A fila está visível em sua situação atual.
- O usuário consegue acompanhar o andamento do atendimento.

## Regras relacionadas

- RN-02.
- RN-03.
- RN-04.
- RN-05.

