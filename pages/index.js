import Link from 'next/link'
import DefaultLayout from '../layouts/defaultLayout'
import defaultConfig from '../config'
import clientApi from '../api/clientApi'

const HomePage = ({posts}) => {

  return (
    <>
      <DefaultLayout>
        <h1>{defaultConfig.shortName}</h1>

        <h2>Les derniers articles :</h2>
        {posts && posts.map( post => {
            return (
                <li key={ post.id }>
                    <Link href={ `/${ post.slug }` }>
                        <a>{ post.title.rendered }</a>
                    </Link>
                </li>
            )
        })}

      </DefaultLayout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await clientApi.getPosts(5)
  return {
      props: {
          posts: res.data
      }
  }
}

export default HomePage