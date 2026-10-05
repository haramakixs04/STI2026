# Sequência — UC-03 Finalizar atendimento — incompleta

```plantuml
@startuml
actor Atendente
boundary Interface
control QueueManager
entity Ticket

Atendente -> Interface: informa número e aciona Finalizar
Interface -> QueueManager: finishTicket(number)
QueueManager -> Ticket: finish()
Ticket -> Ticket: status = FINISHED
QueueManager --> Interface: ticket
Interface --> Atendente: confirma finalização

' TODO: representar ausência de atendimento e atualização da visão
@enduml
```

