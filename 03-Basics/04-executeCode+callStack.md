# Js Execution Context
- Gloabal EC
- Function EC
- Eval EC (Property of global)

# Phases
- Memory Creation Phase
- Execution Phase

# Steps
- Global Execution => Code allocated in "this"
- Memory Phase => Memory created, pehle undefined set
- Execution Phase => Value assigned to variables, for a function, a new Execution Context is created which contains its own new variable environment (NVE) and execution thread; iss context ke liye phir se memory and execution phase define hoga. Function returns in global context/Parent context. After usage, this additional context gets deleted.


