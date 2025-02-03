### GraphQL Dataloader Demo

#### 1️⃣ Install Dependencies

```sh
npm install apollo-server graphql dataloader
```

#### 2️⃣ Start the N+1 Problem Demo

```sh
node index.js
```

#### 3️⃣ Run the Optimized Dataloader Version

```sh
node index_fixed.js
```

#### 4️⃣ Run a GraphQL Query

Open [http://localhost:4000](http://localhost:4000) and run:

```graphql
query {
  books {
    title
    author {
      name
    }
  }
}
```

In the first version (`index.js`), each book fetches the author separately (**N+1 problem**).

In the optimized version (`index_fixed.js`), **Dataloader batches author queries**, making it much more efficient! 🚀
