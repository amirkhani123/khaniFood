import { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <div>
          <Toaster />
        </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
