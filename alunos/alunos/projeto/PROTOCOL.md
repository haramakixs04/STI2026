# Protocolo de desenvolvimento humano–IA — incompleto

## Finalidade

Definir como a equipe e o agente trabalharão durante o projeto.

## Fonte de verdade

- BRIEF: define o problema, o contexto e os objetivos do sistema.
- PROJECT: registra as decisões do projeto e as restrições aprovadas pela equipe.
- UML: representa a especificação funcional e o comportamento esperado.
- VALIDATION: define as evidências e critérios para confirmar o funcionamento.

## Responsabilidades humanas

- informar o objetivo geral;
- aprovar decisões do projeto e os critérios de aceitação;
- aceitar o resultado produzido pelo agente;
- revisar qualquer conflito entre documentos antes de prosseguir.

## Responsabilidades do agente

- produzir o sistema solicitado;
- obedecer ao BRIEF e ao PROJECT como referência primária;
- respeitar a especificação dos diagramas UML quando estiver coerente com a intenção do projeto;
- interromper imediatamente quando a especificação estiver contraditória e reportar o conflito antes de continuar;
- modificar outros documentos apenas quando isso for necessário para manter consistência da especificação e sem criar requisitos de negócio novos.

## Regras de interação

1. Cada prompt deve informar a tarefa.
2. O agente deve interromper ao detectar contradição documental ou especificação incoerente.
3. Não é necessário revisar alterações intermediárias se o sistema executar.

## Política de falhas

- Se houver contradição entre BRIEF, PROJECT, UML ou VALIDATION, a IA deve interromper e reportar o conflito, sem preencher a lacuna por suposição.
- Se houver erro de código ou de ambiente, o agente deve diagnosticar e corrigir dentro do escopo aprovado.
- A IA não deve inventar requisitos de negócio nem ampliar o escopo que não esteja explícito nos documentos de referência.

## Evidência mínima

Ao concluir cada etapa, o agente deve informar:

- o objetivo da etapa;
- os documentos ou arquivos considerados;
- a evidência executada ou verificada;
- qualquer contradição detectada e se a execução foi interrompida;
- o estado final da etapa em relação ao objetivo proposto.

