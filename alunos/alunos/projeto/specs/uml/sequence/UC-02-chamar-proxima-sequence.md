# Sequência — UC-02 Chamar próxima senha — incompleta

```plantuml
@startuml
actor Atendente
boundary Interface
control QueueManager
entity Ticket

Atendente -> Interface: aciona Chamar próxima
Interface -> QueueManager: getNext()
QueueManager -> Ticket: serve()
Ticket -> Ticket: status = CALLED
QueueManager --> Interface: ticket
Interface --> Atendente: mostra senha

' TODO: representar fila vazia, atendimento existente e atualização da visão
@enduml
```

