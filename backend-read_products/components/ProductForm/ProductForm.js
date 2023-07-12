import useSWR from "swr";

export default function ProductForm() {
  const products = useSWR("/api/products");
  // We're declaring jokes here because we call the .mutate() method below.

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    // We're declaring jokeData and filling it with the values we've extracted from our form via Object.fromEntries().

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      products.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new product</h1>
      <label htmlFor="product-input">Name: </label>
      <input type="text" id="product-input" name="name" />
      <br />
      <label htmlFor="product-input">Description: </label>
      <input type="text" id="product-input" name="description" />
      <br />
      <label htmlFor="product-input">Price: </label>
      <input type="number" id="product-input" name="price" />
      <br />
      <label htmlFor="product-input">currency: </label>
      <input type="text" id="product-input" name="currency" />

      <button type="submit">Submit</button>
    </form>
  );
}
