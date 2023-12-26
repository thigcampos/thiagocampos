import { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Header } from '@/components';
import { aboutNavigation, pageTitle } from '@/constants/navigations';
import aboutImages from '@/constants/images';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: pageTitle.about
};

export default function About() {
  const renderImages = () => aboutImages.map((image, idx) => (
    <Image className={styles.photo} key={idx} src={image.url} alt={image.alt} loading='lazy' />
  ));

  return (
    <main className={styles.main}>
      <Header navGroup={aboutNavigation}/>
      <section className={styles.content}> 
        <div className={styles.dateWrapper}>
          <span className={styles.date}> 26 de Dezembro de 2023 | 13:12 </span>
        </div>
        <p className={styles.text}>
          Olá! Sou Thiago Campos, um engenheiro de software e entusiasta de design. 
          Residindo nas belas paragens da Mantiqueira. Atuo como desenvolvedor front-end 
          no Launch ATS da Pride Global. Também mantenho e contribuo com algumas aplicações 
          de código aberto, como Watchword e Read You.
        </p>
        <br/><br/>
        <p className={styles.text}>
          Indo além do meu notável interesse por tecnologia, sou um apaixonado pelo design, 
          especialmente pelos segmentos de produtos e arquitetura. A música, aliada à História, 
          à Cinematografia e à Literatura, compõe o coro das minhas grandes paixões.
        </p>
        <br/><br/>
        <p className={styles.text}>
          A afinidade que partilhei anteriormente faz-me crer que estar na interseção entre a 
          tecnologia e as humanidades confere aos meus projetos um propósito que transcende a 
          tecnologia como um mero fim em si mesma.
        </p>
        <br/><br/>
        <p className={styles.text}>
          Entre as distintas personas que carrego, destaca-se sem cerimônia o amante das viagens. 
          Orgulho-me por ter desbravado cerca de um quarto dos Estados que compõem o vasto 
          território do meu país natal. Além disso, já peregrinei por cerca de 6 nações que adornam 
          o ocidente europeu, ansiando por desvendar muitas mais.
        </p>
        <br/><br/>
        <div className={styles.photosWrapper}>
          { renderImages() }
        </div>
        <br/><br/>
        <p className={styles.text}>
          Para encerrar estas linhas, um tanto narcísicas, compartilho fatos sobre mim que não 
          acrescentarão qualquer valor ao leitor: sou um entusiasta do futebol, e fervoroso 
          torcedor do Sport Club Corinthians Paulista e do Futbol Club Barcelona. Também aprecio 
          registrar momentos em fotografias, ainda que nutra uma aversão por figurar nelas.
        </p>
      </section>
      <Footer />
    </main>
  );
}