# NestJs Backend

## Backend Test

Permutaion, Odd-Int, Smile Face

I use nest cli => nest g resource for each test, so it will automatically generate resource for each one

## Project Structure

The project is organized as follows:

```plaintext
/ns_backend
├── src/
│  ├── odd-int/
│  │   ├── odd-int.controller.ts
│  │   ├── odd-int.service.ts             # code for odd-int
│  │   ├── odd-int.service.spec.ts        # unit test code odd-int by jest
│  │   ├── odd-int.module.ts
│  ├── permutations/
│  │   ├── permutations.controller.ts
│  │   ├── permutations.service.ts        # code for permutaion
│  │   ├── permutations.service.spec.ts   # unit test code permutation by jest
│  │   ├── permutations.module.ts
│  ├── smile-face/
│  │   ├── smile-face.controller.ts
│  │   ├── smile-face.service.ts          # code for smile-face
│  │   ├── smile-face.service.spec.ts     # unit test code smile-face by jest
│  │   ├── smile-face.module.ts
│  ├── app.module.ts
│  ├── main.ts
├── README.md
```


For Permutation, I try to follow this idea, by fixing the character, and swap recursively


![Permutation](https://media.geeksforgeeks.org/wp-content/cdn-uploads/NewPermutation.gif)

## Run Locally

Clone the project

Install dependencies

```bash
  pnpm install
```

Start testing the server

```bash
  pnpm test:watch
```