import { Fragment } from 'react'
import clientApi from '../api/clientApi'
import DefaultLayout from '../layouts/defaultLayout'

const About = (props) => {

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

About.getInitialProps = async ctx => {
    const aboutPageId = 19
    const res = await clientApi.getPage(aboutPageId)
    return {
        datas: res.data[0]
    }
}

export default About