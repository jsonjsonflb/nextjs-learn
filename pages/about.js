import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const About = () => {
  const route = useRouter();
  console.log(route);
  return (
    <Layout>
      <p>Hello About</p>
    </Layout>
  );
};

export default About;
