import { Fragment } from 'react'
import clientApi from '../../api/clientApi'
import DefaulLayout from '../../layouts/defaultLayout'

const BonPlan = (props) => {
    
    const {bonPlan} = props

    return (
        <Fragment>
            <DefaulLayout>
                <h1>{ bonPlan.title.rendered }</h1>
                <div dangerouslySetInnerHTML={{ __html: bonPlan.content.rendered }} />
            </DefaulLayout>
        </Fragment>
    )
}

BonPlan.getInitialProps = async ctx => {
  const res = await clientApi.getBonPlan(ctx.query.slug)
  return {
      bonPlan: res.data[0]
  }
}

export default BonPlan