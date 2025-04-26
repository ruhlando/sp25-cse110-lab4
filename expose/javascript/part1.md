### Part 1. A Quick Introduction

1. 20
2. 20
3. You generally want to avoid `var` because it’s **function-scoped**, which can lead to subtle bugs (e.g. accidentally re-declaring or using a variable outside the block you intended). Instead, use `let` (for reassignable bindings) and `const` (for read-only bindings), both of which are **block-scoped** and much safer.
4. 20
5. Error because result was declared with `let`here inside the if block. That is why it is not visible outside the if block.
6. Error because you can not reassign a value to a `const`variable. Here it is already declared to '0' in line 5.
7. See answer for question 6.