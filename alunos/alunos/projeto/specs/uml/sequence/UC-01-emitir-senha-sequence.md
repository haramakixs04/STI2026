# Sequência — UC-01 Emitir senha — incompleta

```plantuml
@startuml
actor Aluno
boundary Interface
control QueueManager
entity Ticket

Aluno -> Interface: aciona Emitir senha
Interface -> QueueManager: createTicket()z
QueueManager -> Ticket: new(number)
QueueManager --> Interface: ticket
Interface --> Aluno: mostra número

' TODO: representar armazenamento, incremento e atualização da fila
@enduml
```

