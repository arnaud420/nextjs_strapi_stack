import Head from 'next/head'

export default function Home({ articles }) {
  return (
    <div className="section">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="columns">
          <div className="column">
            {articles.map((article) => (
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img src={`http://localhost:1337${article.image.url}`} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p class="title is-4">{article.title}</p>
                    <p>{article.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await fetch(`http://back:1337/articles`);
  const articles = await data.json();
  return {
    props: {
      articles,
    },
  }
}