import {Fragment} from 'react'
import clientApi from '../api/clientApi'
import DefaultLayout from '../layouts/defaultLayout'
import Link from 'next/link'

const HomePage = (props) => {

  const {datas} = props

  return (
    <Fragment>
      <DefaultLayout>
        
        <h1>{datas.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: datas.content.rendered }} />

      </DefaultLayout>
    </Fragment>
  )
}

HomePage.getInitialProps = async ctx => {
  const res = await clientApi.getPage(22)
  return {
    datas: res.data[0]
  }
}

  export default HomePage