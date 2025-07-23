interface ProductsProps {
  params: {
    id: string;
  };
}

const Products = ({ params: { id } }: ProductsProps) => {
  return <h1>Products Page: {id}</h1>;
};

export default Products;
