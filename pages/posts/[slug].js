import clientApi from '../../api/clientApi'
import DefaulLayout from '../../layouts/defaultLayout'
import CommentForm from '../../components/comments/CommentForm'
import CommentsList from '../../components/comments/CommentList'

const Post = (props) => {
    
    const {post, comments} = props

    return (
        <>
            <DefaulLayout>
                <h1>{ post.title.rendered }</h1>:
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

                {/* Section Comments */}
                <CommentsList comments={comments} />                               
                <CommentForm post_id={post.id}/>
            </DefaulLayout>
        </>
    )
}

export async function getServerSideProps(ctx) {
  const res = await clientApi.getPost(ctx.query.slug)
  const comments = await clientApi.getPostComment(res.data[0].id)
  return {
      props: {
        post: res.data[0],
        comments: comments.data,
      }
  }
}

export default Post