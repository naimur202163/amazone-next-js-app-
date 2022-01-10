import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home({ children }) {
  return (
    <div>
      <Layout>
        <h1>Products</h1>
        <ul>
          <li>Products1</li>
          <li>Products2</li>
          <li>Products3</li>
          <li>Products4</li>
        </ul>
      </Layout>
    </div>
  );
}
