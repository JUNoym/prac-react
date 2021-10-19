import React from 'react'
import styles from '../styles/Home.module.css'

// components
import { Links } from '../components/Links'
import { Headline } from '../components/Headline'

export const Main = (props) => {

    return (
        <div>
            <main className={styles.main}>
                <Headline
                    title={props.title}
                    onClick={props.funcButton}
                >
                    {<code className={styles.code}>pages/{props.path}.js</code>}
                    {/* コンポーネントなどは慣習的にchildrenで渡すことが多い */}
                </Headline>
                <Links />
            </main>
        </div>
    )
}

