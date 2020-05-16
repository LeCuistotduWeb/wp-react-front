import DefaulLayout from '../../layouts/defaultLayout'
import { Fragment } from 'react'
import clientApi from '../../api/clientApi'
import Link from 'next/link'

const Posts = (props) => {

    const {posts} = props

    return (
            <Fragment>
                <DefaulLayout>
                <h1>posts : </h1>
                {posts.map( post => {
                    return (
                        <li key={ post.id }>
                            <Link href={ `/posts/${ post.slug }` }>
                                <a>{ post.title.rendered }</a>
                            </Link>
                        </li>
                    )
                })}
                </DefaulLayout>
            </Fragment>
        )
}

Posts.getInitialProps = async ctx => {
  const res = await clientApi.getPosts()
  return { posts: res.data }
}

export default Posts