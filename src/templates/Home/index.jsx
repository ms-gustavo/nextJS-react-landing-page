import { useEffect } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';
import { mapData } from '../../api/map-data';

function Home() {
  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep');
      const json = await data.json();
      const { attributes } = json.data[0];
      const pageData = mapData([attributes]);
      console.log(pageData);
    };

    load();
  }, []);

  return <Base {...mockBase} />;
}

export default Home;
