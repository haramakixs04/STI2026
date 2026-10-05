# UC-01 — Emitir senha

## Objetivo

Permitir que o aluno receba uma senha para participar da fila de atendimento.

## Ator principal

Aluno.

## Pré-condições

- A aplicação está aberta em navegador.
- A fila está disponível para operação.

## Gatilho

O aluno aciona **Emitir senha**.

## Fluxo principal

1. A interface solicita `createTicket()` ao serviço.
2. O serviço gera uma nova senha para a fila atual.
3. A senha é registrada no estado `WAITING`.
4. A interface mostra o número recebido ao aluno.

## Fluxos alternativos

- Se a aplicação não estiver aberta, o aluno não consegue acionar a operação e não é criada uma senha.
- Se a interface não puder concluir a operação, a senha não deve ser registrada e o aluno não recebe um número.

## Pós-condições

- Existe uma nova senha na fila.
- A nova senha entra no estado `WAITING`.

## Regras relacionadas

- RN-01.
- RN-02.
- RN-03.

