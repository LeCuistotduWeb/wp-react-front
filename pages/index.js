import {Fragment} from 'react'
import Link from 'next/link'
import DefaultLayout from '../layouts/defaultLayout'

export default () => {
    return (
      <Fragment>
          <DefaultLayout>
            <h1>Bienvenue sur un site wordpress + React</h1>
            <Link href="/posts"><a href="/posts">voir les articles</a></Link>
          </DefaultLayout>
      </Fragment>
    )
  }