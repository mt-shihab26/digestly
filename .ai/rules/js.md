---
paths:
  - 'resources/js/**/*.tsx'
---

# Js

## Type React component props inline
Declare React component props as an inline type in the component signature, e.g. `({ status }: { status?: string }) => ...`. Do not create separate `type Props = {...}` or `interface Props` declarations.
