# Informações do projeto — incompleto

> Este arquivo deve registrar decisões do projeto que não pertencem aos diagramas. Resolva os TODOs apenas depois da discussão da equipe.

## Nome

Fila Mack.

## Problema

O setor acadêmico precisa controlar a fila de atendimento.

## Objetivo

Construir um sistema para emitir e chamar senhas.

## Usuários

- Aluno.
- Atendente.

## Escopo

- emissão de senhas;
- chamada de senhas;
- finalização de atendimento;
- visualização da fila.

## Fora do escopo

- cadastro de aluno;
- autenticação ou autorização;
- banco de dados ou persistência em arquivo;
- senhas prioritárias;
- múltiplos atendentes ou atendimento concorrente;
- integrações externas;
- recursos de produção ou manutenção de dados após o encerramento da sessão.

## Restrições técnicas

- aplicação web de página única;
- implementação em HTML, CSS e JavaScript puro, sem bibliotecas externas;
- dados mantidos somente em memória durante a sessão atual;
- ausência de autenticação, banco de dados e backend;
- uma única fila, um único atendente e nenhuma prioridade entre senhas.

## Definição de concluído

O projeto será considerado concluído quando:

- a aplicação funcionar em navegador como interface de uma única fila;
- o aluno conseguir emitir senha e visualizar o número recebido;
- o atendente conseguir chamar a próxima senha na ordem de chegada e visualizar a fila atual;
- o atendente conseguir finalizar o atendimento atual e registrar a senha como concluída;
- o comportamento observado estiver em conformidade com o BRIEF e com as regras de negócio definidas para o workshop;
- não houver dependência de autenticação, banco, persistência fora da sessão nem atendimento simultâneo.

## Comandos

TODO: registrar os comandos de testes e execução.

