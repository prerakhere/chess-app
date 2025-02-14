## Setup
**Step 1**: Fork / Download\
<br>
**Step 2**: Install dependencies and dev-dependencies
```
npm i
```
<br>

**Step 3**: Run CLI script
```
npm run start <PieceType>, <Position>
```
PieceType = King / Queen / Pawn\
Position = 8X8 Grid values between A1-H8\
`npm run start` runs `npx ts-node main.ts` behind the scenes
```
npm run start King, E4
```
\
Output:
> D4, F4, E3, E5, D3, F5, F3, D5
<br>

Run tests with `npm test`
<br>
<br>

## Code / Low Level Architecture

Entry point - `main.ts`

1. **Domain Layer** – Consists of core entities.
2. **Services Layer** – Contains business/application logic.
3. **Controller Layer** – Manages request and response flow.
4. **Clients Layer** – Consists of CLI client (which can be swapped with other clients like Web APIs).
5. **Utils** – Utility functions shared across different layers.
6. **Tests** – Unit tests for various layers.