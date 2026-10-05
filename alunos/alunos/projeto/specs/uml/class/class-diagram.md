# Diagrama de classes — inconsistente

```plantuml
@startuml
hide empty members
skinparam classAttributeIconSize 0

enum TicketStatus {
  WAITING
  IN_SERVICE
  FINISHED
}

class Ticket {
  +number: Number
  +status: TicketStatus
  +createdAt: Date
  +serve(): void
  +finish(): void
}

class QueueManager {
  -tickets: Ticket[]
  -nextNumber: Number
  +createTicket(): Ticket
  +getNext(): Ticket
  +finishTicket(number): Ticket
}

Ticket --> TicketStatus : status
QueueManager "1" *-- "0..*" Ticket : stores

note right of QueueManager
  TODO: conferir nomes, retornos,
  estado atual e operações de consulta.
end note
@enduml
```

## Contratos complementares

TODO: definir pré-condições, erros e proteção da coleção interna.

