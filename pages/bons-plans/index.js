import DefaulLayout from '../../layouts/defaultLayout'
import { Fragment } from 'react'
import clientApi from '../../api/clientApi'
import Link from 'next/link'

const BonsPlans = (props) => {

    const {bonsPlans} = props

    return (
            <Fragment>
                <DefaulLayout>
                <h1>Bons plans</h1>
                {bonsPlans.map( bonPlan => {
                    return (
                        <li key={ bonPlan.id }>
                            <Link href={ `/bons-plans/${ bonPlan.slug }` }>
                                <a>{ bonPlan.title.rendered }</a>
                            </Link>
                        </li>
                    )
                })}
                </DefaulLayout>
            </Fragment>
        )
}

BonsPlans.getInitialProps = async ctx => {
  const res = await clientApi.getBonsPlans()
  return { bonsPlans: res.data }
}

export default BonsPlans