import Head from 'next/head';
import Image from 'next/image';
import { FullpageLockingContainer, Highlight } from 'components';
import { SKILLS, PROJECTS, CONTACT_LINKS } from 'data';
import styles from 'styles/pages/home.module.scss';

export default function Home() {
  return (
    <div id={styles.homepage}>
      <Head>
        <title>Karly Hoffman | Web Developer</title>
        <meta
          name="description"
          content="Karly Hoffman, a Frontend Web Developer based in Chicago."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullpageLockingContainer>
        <div id={styles.intro}>
          <Highlight sectionIndex={0}>
            <h1>Portfolio Website</h1>
            {/* <h1>Karly Hoffman</h1> */}
          </Highlight>
          <p className="subhead">Chicago-based Frontend Developer.</p>
        </div>

        <div id={styles.about}>
          <Highlight sectionIndex={1} color="blue">
            <h2>Web editor turned web developer</h2>
          </Highlight>
          <div className="copy-container">
            <p className="appear">
              Gained{' '}
              <strong>experience writing and organizing content</strong> for
              web pages, now brings that content to life through programming.
            </p>
            <p className="appear">
              Has <strong>an eye for detail</strong> and the ability to add
              functionality to any page or application.
            </p>
            <p className="appear">
              <strong>Knowledgeable, dependable, and versatile</strong> in the
              web industry.
            </p>
          </div>
        </div>

        <div id={styles.skills}>
          <Highlight sectionIndex={2} color="teal">
            <h2>Expertise</h2>
          </Highlight>
          <div className={styles.list_wrapper}>
            {SKILLS.map(({ type, skills }) => (
              <div key={type} className={styles.list}>
                <h3>{type}</h3>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {PROJECTS.map(({
          id,
          title,
          url,
          description,
          technologies,
          features
        }, index) => (
            <div id={`project-${id}`} key={id}>
              <div className="copy-container">
                <Highlight sectionIndex={3 + index} color="yellow">
                  <h2>Work</h2>
                </Highlight>
                <div className="project-desc">
                  <h3>
                    <a href={url} target="_blank">
                      {title}
                    </a>
                  </h3>
                  <p>{description}</p>
                  <h4>Technologies Used:</h4>
                  <ul>
                    {technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

        <div id="contact">
          <Highlight sectionIndex={3 + PROJECTS.length} color="orange">
            <h2>Contact</h2>
          </Highlight>
          <ul>
            {CONTACT_LINKS.map(({ label, url }) => (
              <li key={label + url}>
                <a href={url} target="_blank">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FullpageLockingContainer>

      {/* <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
