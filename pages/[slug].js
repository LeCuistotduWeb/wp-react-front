import clientApi from '../api/clientApi'
import DefaultLayout from '../layouts/defaultLayout'
import CommentForm from '../components/comments/CommentForm'
import CommentsList from '../components/comments/CommentList'

const Page = ({data}) => {

    return (
        <>
        <DefaultLayout>
            <h1>{data.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
        </DefaultLayout>
        </>
    )
}


export async function getServerSideProps(ctx) {
  const res = await clientApi.getPage(ctx.query.slug)
  
  return {
    props: {
      data: res.data[0]
    }
  }
}

export default Page