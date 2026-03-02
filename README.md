# 🎰 Pro-Logic Lottery Game

A React application demonstrating **Inverse Data Flow** and **Functional Prop Injection**.

### 🌟 Special Features
- **Predicate-Based Winning:** The winning logic isn't hardcoded. It's passed as a `winCondition` function, allowing for "Sum of N", "All Even", or "Palindromic" wins.
- **Atomic UI:** Uses a strict hierarchy: `Lottery` (Organism) -> `Ticket` (Molecule) -> `TicketNum` (Atom).
- **Zero-Dependency Logic:** The core math engine is 100% decoupled from React for easy unit testing.
