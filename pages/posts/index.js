import DefaulLayout from '../../layouts/defaultLayout'
import clientApi from '../../api/clientApi'
import Link from 'next/link'

const Posts = (props) => {

    const {posts} = props

    return (
            <>
                <DefaulLayout>
                <h1>Les articles : </h1>
                {posts.map( post => {
                    return (
                        <li key={ post.id }>
                            <Link href={ `/${ post.slug }` }>
                                <a>{ post.title.rendered }</a>
                            </Link>
                        </li>
                    )
                })}
                </DefaulLayout>
            </>
        )
}
export async function getServerSideProps(ctx) {
  const res = await clientApi.getPosts(15)
  return {
      props: {
          posts: res.data
      }
  }
}

export default Posts