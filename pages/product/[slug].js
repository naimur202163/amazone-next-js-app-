import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { NextLink } from 'next/link';
import { Link } from '@material-ui/core';

const ProdcutScreen = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <Layout title="product">
        <NextLink>
          <Link>Back to the products</Link>
        </NextLink>
      </Layout>
    </div>
  );
};

export default ProdcutScreen;
