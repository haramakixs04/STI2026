# Plano de validação

## Estratégia

O sistema será validado com testes automatizados executados pelo runner nativo do Node.js (`node --test`), além de checagens manuais pontuais no navegador quando a implementação estiver disponível.

## Critérios automatizados

Os critérios abaixo foram derivados a partir da especificação UML congelada e das regras de negócio do projeto.

- AC-01: ao emitir uma senha, o sistema gera um número sequencial e a senha entra no estado `WAITING`.
- AC-02: emissões sucessivas produzem números em ordem crescente e sem saltos.
- AC-03: a chamada da próxima senha seleciona a senha mais antiga em `WAITING` e a coloca em `IN_SERVICE`.
- AC-04: quando existem múltiplas senhas aguardando, a ordem de atendimento preserva a ordem de chegada.
- AC-05: o sistema mantém uma única senha em atendimento por vez, conforme a regra de atendimento exclusivo.
- AC-06: a finalização de uma senha em atendimento a move para `FINISHED`.
- AC-07: a visualização da fila expõe corretamente os grupos de senhas em `WAITING`, `IN_SERVICE` e `FINISHED`.

## Validação manual

- abrir a aplicação no navegador;
- emitir senhas em sequência;
- confirmar que a fila ordena por chegada;
- chamar a próxima senha e verificar que apenas a senha selecionada fica em atendimento;
- finalizar o atendimento e confirmar que a senha sai da fila ativa e aparece como concluída;
- verificar a visibilidade da fila em cada estado.

## Matriz de rastreabilidade

| Caso de uso | Regra | Diagrama principal | Critério |
|---|---|---|---|
| UC-01 | RN-01, RN-03 | Diagrama de casos de uso e diagramas de estados | AC-01, AC-02 |
| UC-02 | RN-02, RN-03, RN-04 | Diagrama de casos de uso, diagrama de estados e sequência UC-02 | AC-03, AC-04, AC-05 |
| UC-03 | RN-03, RN-04, RN-05 | Diagrama de casos de uso, diagrama de estados e sequência UC-03 | AC-05, AC-06 |
| UC-04 | RN-02, RN-03, RN-04, RN-05 | Diagrama de casos de uso e visão da fila | AC-07 |

