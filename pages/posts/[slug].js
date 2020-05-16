import { Fragment } from 'react'
import clientApi from '../../api/clientApi'
import DefaulLayout from '../../layouts/defaultLayout'

const Post = (props) => {
    
    const {post} = props

    return (
        <Fragment>
            <DefaulLayout>
                <h1>{ post.title.rendered }</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </DefaulLayout>
        </Fragment>
    )
}

Post.getInitialProps = async ctx => {
  const res = await clientApi.getPost(ctx.query.slug)
  return {
      post: res.data[0],
  }
}

export default Post